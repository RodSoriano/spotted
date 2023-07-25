<?php

namespace App\Services\User;

use App\Enum\UserRole;
use App\Enum\UserStatus;
use App\Models\User;
use App\Services\ServiceHelper;
use Inertia\Inertia;
use Inertia\Response;

class UserCreator
{
    use ServiceHelper;

    public function register(array $user): Response
    {
        $user['fee'] = 10.00;
        $user['status'] = UserStatus::ACCEPTED->value;
        $user['role_id'] = UserRole::USER->value;
        $user['date_of_birth'] = $this->formatDate($user['date_of_birth']);

        User::create($user);

        return Inertia::render('Index', [
            'message' => 'Your user has been created!',
        ]);
    }
}
