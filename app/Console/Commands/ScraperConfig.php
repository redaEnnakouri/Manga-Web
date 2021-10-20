<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Scrapers\Scraper;

class ScraperConfig extends Command
{
    protected $signature = 'scraper:config';

    protected $description = 'Scraper configruations';

    public function __construct(Scraper $scraper)
    {
        $this->scraper = $scraper;
        parent::__construct();
    }

    public function handle()
    {
        $this->comment("IP details:");
        echo $this->scraper->getIP();
        $this->comment("User agent details:");
        echo $this->scraper->getUA();
    }
}
