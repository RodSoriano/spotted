<?php

namespace App\Services\Reservation;

use App\Models\Reservation;
use App\Services\ServiceHelper;

class ReservationDestroyer
{
    use ServiceHelper;

    public function delete(string $email): bool
    {
        $user = $this->getUserIdByEmail($email);

        $reservation = Reservation::where('user_id', $user)
            ->latest()
            ->first();

        return $reservation->delete();
    }
}
