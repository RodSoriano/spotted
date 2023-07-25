<?php

namespace App\Services\CheckIn;

use App\Models\CheckIn;
use App\Models\User;
use Exception;

class ReservationCreator
{
    // needs refactoring, proper redirect to checkin.show
    public function createReservation(array $reservation): mixed
    {
        $reservation['user_id'] = $this->userExist($reservation['email']);;
        $reservation['is_done'] = false;
        $reservation['date'] = $this->formatDate($reservation['date']);

        CheckIn::create($reservation);

        return redirect('/')->with('succes', 'your date has been booked.');
    }

    private function userExist(string $email): int|Exception
    {
        $user = User::where('email', $email)->pluck('id')->first();

        if ($user === null) {
            throw new Exception('This email address is not registered.');
        }

        return $user;
    }

    private function formatDate(string $date): string
    {
        $date = strtotime($date);
        $date = date('Y/m/d', $date);

        return $date;
    }
}
