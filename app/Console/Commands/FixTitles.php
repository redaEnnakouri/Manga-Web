<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Comic;

class FixTitles extends Command
{
    protected $signature = 'titles:fix {--dry}';

    protected $description = 'Fix comic title encoding';

    public function handle()
    {
        foreach (Comic::cursor() as $comic) {
            $decoded = html_entity_decode($comic->title, ENT_QUOTES);
	        $decoded = iconv('UTF-8', 'ASCII//TRANSLIT', $decoded);
            $this->line("Saving $comic->title as $decoded");
            $comic->title = $decoded;
            if (!$this->option('dry')) $comic->save();
        }
    }
}
