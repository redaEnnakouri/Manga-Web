<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Comic;

class RemoveTags extends Command
{
    protected $signature = 'remove:tag {--tagname=lolicon}';

    protected $description = 'Remove comics with tag';

    public function handle()
    {
        $tag = $this->option('tagname');

        $comics = Comic::whereHas('tags', function($q) use($tag) {
            $q->where('slug', $tag);
        });
        
        if ($comics->delete()) {
            $this->info("All comics with tag $tag has been deleted");
            return;
        }

        $this->error("There was an error deleting comics with tag $tag");

    }
}
