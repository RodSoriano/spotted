<?php

namespace App\Services\Reservation;

use App\Http\Controllers\Web\Locale\LocaleTextPageSelector;
use App\Models\Reservation;
use App\Models\User;
use App\Services\ServiceHelper;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ReservationCreator
{
    use LocaleTextPageSelector;
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
            'message' => __('messages.alerts.reservation.success'),
            'localeText' => $this->indexText(),
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

            $photoUrl = Storage::temporaryUrl(
                $result['user']->photo,
                now()->addMinutes(5)
            );

            $result['user']->photo = $photoUrl;

            $result['date'] = Reservation::where('user_id', $userId)
                ->latest()
                ->pluck('date')
                ->first();

            $timestamp = strtotime($result['date']);
            $result['date'] = date('d F Y', $timestamp);
        }

        return $result;
    }

    private function reservationLimitCheck(string $date): bool|int
    {
        $collection = Reservation::where('date', $date)->get();
        $count = count($collection);

        if ($count < env('RESERVATION_LIMIT')) {
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
                'localeText' => $this->dayPassText(),
            ]);
        } else {
            return Inertia::render('Index', [
                'message' => __('messages.alerts.reservation.error'),
                'localeText' => $this->indexText(),
            ]);
        }
    }
}
