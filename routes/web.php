<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\TestController;
use Inertia\Inertia;

Route::get('/', function () {
    return view('welcome');
});

Route::get('test', [TestController::class, 'show']);

Route::get('test-index', function () {
    return Inertia::render('Index');
});
