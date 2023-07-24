<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Services\User\UserCreator;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Redirector;
use Inertia\Inertia;
use Inertia\Response;

class RegisterController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('User/Register');
    }

    // needs refactoring, photo attribute
    public function store(StoreUserRequest $request, UserCreator $userService): Redirector|RedirectResponse
    {
        $data = $request->validated();
        $response = $userService->register($data);

        return $response;
    }
}
