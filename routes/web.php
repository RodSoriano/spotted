<?php

use App\Http\Controllers\Web\RegisterController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('register', [RegisterController::class, 'show']);
Route::post('register', [RegisterController::class, 'store']);
