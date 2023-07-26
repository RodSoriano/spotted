<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreCheckInRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function messages(): array
    {
        return [
            'email' => 'This email is not associated with a registered account.',
            'date' => 'The date must be within this month and in the future',
        ];
    }

    public function rules(): array
    {
        return [
            'email' => ['required', 'email', Rule::prohibitedIf($this->userDontExists())],
            'date' => ['required', Rule::prohibitedIf($this->invalidDate())],
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

    private function userDontExists(): bool
    {
        $user = User::where('email', $this->email)->first();
        $isValid = true;

        if ($user === null) {
            $isValid = false;
        }

        return !$isValid;
    }
}
