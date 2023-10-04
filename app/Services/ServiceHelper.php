<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\App;

trait ServiceHelper
{
    protected function dataTypeDate(string $date): string
    {
        $timestamp = strtotime($date);
        $date = date('Y-m-d', $timestamp);

        return $date;
    }

    protected function formatDate(string $date): string
    {
        $timestamp = strtotime($date);

        $dateFormat = '';

        $locale = App::getLocale();

        if ($locale === 'es') {
            $dateFormat = date('d-m-Y', $timestamp);
        } else {
            $dateFormat = date('F d Y', $timestamp);
        }

        return $dateFormat;
    }

    protected function getUserIdByEmail(string $email): int
    {
        return User::where('email', $email)->pluck('id')->first();
    }

    protected function isReservationToday(string $rawDate): string
    {
        $when = '';
        $today =  date('d-m-Y');
        $date = strtotime($rawDate);
        $date = date('d-m-Y', $date);


        if ($date < $today) {
            $when = 'yesterday';
        } else if ($date === $today) {
            $when = 'today';
        } else {
            $when = 'future';
        }

        return $when;
    }

    protected function firstLetterToUpperCase(string $string): string
    {
        $firstLetter = strtoupper($string[0]);
        $string[0] = $firstLetter;

        return $string;
    }
}
