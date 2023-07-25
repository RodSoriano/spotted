<?php

use App\Http\Controllers\Web\CheckInController;
use App\Http\Controllers\Web\RegisterController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('register', [RegisterController::class, 'index']);
Route::post('register', [RegisterController::class, 'store']);

Route::get('reservation', [CheckInController::class, 'bookingForm']);
Route::post('reservation', [CheckInController::class, 'store']);

Route::get('check-in', [CheckInController::class, 'index']);
Route::post('check-in', [CheckInController::class, 'bookingCheck']);
