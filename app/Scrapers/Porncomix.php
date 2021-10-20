<?php

namespace App\Scrapers;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Illuminate\Support\Arr;
use Carbon\Carbon;

class Porncomix extends Scraper
{
    private $tags_mapping = [
        "inzest" => "Incest",
        "izest" => "Incest",
        "3dizest" => "3d incest",
        "porncomix" => "Porn comics",
        "m.toon" => "Milftoon",
        "zzz" => "Zzz Comics",
        "kirtu" => "Kirtu Comics",
        "blacknwhite" => "Blacknwhite Comics",
        "musclefan" => "Musclefan Comics",
        "ydf" => "Y3DF"
    ];

    public function getArtists() {
        return collect(Cache::remember('pc-artists', 604800, function () {
            $crawler = $this->client->request('GET', 'https://www.porncomix.info/authors-artist/');
            $artists = [];
            $crawler->filter('.single-post a')->each(function ($node) use (&$artists) {
                $artists[] = $node->text(true);
            });
            return $artists;
        }));
    }

    public function getPageCount()
    {
        $crawler = $this->client->request('GET', 'https://www.porncomix.info/latest-allcomics/');
        return explode('/', parse_url($crawler->filter('.paginator > a')->last()->link()->getUri(), PHP_URL_PATH))[3];
    }

    public function getComics($page)
    {
        $crawler = $this->client->request('GET', "https://www.porncomix.info/latest-allcomics/page/$page/");
        $comics = [];
        $crawler->filter('.content > .posts > .post')->each(function ($node) use (&$comics) {
            $comics[] = [
                'link' => $node->children('a')->link()->getUri(),
                'title' => $node->children('a')->attr('title')
            ];
        });
        return $comics;
    }

    public function getComic($link)
    {
        $crawler = $this->client->request('GET', $link);
        $comic = [];
        $comic['title'] = Str::beforeLast($crawler->filter('title')->text(), ' |');
        $comic['slug'] = $this->slug($comic['title']);
        $tags = [];
        $artists = [];
        $crawler->filter('.video-tags a')->each(function ($node) use (&$tags, &$artists) {
            $tag = $this->processTag($node);
            if (Str::contains($tag['name'], 'porncomix')) return;
            if ($this->getArtists()->contains($tag['name'])) $artists[] = $tag;
            else $tags[] = $tag;
        });
        $comic['tags'] = $tags;
        $comic['artists'] = $artists;
        $category = $crawler->filter('.video-category a');
        if ($category->count()) $comic['category'] = $this->processTag($category->first());
        try {
            $comic['uploaded_at'] = Carbon::createFromFormat('\A\d\d\e\d M d\, Y \a\t h:i A', $crawler->filter('.post-date')->text(true))->toDateTimeString();
        } catch (\Exception $e) {
            $comic['uploaded_at'] = Carbon::now()->toDateTimeString();
        }
        $images = [];
        $crawler->filter('.gallery .gallery-item')->each(function ($node) use (&$images) {
            $src = $node->filter('img')->attr('data-lazy-src');
            if (Str::contains($src, 'porncomix.info_')) return;
            $image['source'] = $this->wpImage($src);
            $images[] = $image;
        });
        $comic['images'] = $images;
        $comic['cover'] = Arr::first($images)['source'] ?? null;
        return $comic;
    }

    public function processTag($node, $array = []) {
        $this->removeChildren($node);
        $value = $node->text(true);
        $array['name'] = $this->tags_mapping[strtolower($value)] ?? Str::title($value);
        $array['slug'] = $this->slug($array['name']);
        return $array;
    }
}
