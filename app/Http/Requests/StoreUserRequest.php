<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string'],
            'last_name' => ['required', 'string'],
            'email' => ['required', 'email'],
            'date_of_birth' => Rule::prohibitedIf($this->invalidDate()),
            'emergency_contact_name' => ['required', 'string'],
            'emergency_contact_number' => ['required', 'string', 'min:8'],
            'photo' => ['required', 'image', 'mimes::jpeg,jpg,png', 'max:5000'],
        ];
    }

    private function invalidDate(): bool
    {
        $inputDate = strtotime($this->date_of_birth);
        $currentYear = date('y');
        $isValid = true;

        [$inputMonth, $inputYear] = explode('/', date('m/y', $inputDate), 2);

        if ($inputMonth > 12) {
            $isValid = false;
        }

        if ($inputYear > ((int) $currentYear - 5)) {
            $isValid = false;
        }

        return !$isValid;
    }
}
