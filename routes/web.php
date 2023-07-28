<?php

use App\Http\Controllers\Web\ReservationController;
use App\Http\Controllers\Web\RegisterController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('register', [RegisterController::class, 'index']);
Route::post('register', [RegisterController::class, 'store']);

Route::get('reservation', [ReservationController::class, 'bookingForm']);
Route::post('reservation', [ReservationController::class, 'store']);

Route::get('check-in', [ReservationController::class, 'index']);
Route::post('check-in', [ReservationController::class, 'bookingCheck']);
Route::get('day-pass', [ReservationController::class, 'show']);
