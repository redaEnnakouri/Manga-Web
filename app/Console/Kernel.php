<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        \Laravel\Passport\Console\InstallCommand::class,
        \Laravel\Passport\Console\KeysCommand::class,
        \Laravel\Passport\Console\ClientCommand::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command(Commands\UpdateProxies::class)->daily();
        $time = \Cache::get('crawler:time', []);
        if (!$time) {
            $time['minutes'] = random_int(0, 59);
            $time['hours'] = random_int(0, 23);
            \Cache::put('crawler:time', $time, now()->endOfDay());
        }
        // $schedule->command(Commands\IndexComics::class, ['--new'])
        //     ->withoutOverlapping()
        //     ->dailyAt($time['hours'].':'.$time['minutes'])
        //     ->onSuccess(function () {
        //         \Artisan::call(Commands\AddComics::class, ['--all' => true]);
        //     });
        
        $schedule->command(Commands\AddComics::class, [ '--number' => 10 ])
            ->withoutOverlapping()
            ->everyMinute();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
