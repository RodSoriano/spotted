<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Requests\CheckReservationRequest;
use App\Http\Requests\StoreCheckInRequest;
use App\Models\User;
use App\Services\CheckIn\ReservationCreator;
use \Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CheckInController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('User/CheckIn');
    }

    public function bookingForm(): Response
    {
        return Inertia::render('User/Reservation');
    }

    public function show(Request $request): Response
    {
        $user = User::where('email', $request->user['email'])->first();

        return Inertia::render('User/DayPass', [
            'user' => $user,
        ]);
    }

    // needs refactoring, proper redirect response.
    public function store(StoreCheckInRequest $request, ReservationCreator $checkInService): mixed
    {
        $booking = $request->validated();
        $response = $checkInService->createReservation($booking);

        return $response;
    }

    public function bookingCheck(CheckReservationRequest $request): RedirectResponse
    {
        $data = $request->validated();

        return redirect()->action(
            [CheckInController::class, 'show'],
            ['user' => $data]
        );
    }
}
