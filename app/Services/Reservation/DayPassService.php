<?php

namespace App\Services\Reservation;

use App\Models\Reservation;
use App\Models\User;
use App\Services\ServiceHelper;
use Illuminate\Support\Facades\Storage;

class DayPassService
{
    use ServiceHelper;

    public function getData(string $email): array
    {
        $user = User::where('email', $email)->first();
        $date = Reservation::where('user_id', $user->id)->latest()->pluck('date')->first();

        $timestamp = strtotime($date);
        $date = date('d F Y', $timestamp);

        $photoUrl = Storage::temporaryUrl(
            $user->photo,
            now()->addMinutes(5)
        );

        $user->photo = $photoUrl;

        return [
            'user' => $user,
            'date' => $date,
        ];
    }
}
