<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Requests\CheckReservationRequest;
use App\Http\Requests\StoreCheckInRequest;
use App\Models\CheckIn;
use App\Models\User;
use App\Services\CheckIn\ReservationCreator;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class CheckInController extends Controller
{
    public function bookingForm(): Response
    {
        return Inertia::render('User/Reservation');
    }

    public function store(StoreCheckInRequest $request, ReservationCreator $checkInService): Response
    {
        $booking = $request->validated();
        $response = $checkInService->createReservation($booking);

        return $response;
    }

    public function index(): Response
    {
        return Inertia::render('User/CheckIn');
    }

    public function bookingCheck(CheckReservationRequest $request): RedirectResponse
    {
        $data = $request->validated();

        return redirect()->action(
            [CheckInController::class, 'show'],
            ['user' => $data]
        );
    }

    public function show(Request $request): Response
    {
        try {
            $user = User::where('email', $request->user['email'])->first();
            $date = CheckIn::where('user_id', $user->id)->latest()->pluck('date')->first();

            $photoUrl = Storage::temporaryUrl(
                $user->photo,
                now()->addMinutes(10)
            );

            $user->photo = $photoUrl;

            return Inertia::render('User/DayPass', [
                'user' => $user,
                'date' => $date,
            ]);
        } catch (Exception $e) {
            $e->getMessage();
        }
    }
}
