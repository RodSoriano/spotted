<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Web\Locale\LocaleTextPageSelector;
use App\Http\Requests\CheckReservationRequest;
use App\Http\Requests\StoreReservationRequest;
use App\Services\Reservation\DayPassService;
use App\Services\Reservation\ReservationCreator;
use App\Services\Reservation\ReservationDestroyer;
use App\Services\ServiceHelper;
use Inertia\Inertia;
use Inertia\Response;

class ReservationController extends Controller
{
    use LocaleTextPageSelector, ServiceHelper;

    public function toForm(): Response
    {
        return Inertia::render('User/Reservation', [
            'localeText' => $this->reservationText(),
        ]);
    }

    public function store(StoreReservationRequest $request, ReservationCreator $reservationService): Response
    {
        $booking = $request->validated();
        $response = $reservationService->createOrFail($booking);

        return $response;
    }

    public function toCheckIn(): Response
    {
        return Inertia::render('User/CheckIn', [
            'localeText' => $this->checkInText(),
        ]);
    }

    public function toDayPass(CheckReservationRequest $request, DayPassService $dayPass): Response
    {
        $user = $request->validated();

        $email = $user['email'];

        $response = $dayPass->getData($email);

        $reservationTime = $this->isReservationToday($response['date']);

        switch ($reservationTime) {
            case 'yesterday':
                return Inertia::render('Index', [
                    'localeText' => $this->indexText(),
                ]);
                break;
            case 'today':
                return Inertia::render('User/DayPass', [
                    'user' => $response['user'],
                    'date' => $response['date'],
                    'localeText' => $this->dayPassText(),
                ]);
                break;
            case 'future':
                return Inertia::render('User/NoDayPass', [
                    'email' => $response['user']['email'],
                    'localeText' => $this->noDayPassText(),
                    'date' => $response['date'],
                ]);
                break;
        }
    }

    public function destroy(ReservationDestroyer $reservation): Response
    {
        $email = request()->email;

        $reservation->delete($email);

        return Inertia::render('Index', [
            'message' => __('messages.alerts.reservation.delete'),
            'localeText' => $this->indexText(),
        ]);
    }
}
