<?php

namespace App\Services\CheckIn;

use App\Models\CheckIn;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class ReservationCreator
{
    public function createReservation(array $reservation): Response
    {
        $reservation['user_id'] = $this->getUserId($reservation['email']);;
        $reservation['is_done'] = false;
        $reservation['date'] = $this->formatDate($reservation['date']);

        CheckIn::create($reservation);

        return Inertia::render('Index', [
            'message' => 'Your reservation has been created.',
        ]);
    }

    private function getUserId(string $email): int
    {
        return User::where('email', $email)->pluck('id')->first();
    }

    private function formatDate(string $date): string
    {
        $date = strtotime($date);
        $date = date('Y/m/d', $date);

        return $date;
    }
}
