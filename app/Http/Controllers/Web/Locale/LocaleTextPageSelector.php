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
            'termsAndCo' => $this->TermsAndConditionsText(),
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
            'title' => __('messages.titles.language'),
            'button' => __('messages.buttons.language'),
        ];
    }

    private function TermsAndConditionsText(): array
    {
        return [
            'popUp' => [
                'show' => __('messages.termsAndConditions.buttons.show'),
                'accept' => __('messages.buttons.accept'),
                'decline' => __('messages.termsAndConditions.buttons.decline'),
            ],

            'cards' => [
                'headers' => [
                    __('messages.termsAndConditions.texts.welcome'),
                    __('messages.termsAndConditions.terms.rule_1'),
                    __('messages.termsAndConditions.terms.rule_2'),
                    __('messages.termsAndConditions.terms.rule_3'),
                    __('messages.termsAndConditions.terms.rule_4'),
                    __('messages.termsAndConditions.terms.rule_5'),
                    __('messages.termsAndConditions.terms.rule_6'),
                    __('messages.termsAndConditions.terms.rule_7'),
                    __('messages.termsAndConditions.terms.rule_8'),
                    __('messages.termsAndConditions.terms.rule_9'),
                    __('messages.termsAndConditions.terms.rule_10'),
                    ' ',
                    ' ',
                    ' ',
                    ' ',
                ],

                'texts' => [
                    __('messages.termsAndConditions.texts.statement'),
                    __('messages.termsAndConditions.conditions.rule_1'),
                    __('messages.termsAndConditions.conditions.rule_2'),
                    __('messages.termsAndConditions.conditions.rule_3'),
                    __('messages.termsAndConditions.conditions.rule_4'),
                    __('messages.termsAndConditions.conditions.rule_5'),
                    __('messages.termsAndConditions.conditions.rule_6'),
                    __('messages.termsAndConditions.conditions.rule_7'),
                    __('messages.termsAndConditions.conditions.rule_8'),
                    __('messages.termsAndConditions.conditions.rule_9'),
                    __('messages.termsAndConditions.conditions.rule_10'),
                    __('messages.termsAndConditions.texts.f1'),
                    __('messages.termsAndConditions.texts.f2'),
                    __('messages.termsAndConditions.texts.f3'),
                    __('messages.termsAndConditions.texts.f4'),
                ],
            ],
        ];
    }
}
