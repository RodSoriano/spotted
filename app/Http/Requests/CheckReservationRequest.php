<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CheckReservationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function messages(): array
    {
        return [
            'email' => 'There is no reservation associated with this email',
        ];
    }

    public function rules(): array
    {
        return [
            'email' => Rule::prohibitedIf($this->userDontExists()),
        ];
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
