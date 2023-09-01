<?php

namespace App\Console;

use App\Mail\ReservationsProcessed;
use App\Models\Reservation;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Mail;

class Kernel extends ConsoleKernel
{
    protected function schedule(Schedule $schedule): void
    {
        $schedule->call(function () {
            $reservations = Reservation::query();
            $users = Reservation::latest()->first()->users()->get();

            $reservations->where('is_done', 0)
                ->where('date', date('Y-m-d'))
                ->update(['is_done' => 1]);

            if ($users->all()) {
                Mail::to(env('DEVELOPMENT_EMAIL'))->locale('es')->send(
                    new ReservationsProcessed($users)
                );
            }
        });
    }

    protected function commands(): void
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
