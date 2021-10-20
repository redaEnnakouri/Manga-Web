<?php

namespace App\Console\Commands;

use Illuminate\Support\Facades\Storage;
use Illuminate\Console\Command;
use App\Models\Comic;

class Cleanup extends Command
{
    protected $signature = 'cleanup';

    protected $description = 'Cleanup image directories';

    public function handle()
    {
        $directories = Storage::disk(getstoragedisk())->directories('storage/images');        
        $this->info(count($directories)." image directories available");
        $time_start = microtime(true);
        $queue = [];
        $checks = $this->output->createProgressBar(count($directories));
        $checks->start();
        foreach ($directories as $directory) {
            $directory = str_replace('storage/images/', '', $directory);
            if (!Comic::where('id', $directory)->exists()) {
                $queue[] = $directory;
            }
            $checks->advance();
        }
        $checks->finish();
        $this->info("\n".count($queue)." image directories belonging to inexistant comics to be deleted.");
        if ($this->confirm('Do you wish to continue?')) {
            $deleted = $this->output->createProgressBar(count($queue));
            $deleted->start();
            foreach ($queue as $item) {
                Storage::disk(getstoragedisk())->delete("storage/comics/$item.jpg");
                Storage::disk(getstoragedisk())->delete("storage/comics/$item.png");
                Storage::disk(getstoragedisk())->delete("storage/comics/thumbs/$item.jpg");
                Storage::disk(getstoragedisk())->delete("storage/comics/thumbs/$item.png");
                Storage::disk(getstoragedisk())->deleteDirectory("storage/images/$item");
                Storage::disk(getstoragedisk())->deleteDirectory("storage/thumbnails/$item");
                $deleted->advance();
            }
            $deleted->finish();
            $this->info("\nRemoved ".count($queue)." directories in ".number_format(microtime(true) - $time_start, 2)." seconds");
        }
    }
}
