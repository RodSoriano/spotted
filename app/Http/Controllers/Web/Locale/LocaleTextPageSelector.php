<?php

namespace App\Http\Controllers\Web\Locale;

trait LocaleTextPageSelector
{
    protected function indexText(): array
    {
        return [
            'register' => __('messages.buttons.register'),
            'book' => __('messages.buttons.book'),
            'checkIn' => __('messages.buttons.check'),
            'footer' => __('messages.footers.index.language'),
            'click' => __('messages.footers.index.toLanguage'),
        ];
    }

    protected function registerText(): array
    {
        return [
            'welcome' => __('messages.titles.welcome'),
            'statement' => __('messages.statements.register'),
            'name' => __('messages.labels.register.firstName'),
            'lastName' => __('messages.labels.register.lastName'),
            'email' => __('messages.labels.register.email'),
            'birthDate' => __('messages.labels.register.birthDate'),
            'contactName' => __('messages.labels.register.contactName'),
            'contactNumber' => __('messages.labels.register.contactNumber'),
            'picture' => __('messages.labels.register.picture'),
            'submit' => __('messages.buttons.join'),
            'footer' => __('messages.footers.register.reservation'),
            'click' => __('messages.footers.register.toReservation'),
        ];
    }

    protected function reservationText(): array
    {
        return [
            'title' => __('messages.titles.reservation'),
            'email' => __('messages.labels.reservation.email'),
            'date' => __('messages.labels.reservation.date'),
            'submit' => __('messages.buttons.reservation'),
            'footer' => __('messages.footers.reservation.register'),
            'click' => __('messages.footers.reservation.toRegister'),
        ];
    }

    protected function checkInText(): array
    {
        return [
            'title' => __('messages.titles.checkIn'),
            'statement' => __('messages.statements.checkIn'),
            'submit' => __('messages.buttons.check'),
            'footer' => __('messages.footers.checkIn.reservation'),
            'click' => __('messages.footers.checkIn.toReservation'),
        ];
    }

    protected function dayPassText(): array
    {
        return [
            'title' => __('messages.titles.daypass'),
        ];
    }

    protected function languageText(): array
    {
        return [
            'button' => __('messages.buttons.language'),
        ];
    }

    protected function TermsAndConditionsText(): array
    {
        return [];
    }
}
