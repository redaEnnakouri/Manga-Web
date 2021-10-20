<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;
use App\Scrapers;
use App\Console\Commands\Cdn\Finder;
use App\Console\Commands\Cdn\Config;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->singleton(Scrapers\Scraper::class, function ($app) {
            $scrapers = config('site.scrapers');
            $class = 'App\Scrapers\\'.Str::studly(array_shift($scrapers));
            return new $class();
        });

        $this->app->singleton(Finder::class, function ($app) {
            return new Finder(new Config($app->make('config'), $app->make('path.public')));
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
