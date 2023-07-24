<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreCheckInRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'email' => ['required', 'email'],
            'date' => Rule::prohibitedIf($this->invalidDate()),
        ];
    }

    private function invalidDate(): bool
    {
        $inputDate = strtotime($this->date);
        $isValid = true;

        [$currentMonth, $currentDay, $currentYear] = explode('/', date('m/d/y'));;
        [$inputMonth, $inputDay, $inputYear] = explode('/', date('m/d/y', $inputDate));

        if ($inputDay < $currentDay) {
            $isValid = false;
        }

        if ($inputMonth !== $currentMonth) {
            $isValid = false;
        }

        if ($inputYear !== $currentYear) {
            $isValid = false;
        }

        return !$isValid;
    }
}
