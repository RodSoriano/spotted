<?php

use App\Http\Controllers\Web\IndexController;
use App\Http\Controllers\Web\Locale\LocaleController;
use App\Http\Controllers\Web\ReservationController;
use App\Http\Controllers\Web\RegisterController;
use Illuminate\Support\Facades\Route;

Route::middleware(['locale'])->group(function () {
    Route::get('/', [IndexController::class, 'index']);

    Route::get('register', [RegisterController::class, 'toForm']);
    Route::post('register', [RegisterController::class, 'store']);

    Route::get('reservation', [ReservationController::class, 'toForm']);
    Route::post('reservation', [ReservationController::class, 'store']);

    Route::get('check-in', [ReservationController::class, 'toCheckIn']);
    Route::post('check-in', [ReservationController::class, 'checkReservation']);

    Route::get('day-pass', [ReservationController::class, 'toDayPass']);

    Route::get('language', [LocaleController::class, 'show']);
    Route::post('language', [LocaleController::class, 'change']);
});
