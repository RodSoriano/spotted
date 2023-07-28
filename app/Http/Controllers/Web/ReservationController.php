<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Requests\CheckReservationRequest;
use App\Http\Requests\StoreReservationRequest;
use App\Services\Reservation\DayPassService;
use App\Services\Reservation\ReservationCreator;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ReservationController extends Controller
{
    public function toForm(): Response
    {
        return Inertia::render('User/Reservation');
    }

    public function store(StoreReservationRequest $request, ReservationCreator $reservationService): Response
    {
        $booking = $request->validated();
        $response = $reservationService->createOrFail($booking);

        return $response;
    }

    public function toCheckIn(): Response
    {
        return Inertia::render('User/CheckIn');
    }

    public function checkReservation(CheckReservationRequest $request): RedirectResponse
    {
        $data = $request->validated();

        return redirect()->action(
            [ReservationController::class, 'toDayPass'],
            ['user' => $data]
        );
    }

    public function toDayPass(Request $request, DayPassService $dayPass): Response
    {
        $email = $request->email;

        $response = $dayPass->getData($email);

        return Inertia::render('User/DayPass', [
            'user' => $response['user'],
            'date' => $response['date'],
        ]);
    }
}
