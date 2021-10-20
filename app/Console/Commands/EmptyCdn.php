<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class EmptyCdn extends Command
{
    protected $signature = 'cdn:delete';

    protected $description = 'Delete assets in s3';

    public function handle()
    {
        $deletecss = Storage::disk(getstoragedisk())->deleteDirectory("css");
        $deletejs = Storage::disk(getstoragedisk())->deleteDirectory("js");
        $deleteimages = Storage::disk(getstoragedisk())->deleteDirectory("images");
        $deletefonts = Storage::disk(getstoragedisk())->deleteDirectory("fonts");
        if ($deletecss) { $this->info("Css directory has been deleted"); }
        if ($deletejs) { $this->info("Js directory has been deleted"); }
        if ($deleteimages) { $this->info("Image directory has been deleted"); }
        if ($deletefonts) { $this->info("Fonts directory has been deleted"); }
    }
}
