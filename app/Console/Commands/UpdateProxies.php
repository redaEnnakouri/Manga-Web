<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class UpdateProxies extends Command
{
    protected $signature = 'proxies:update {--R|recommend} {--N|new}';

    protected $description = 'Update proxies';

    public function handle()
    {
        $this->line("\nUpdating proxies");
        $csv = file_get_contents('https://blazingseollc.com/proxy/dashboard/api/export/4/all/raween.silva1@gmail.com/aLpwG0WS/list.csv');
        $proxies = preg_split('/\r\n|\r|\n/', $csv);
        if (!$proxies) return;
        $proxies = array_map(function ($proxy) {
            $details = array_chunk(explode(':', $proxy), 2);
            return implode('@', [
                implode(':', $details[1]),
                implode(':', $details[0])
            ]);
        }, $proxies);
        file_put_contents(config_path('proxies.json'), json_encode($proxies));
        $this->info("\nProxies updated");
    }
}
