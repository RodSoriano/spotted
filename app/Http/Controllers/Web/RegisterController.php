<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Services\User\UserCreator;
use Inertia\Inertia;
use Inertia\Response;

class RegisterController extends Controller
{
    public function toForm(): Response
    {
        return Inertia::render('User/Register');
    }

    public function store(StoreUserRequest $request, UserCreator $userService): Response
    {
        $data = $request->validated();

        $response = $userService->register($data);

        return Inertia::render('Index', [
            'message' => $response['message'],
        ]);
    }
}
