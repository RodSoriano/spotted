<?php

namespace App\Services\Reservation;

use App\Models\Reservation;
use App\Models\User;
use App\Services\ServiceHelper;
use Inertia\Inertia;
use Inertia\Response;

class ReservationCreator
{
    use ServiceHelper;

    // needs refactoring, also check if the reservation limit has been reached for an specified date.
    public function createReservation(array $reservation): Response
    {
        $email = $reservation['email'];
        $reservationExists = $this->reservationExists($email);

        if ($reservationExists) {
            return Inertia::render('User/DayPass', [
                'user' => $reservationExists['user'],
                'date' => $reservationExists['date'],
            ]);
        } else {
            $reservation['user_id'] = $this->getUserIdByEmail($email);;
            $reservation['is_done'] = false;
            $reservation['date'] = $this->formatDate($reservation['date']);

            Reservation::create($reservation);

            return Inertia::render('Index', [
                'message' => 'Your reservation has been created.',
            ]);
        }
    }

    private function reservationExists(string $email): array
    {
        $result = [];
        $userId = $this->getUserIdByEmail($email);

        $reservation = Reservation::where('user_id', $userId)
            ->latest()
            ->pluck('is_done')
            ->first();

        if ($reservation === 0) {
            $result['user'] = User::where('id', $userId)->first();
            $result['date'] = Reservation::where('user_id', $userId)->latest()->pluck('date')->first();
        }

        return $result;
    }
}
