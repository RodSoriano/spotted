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

    public function messages(): array
    {
        return [
            'first_name' => __('messages.validation.storeUserRequest.first_name'),
            'last_name' => __('messages.validation.storeUserRequest.last_name'),
            'email' => __('messages.validation.storeUserRequest.email'),
            'date_of_birth' => __('messages.validation.storeUserRequest.date_of_birth'),
            'emergency_contact_name' => __('messages.validation.storeUserRequest.emergency_contact_name'),
            'emergency_contact_number' => __('messages.validation.storeUserRequest.emergency_contact_number'),
            'photo' => __('messages.validation.storeUserRequest.emergency_contact_number'),
        ];
    }

    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string'],
            'last_name' => ['required', 'string'],
            'email' => ['required', 'email', Rule::unique('users', 'email')],
            'date_of_birth' => Rule::prohibitedIf($this->invalidDate()),
            'emergency_contact_name' => ['required', 'string'],
            'emergency_contact_number' => ['required', 'string', 'min:8'],
            'photo' => ['required', 'image', 'mimes::jpeg,jpg,png', 'max:5000'],
        ];
    }

    private function invalidDate(): bool
    {
        $inputDate = strtotime($this->date_of_birth);
        $currentYear = date('Y');
        $isValid = true;

        [$inputMonth, $inputYear] = explode('/', date('m/Y', $inputDate), 2);

        if ($inputMonth > 12) {
            $isValid = false;
        }

        if ($inputYear > ((int) $currentYear - 5)) {
            $isValid = false;
        }

        return !$isValid;
    }
}
