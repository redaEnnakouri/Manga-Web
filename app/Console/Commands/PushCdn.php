<?php

namespace App\Console\Commands;

use Illuminate\Http\File;
use Illuminate\Console\Command;
use Illuminate\Config\Repository;
use App\Console\Commands\Cdn\Finder;
use Illuminate\Filesystem\FilesystemManager;

class PushCdn extends Command
{
    protected $signature = 'cdn:sync';

    protected $description = 'Add Assets to Cdn in s3';

    public function handle(Finder $finder, FilesystemManager $filesystemManager, Repository $config)
    {
        $files = $finder->getFiles();

        foreach ($files as $file) {
            $bool = $filesystemManager
                ->disk($config->get('asset-cdn.filesystem.disk'))
                ->putFileAs(
                    $file->getRelativePath(),
                    new File($file->getPathname()),
                    $file->getFilename(),
                    $config->get('asset-cdn.filesystem.options')
                );

            if (! $bool) {
                $this->error("Problem uploading: {$file->getRelativePathname()}");
            } else {
                $this->info("Successfully uploaded: {$file->getRelativePathname()}");
            }
        }
    }
}
