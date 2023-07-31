<?php

namespace App\Services\User;

use App\Enum\UserRole;
use App\Enum\UserStatus;
use App\Models\User;
use App\Services\ServiceHelper;
use Error;
use Illuminate\Support\Facades\Storage;

class UserCreator
{
    use ServiceHelper;

    public function register(array $user): array
    {
        try {
            $user['role_id'] = UserRole::user()->value;
            $user['status'] = UserStatus::accepted()->value;
            $user['date_of_birth'] = $this->formatDate($user['date_of_birth']);
            $user['photo'] = Storage::put($user['photo']->path(), $user['photo']);

            $createdUser = User::create($user);

            return [
                'status' => true,
                'message' => __('messages.redirect.register.success'),
                'data' => $createdUser,
            ];
        } catch (Error $e) {
            return [
                'status' => false,
                'message' => __('messages.redirect.register.error'),
                'data' => $e->getMessage(),
            ];
        }
    }
}
