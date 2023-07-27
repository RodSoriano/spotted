<?php

namespace App\Services\User;

use App\Enum\UserRole;
use App\Enum\UserStatus;
use App\Models\User;
use App\Services\ServiceHelper;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class UserCreator
{
    use ServiceHelper;

    public function register(array $user): Response
    {
        $user['role_id'] = UserRole::user()->value;
        $user['status'] = UserStatus::accepted()->value;
        $user['date_of_birth'] = $this->formatDate($user['date_of_birth']);

        $photoData = Storage::put($user['photo']->path(), $user['photo']);
        $user['photo'] = $photoData;

        User::create($user);

        return Inertia::render('Index', [
            'message' => 'Your user has been created!',
        ]);
    }
}
