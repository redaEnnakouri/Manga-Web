<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Console\Scheduling\Schedule;

class ScheduleList extends Command
{
    protected $signature = 'schedule:list';
    protected $description = 'List when scheduled commands are executed.';

    protected $schedule;

    public function __construct(Schedule $schedule)
    {
        parent::__construct();

        $this->schedule = $schedule;
    }

    public function handle()
    {
        $events = array_map(function ($event) {
            return [
                'cron' => $event->expression,
                'command' => $event->description.$event->command,
                'next' => $event->nextRunDate(),
            ];
        }, $this->schedule->events());

        $this->table(
            ['Cron', 'Command', 'Next'],
            $events
        );
    }
}
