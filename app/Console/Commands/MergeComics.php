<?php

namespace App\Console\Commands;

use Illuminate\Support\Facades\DB;
use Illuminate\Console\Command;
use Illuminate\Support\Str;
use App\Models\Comic;

class MergeComics extends Command
{
    protected $signature = 'comics:merge';

    protected $description = 'Merge comic parts';

    public function handle()
    {
        $comics = Comic::whereSlug('like', '%-part-2')->get();
        $this->info(count($comics)." comics possibly needs to be merged");
        $time_start = microtime(true);
        $progress = $this->output->createProgressBar(count($comics));
        $progress->start();
        $total = 0;
        foreach ($comics as $comic) {
            $progress->advance();
            $parent = Comic::whereSlug(Str::before($comic->slug, '-part-2'))->first();
            if (!$parent) continue;
            $parts = Comic::where('id', '<>', $parent->id)->whereSlug('like', Str::before($comic->slug, '-2').'%')->get();
            $this->call('comic:merge', ['slug' => $parent->slug, 'parts' => $parts->pluck('slug')]);
            $total++;
        }
        $progress->finish();
        $this->info("\nMerged $total comics in ".number_format(microtime(true) - $time_start, 2)." seconds");
    }
}
