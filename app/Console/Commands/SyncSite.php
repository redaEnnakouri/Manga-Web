<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class SyncSite extends Command
{
    protected $signature = 'site:sync';

    protected $description = 'Add site specific assets';

    public function handle()
    {
        $folder = 'sites/'.config('site.id');
        File::copyDirectory(base_path('sites/default/storage'), public_path('storage'));        
        File::copyDirectory(base_path('sites/default/public'), public_path());
        File::copyDirectory(base_path($folder.'/public'), public_path());
        if (File::exists(base_path($folder.'/style.scss'))) {
            File::copy(base_path($folder.'/style.scss'), resource_path('sass/_site.scss'));
        } else {
            File::copy(base_path('sites/default/style.scss'), resource_path('sass/_site.scss'));
        }
    }
}
