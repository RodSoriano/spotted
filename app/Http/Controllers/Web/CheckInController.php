<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCheckInRequest;
use App\Models\User;
use App\Services\CheckIn\ReservationCreator;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CheckInController extends Controller
{
    /* check-in */
    public function index(): Response
    {
        return Inertia::render('User/CheckIn');
    }

    /* reservation */
    public function booking(): Response
    {
        return Inertia::render('User/Reservation');
    }

    // needs refactoring, proper redirect response.
    public function store(StoreCheckInRequest $request, ReservationCreator $checkInService): mixed
    {
        $booking = $request->validated();
        $response = $checkInService->createReservation($booking);

        return $response;
    }
}
