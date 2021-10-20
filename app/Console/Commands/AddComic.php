<?php

namespace App\Console\Commands;

use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;
use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Illuminate\Support\Arr;
use App\Models\Category;
use App\Models\Character;
use App\Models\Comic;
use App\Models\ComicSource;
use App\Models\Group;
use App\Models\ComicImage;
use App\Models\Tag;
use App\Models\Language;
use App\Models\Artist;
use App\Models\Author;
use App\Models\Chapter;
use App\Models\Parody;
use App\Models\Relationship;
use App\Scrapers\Scraper;

class AddComic extends Command
{
    protected $signature = 'comic:add {link}';

    protected $description = 'Add a comic to the database';

    public $comic;
    private $relationships;

    public function handle(Scraper $scraper)
    {
        $this->scraper = $scraper;
        //pcntl_async_signals(true);

        // pcntl_signal(SIGINT, function() {
        //     $this->fail();
        // });
        // pcntl_signal(SIGTERM, function() {
        //     $this->fail();
        // });

        DB::table('scraper')->where('link', $this->argument('link'))->existsOr(function () {
            DB::table('scraper')->insertGetId([
                'link' => $this->argument('link'),
                'type' => 'index',
                'scraper' => 'manual'
            ]);
        });
        $this->queue = DB::table('scraper')->where('link', $this->argument('link'))->first();
        if ($this->queue->status === 'processing') throw new \Exception('Comic being processed.');
        DB::table('scraper')->where(['id' => $this->queue->id])->update(['status' => 'processing']);

        $this->comic = null;
        $this->downloaded = 0;
        $time_start = microtime(true);

        $source = ComicSource::whereLink($this->queue->link)->first();
        $data = $this->getData($this->queue->link);
        $comic = Comic::whereTitle($data['title'])->first();

        try {
            if ($source || $comic) {
                $this->comment("\nUpdating \"{$data['title']}\" ({$this->queue->link})");
                if ($source && $source->disabled) {
                    $this->warn('This source is disabled for this comic.');
                } else {
                    if ($source) $comic = $source->comic;
                    else {
                        $this->line("Adding {$this->queue->link} to sources.");
                        $comic->sources()->create(['link' => $this->queue->link]);
                    }

                    $this->line('Updating the comic...');
                    $comic->timestamps = false;
                    $comic->update(collect($data)->only('status', 'alternative_title', 'language_id', 'category_id', 'uploaded_at')->reject(function($value) {
                        return !$value;
                    })->toArray());
                    $comic->timestamps = true;

                    // $comic->authors()->syncWithoutDetaching($this->processAuthors($data['authors']));
                    // $comic->artists()->syncWithoutDetaching($this->processArtists($data['artists']));
                    // $comic->characters()->syncWithoutDetaching($this->processCharacters($data['characters']));
                    $comic->tags()->syncWithoutDetaching($this->processTags($data['tags']));
                    $comic->relationships()->syncWithoutDetaching($this->processRelationships($data['tags']));
                    // $comic->parodies()->syncWithoutDetaching($this->processParodies($data['parodies']));
                    // $comic->groups()->syncWithoutDetaching($this->processGroups($data['groups']));

                    if ($this->scraper->has_chapters) {
                        $this->line('Updating chapters...');
                        $this->processChapters($comic, $this->scraper->getChapters($this->queue->link));
                    } else {
                        $this->line('Updating images...');
                        if (count($data['images']) > $comic->images()->count()) {
                            $images = $this->processImages($data['images'], $comic->id);
                            $comic->images()->delete();
                            $comic->images()->createMany($images);
                            $comic->touch();
                        } else {
                            $this->warn('No new updates.');
                        }
                    }
                }
            } else {
                $this->comment("\nAdding \"{$data['title']}\" ({$this->queue->link})");
                $data = $this->getData($this->queue->link);
                $counter = 1;
                while (Comic::whereSlug($data['slug'])->exists()) {
                    $data['slug'] = $data['slug'].'-'.$counter++;
                }
                $this->comic = $comic = Comic::create($data);
                $comic->image = $this->downloadImage($data['cover'], $comic->id);
                if ($comic->image) {
                    //Optimizing images to thumbs
                    optimize('storage/comics/'.$comic->image, 'storage/comics/thumbs/'.$comic->image);
                    $comic->save();
                }

                $comic->authors()->attach($this->processAuthors($data['authors']));
                $comic->artists()->attach($this->processArtists($data['artists']));
                $comic->characters()->attach($this->processCharacters($data['characters']));
                $comic->tags()->attach($this->processTags($data['tags']));
                $comic->relationships()->attach($this->processRelationships($data['tags']));
                $comic->parodies()->attach($this->processParodies($data['parodies']));
                $comic->groups()->attach($this->processGroups($data['groups']));
                if ($data['images'] !== null) {
                    $comic->images()->createMany($this->processImages($data['images'], $comic->id));
                    if (!$comic->images()->count()) {
                        $this->warn('No images were scraped');
                        throw new \Exception('No images were scraped. ('.$this->scraper->proxy.')');
                    }
                } else {
                    $this->processChapters($comic, $this->scraper->getChapters($this->queue->link));
                }

                if (!$comic->image) {
                    $comic->image = $this->downloadImage($comic->images()->oldest('id')->first()->source_url, $comic->id);
                    if ($comic->image) {
                        //Optimizing images to thumbs
                        optimize('storage/comics/'.$comic->image, 'storage/comics/thumbs/'.$comic->image);
                        $comic->save();
                    }
                }
                $this->line("\nAdding {$this->queue->link} to sources.");
                $comic->sources()->create(['link' => $this->queue->link]);
            }

            $this->info("\n".($comic->wasRecentlyCreated ? 'Added' : 'Updated')." \"{$comic->title}\". Downloaded ".$this->bytesToHuman($this->downloaded)." of data and took ".number_format(microtime(true) - $time_start, 2)." seconds.");
            DB::table('scraper')->where(['id' => $this->queue->id])->delete();
        } catch (\Exception $e) {
            $this->fail(false);
            throw $e;
        }
    }

    public function getData($link) {
        $scraped = $this->scraper->getComic($link);
        return array_merge([
            'image' => null,
            'alternative_title' => null,
            'translated' => false,
            'rewritten' => false,
            'speechless' => false,
            'characters' => [],
            'parodies' => [],
            'artists' => [],
            'authors' => [],
            'groups' => [],
            'tags' => [],
            'uploaded_at' => now(),
            'images' => null,
            'status' => null
        ], [
            'category_id' => $this->processCategory($scraped['category'] ?? null),
            'language_id' => $this->processLanguage($scraped['language'] ?? null)
        ], $scraped);
    }

    public function processChapters($comic, $all_chapters)
    {
        $chapters = [];
        $this->line('Scraping chapters...');
        $total = count($all_chapters);
        $progress = $this->output->createProgressBar($total);
        foreach ($all_chapters as $chapter) {
            $progress->advance();
            if ($comic->chapters()->where('original', $chapter['name'])->exists()) break;
            $chapters[] = $this->scraper->getChapter($chapter);
        }
        $progress->finish();
        $this->line("\nScrapped $total chapters, ".($total - count($chapters))." already exist. Adding ".count($chapters)." chapters.");
        $ordered = array_reverse($chapters);
        foreach ($ordered as $chapter) {
            if (!$chapter['name']) $chapter['name'] = Chapter::generate($chapter['meta'], $chapter['original']);
            $chapter['slug'] = Chapter::slugify($chapter['name'], ['comic_id' => $comic->id]);
            $this->line("\nAdding \"{$chapter['name']}\" ({$chapter['original']})");
            $result = $comic->chapters()->create($chapter);
            try {
                $result->images()->createMany(array_map(function ($images) use ($comic) {
                    return array_merge($images, ['comic_id' => $comic->id]);
                }, $this->processImages($chapter['images'], $comic->id.'/'.$result->slug)));
            } catch (\Exception $e) {
                $result->delete();
            }
        }
    }

    public function processCategory($category)
    {
        if (!$category) return null;
        return Category::firstOrCreate(['slug' => $category['slug']], ['name' => $category['name']])->id;
    }

    public function processLanguage($language)
    {
        if (!$language) return null;
        return Language::firstOrCreate(['slug' => $language['slug']], ['name' => $language['name']])->id;
    }

    public function processTags($tags)
    {
        return array_map(function ($tag) {
            return Tag::firstOrCreate(['slug' => $tag['slug']], ['name' => $tag['name'], 'color' => $tag['color'] ?? $this->tagColor()])->id;
        }, $tags);
    }

    public function tagColor() {
        return Arr::random(['#f53b57', '#3c40c6', '#05c46b', '#ffa801', '#00d8d6', '#f368e0', '#bf55ec', '#6c757d', '#01a3a4', '#2e86de', '#10ac84', '#8395a7']);
    }

    public function processCharacters($characters)
    {
        return array_map(function ($character) {
            return Character::firstOrCreate(['slug' => $character['slug']], ['name' => $character['name']])->id;
        }, $characters);
    }

    public function processArtists($artists)
    {
        return array_map(function ($artist) {
            return Artist::firstOrCreate(['slug' => $artist['slug']], ['name' => $artist['name'], 'platforms' => []])->id;
        }, $artists);
    }

    public function processAuthors($authors)
    {
        return array_map(function ($author) {
            return Author::firstOrCreate(['slug' => $author['slug']], ['name' => $author['name'], 'platforms' => []])->id;
        }, $authors);
    }

    public function processParodies($parodies)
    {
        return array_map(function ($parody) {
            return Parody::firstOrCreate(['slug' => $parody['slug']], ['name' => $parody['name']])->id;
        }, $parodies);
    }

    public function processGroups($groups)
    {
        return array_map(function ($group) {
            return Group::firstOrCreate(['slug' => $group['slug']], ['name' => $group['name']])->id;
        }, $groups);
    }

    public function processRelationships($tags)
    {
        $relationships = $this->getRelationships()->filter(function ($array) use ($tags) {
            return !array_diff($array['tags'], data_get($tags, '*.slug'));
        })->pluck('relationships')->flatten()->unique()->all();
        return array_map(function ($relationship) {
            return Relationship::firstOrCreate(['slug' => str::slug($relationship)], ['name' => $relationship])->id;
        }, $relationships);
    }

    public function processImages($images, $folder)
    {
        $queue = [];
        $count = count($images);
        $this->line("Downloading $count images...");
        $progress = $this->output->createProgressBar($count);
        $progress->start();
        $page = 1;
        $processed = array_filter(array_map(function ($image) use ($folder, $progress, &$queue, &$page) {
            $progress->advance();
            $downloaded = $this->downloadImage($image['source'], $page, "images/$folder", $image['context'] ?? null);
            if (!$downloaded) return null;
            if (isset($image['thumbnail'])) {
                $this->downloadImage($image['thumbnail'], $page, "thumbnails/$folder", $image['context'] ?? null);
            } else {
                $queue["storage/images/$folder/$downloaded"] = "storage/thumbnails/$folder/$downloaded";
            }
            return [
                'page' => $page++,
                'image' => $downloaded
            ];
        }, $images));
        $progress->finish();

        $count = count($queue);
        if ($count) {
            $this->line("\nOptimizing $count images...");
            $progress = $this->output->createProgressBar($count);
            $progress->start();
            foreach ($queue as $source => $dest) {
                optimize($source, $dest, 300, 200);
                $progress->advance();
            }
            $progress->finish();
        }
        return $processed;
    }

    public function downloadImage($link, $id, $folder = 'comics', $context = null)
    {
        $ext = pathinfo($link, PATHINFO_EXTENSION);
        $name = "$id.$ext";
        if ($content = @file_get_contents($this->scraper->safe_urlencode($link), false, $context)) {
            if (Storage::disk(getstoragedisk())->put("storage/$folder/$name", $content)) {
                $this->downloaded += strlen($content);
                return $name;
            }
        }
        return null;
    }

    public static function bytesToHuman($bytes)
    {
        $units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
        for ($i = 0; $bytes > 1024; $i++) {
            $bytes /= 1024;
        }
        return round($bytes, 2) . ' ' . $units[$i];
    }

    public function getRelationships() {
        if ($this->relationships) return $this->relationships;
        return $this->relationships = collect(config('relationships'))->transform(function ($item, $key) {
            $item['tags'] = array_map('str_slug', $item['tags']);
            return $item;
        });
    }

    public function fail($kill = true) {
        if ($this->comic) $this->comic->delete();
        DB::table('scraper')->where('id', $this->queue->id)->update(['status' => 'failed']);
        if ($kill) exit;
    }
}
