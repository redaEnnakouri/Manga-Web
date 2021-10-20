<?php

namespace App\Console\Commands;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Illuminate\Console\Command;
use Illuminate\Support\Str;
use App\Models\Publisher;
use App\Models\Character;
use App\Models\Comic;
use App\Models\Genre;
use App\Models\Artist;
use App\Models\Author;

class MergeComic extends Command
{
    protected $signature = 'comic:merge {slug} {parts*}';

    protected $description = 'Merge comics into one';

    public function handle()
    {
        $comic = Comic::whereSlug($this->argument('slug'))->first();
        $parts = Comic::whereIn('slug', $this->argument('parts'))->orderBy('slug', 'desc')->get();
        if ($this->confirm("\nMerge \"{$comic->title}\" with \"".$parts->pluck('title')->join('", "', '" and "')."\"?")) {
            $comic->end_date = $parts->first()->end_date;
            $comic->status = $parts->first()->status;
            $comic->genres = $parts->pluck('genres')->flatten()->merge($comic->genres)->unique()->values();
            $comic->tags = $parts->pluck('tags')->flatten()->merge($comic->tags)->unique()->values();
            $comic->characters = $parts->pluck('characters')->flatten()->merge($comic->characters)->unique()->values();
            $comic->authors = $parts->pluck('authors')->flatten()->merge($comic->authors)->unique()->values();
            $comic->artists = $parts->pluck('artists')->flatten()->merge($comic->artists)->unique()->values();
            $comic->save();
            foreach ($parts as $part) {
                $part_number = Str::after($part->slug, '-part-');
                foreach ($part->chapters as $chapter) {
                    $chapter->name = 'Part '.$part_number.' - '.$chapter->name;
                    $chapter->comic = $comic->id;
                    $chapter->save();
                }
                DB::table('recommendations')->where([['type', 'comic'], ['entry', $part->id]])->update(['entry' => $comic->id]);
                DB::table('recommendations')->where([['type', 'comic'], ['recommendation', $part->id]])->update(['recommendation' => $comic->id]);
                $part->delete();
            }
        }
    }
}
