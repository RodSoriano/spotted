<?php

namespace App\Services;

use App\Models\User;

trait ServiceHelper
{
    protected function formatDate(string $date): string
    {
        $date = strtotime($date);
        $date = date('Y/m/d', $date);

        return $date;
    }

    protected function getUserIdByEmail(string $email): int
    {
        return User::where('email', $email)->pluck('id')->first();
    }

    protected function isReservationToday(string $rawDate): bool
    {
        $date = strtotime($rawDate);
        $date = date('d-m-Y', $date);

        if ($date === date('d-m-Y')) {
            return true;
        } else {
            return false;
        }
    }
}
