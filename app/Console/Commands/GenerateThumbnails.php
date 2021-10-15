<?php

namespace App\Console\Commands;

use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Illuminate\Console\Command;

class GenerateThumbnails extends Command
{
    protected $signature = 'thumbs';

    protected $description = 'Resize comic images';

    public function handle()
    {
        $images = Storage::disk(getstoragedisk())->files('storage/comics');
        $thumbs = Storage::disk(getstoragedisk())->files('storage/comics/thumbs');
        $this->info(count($images)." comic images available");
        $time_start = microtime(true);
        $checks = $this->output->createProgressBar(count($images));
        $checks->start();
        $queue = [];
        foreach ($images as $im) {
            $imagename = str_replace('storage/comics/', '', $im);
            if (!is_array($thumbs)) {
                $this->info("Seems thumbs is not an array");
                exit;
            }
            if (!in_array("storage/comics/thumbs/$imagename", $thumbs)) {
                $queue[] = $im;
            }
            $checks->advance();
        }

        $checks->finish();
        $this->info("\n".count($queue)." comics that needs thumbnails to be generated");

        if (count($queue) == 0) {
            $this->info("All comics has thumbnail. No action needed");
            return;
        }
        if ($this->confirm('Do you wish to continue?')) {
            $generate = $this->output->createProgressBar(count($queue));
            $generate->start();
            foreach ($queue as $path) {
                $fullpath = Storage::disk(getstoragedisk())->url($path);
                if (getstoragedisk() == 'cdn') {
                    $img = Image::make(Storage::disk(getstoragedisk())->path($fullpath));
                } else {
                    $img = Image::make(Storage::disk(getstoragedisk())->path($path));
                }            
                $img->height() < $img->width() ? $img->heighten(200) : $img->widen(150);
                $image_thumb =  $img->encode();
                Storage::disk(getstoragedisk())->put(str_replace('storage/comics', 'storage/comics/thumbs/', $path), $image_thumb);
                $generate->advance();
            }
            $generate->finish();
            $this->info("\nOptimized ".count($queue)." images in ".number_format(microtime(true) - $time_start, 2)." seconds");
        }
    }
}
