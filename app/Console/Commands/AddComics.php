<?php

namespace App\Console\Commands;

use Illuminate\Support\Facades\DB;
use Illuminate\Console\Command;
use App\Scrapers\Scraper;
use App\Models\Comic;

class AddComics extends Command
{
    protected $signature = 'comics:add {--A|all} {--start=0} {--number=0} {--F|failed}';

    protected $description = 'Add comics to the database';

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
        $statuses = ['pending'];
        if ($this->option('failed')) array_push($statuses, 'failed');
        $query = DB::table('scraper')->where(['scraper' => $this->scraper->name(), 'type' => 'index'])
                    ->whereIn('status', $statuses)
                    ->orderBy('id', 'desc');

        $count = max(0, $query->count() - $this->option('start'));
        $this->info("$count comics indexed and ready to be added");

        if ($this->option('number') != 0) {
            $count = $this->option('number');
        } else {
            $count = $this->option('all') ? $count : $this->output->ask('How many comics do you want to be added?', $count, function ($value) use ($count) {
                if ($value < 0 || $value > $count) throw new \RuntimeException("Number should be between 1 and $count");
                return $value;
            });
        }

        $time_start = microtime(true);
        $progress = $this->output->createProgressBar($count);
        $progress->start();
        $total = 0;
        $failures = 0;
        while ($comic = (clone $query)->skip($this->option('start'))->orderBy('id', 'desc')->first()) {
            $progress->advance();
            $failed = false;
            try {
                $this->call('comic:add', ['link' => $comic->link]);
            } catch (\Exception $e) {
                report($e);
                $this->error("Failed to add \"".$comic->title."\"");
                $failed = true;
                $failures++;
            }
            $total++;
            if ($total >= $count) break;
            if ($total % 3 >= 2 || $failed) {
                $this->scraper->setCrawler();
                $this->line('Using a different proxy ('.parse_url('//'.$this->scraper->proxy, PHP_URL_HOST).')');
            }
        }
        $progress->finish();
        $this->info("\nScraped $total entries in ".number_format(microtime(true) - $time_start, 2)." seconds, $failures of them failed");
    }
}
