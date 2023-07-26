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

    // Needs refactoring, photo upload.
    public function register(array $user): Response
    {
        $user['role_id'] = UserRole::user()->value;
        $user['status'] = UserStatus::ACCEPTED->value;
        $user['date_of_birth'] = $this->formatDate($user['date_of_birth']);
        // $user['photo'] = file_get_contents($_FILES['photo']['tmp_name']);

        User::create($user);

        return Inertia::render('Index', [
            'message' => 'Your user has been created!',
        ]);
    }
}
