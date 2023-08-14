<?php

namespace App\Services\Reservation;

use App\Models\Reservation;
use App\Models\User;
use App\Services\ServiceHelper;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Storage;

class DayPassService
{
    use ServiceHelper;

    public function getData(string $email): array
    {
        $user = User::where('email', $email)->first();
        $date = Reservation::where('user_id', $user->id)->latest()->pluck('date')->first();

        $timestamp = strtotime($date);

        $locale = App::getLocale();

        if ($locale === 'es') {
            $date = date('d-m-Y', $timestamp);
        } else {
            $date = date('F d Y', $timestamp);
        }

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
