<?php

namespace App\Services\User;

use App\Enum\UserRole;
use App\Enum\UserStatus;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Redirector;

class UserCreator
{
    // needs refactoring, photo attribute
    public function register(array $user): Redirector|RedirectResponse
    {
        $user['role_id'] = UserRole::USER->value;
        $user['status'] = UserStatus::ACCEPTED->value;
        $user['fee'] = 10.00;

        $user['date_of_birth'] = $this->formatDate($user['date_of_birth']);

        User::create($user);

        // needs to redirect and user needs to see created! on index screen.
        return redirect('/')->with('Mensaje', 'Tu usuario fue creado');
    }

    private function formatDate(string $date): string
    {
        $date = strtotime($date);
        $date = date('Y/m/d', $date);

        return $date;
    }
}
