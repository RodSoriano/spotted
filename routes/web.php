<?php

use App\Http\Controllers\Web\CheckInController;
use App\Http\Controllers\Web\RegisterController;
use App\Http\Controllers\Web\ReservationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('register', [RegisterController::class, 'show']);
Route::post('register', [RegisterController::class, 'store']);

Route::get('reservations', [ReservationController::class, 'index']);

Route::get('check-in', [CheckInController::class, 'show']);
