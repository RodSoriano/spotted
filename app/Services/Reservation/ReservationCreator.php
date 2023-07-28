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

    public function createOrFail(array $reservation): Response
    {
        $email = $reservation['email'];
        $reservationExists = $this->reservationExists($email);

        if ($reservationExists) {
            return $this->redirect($reservationExists);
        }

        $date = $this->formatDate($reservation['date']);;
        $bookingLimitReached = $this->reservationLimitCheck($date);

        if ($bookingLimitReached) {
            return $this->redirect();
        }

        return $this->create($reservation);
    }

    private function create(array $reservation): Response
    {
        $reservation['user_id'] = $this->getUserIdByEmail($reservation['email']);;
        $reservation['is_done'] = false;
        $reservation['date'] = $this->formatDate($reservation['date']);

        Reservation::create($reservation);

        return Inertia::render('Index', [
            'message' => 'Your reservation has been created.',
        ]);
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

            $result['date'] = Reservation::where('user_id', $userId)
                ->latest()
                ->pluck('date')
                ->first();
        }

        return $result;
    }

    private function reservationLimitCheck(string $date): bool|int
    {
        $collection = Reservation::where('date', $date)->get();
        $count = count($collection);

        if ($count < 5) {
            return false;
        }

        return $count;
    }

    private function redirect(?array $data = []): Response
    {
        if ($data) {
            return Inertia::render('User/DayPass', [
                'user' => $data['user'],
                'date' => $data['date'],
            ]);
        } else {
            return Inertia::render('Index', [
                'message' => 'Sorry, no spots are left, try another date.',
            ]);
        }
    }
}
