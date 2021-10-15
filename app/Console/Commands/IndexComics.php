<?php

namespace App\Console\Commands;

use Symfony\Component\Console\Helper\ProgressBar;
use Illuminate\Support\Facades\DB;
use Illuminate\Console\Command;
use Illuminate\Support\Str;
use App\Scrapers\Scraper;
use App\Models\Comic;

class IndexComics extends Command
{
    protected $signature = 'comics:index {--N|new} {--start=0} {--F|fresh}';

    protected $description = 'Index comics to be crawled';

    public function handle()
    {
        foreach (config('site.scrapers') as $scraper) {
            $this->info("Using the $scraper scraper");
            Scraper::switch($scraper);
            $this->fire();
        }
    }

    public function fire()
    {
        $this->scraper = resolve(Scraper::class);
        $count = $this->scraper->getPageCount();
        if (!$count) return;
        $this->info("$count pages available");
        $time_start = microtime(true);

        ProgressBar::setFormatDefinition('indexing', "[%bar%] %percent%% <info>%current%/%max% pages</info>\n\n%duplicates% duplicates | %queued% queued out of %total% comics processed\n%elapsed:6s% elaspsed - %estimated:-6s% estimated");
        $progress = new ProgressBar($this->output, $count - $this->option('start'));
        $progress->setFormat('indexing');
        $total = 0;
        $queued = 0;
        $type = 'index';
        $duplicates = 0;
        $progress->start();
        for ($i = $this->option('start') + 1; $i <= $count; $i++) {
            $progress->setMessage((int) $duplicates, 'duplicates');
            $progress->setMessage($queued, 'queued');
            $progress->setMessage($total, 'total');
            $comics = $this->scraper->getComics($i);
            foreach ($comics as $comic) {
                if ($this->scraper->has_chapters) {
                    if (!$this->scraper->hasNewChapters($comic, $this->options())) continue;
                } elseif ($this->scraper->isDuplicate($comic, $this->options(), $duplicates)) {
                    if ($duplicates >= 50) {
                        $this->comment("Seems like we're done here, stopping the indexing process.");
                        break 2;
                    }
                    continue;
                }
                DB::table('scraper')->insert(['scraper' => $this->scraper->name(), 'type' => $type, 'title' => $comic['title'], 'link' => $comic['link']]);
                $queued++;
            }
            $total += count($comics);
            $progress->advance();
        }
        $progress->finish();
        $this->info("\n$total entries scraped, $queued were queued. Took ".number_format(microtime(true) - $time_start, 2)." seconds");
    }
}
