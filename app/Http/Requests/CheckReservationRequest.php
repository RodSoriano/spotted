<?php

namespace App\Http\Requests;

use App\Models\CheckIn;
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
            'email' => [
                'required',
                'email',
                Rule::prohibitedIf($this->dataDontExists()),
            ],
        ];
    }

    private function dataDontExists(): bool
    {
        $user = User::where('email', $this->email)->first();
        $isValid = true;

        if ($user === null) {
            $isValid = false;
        } else {
            $reservation = CheckIn::where('user_id', $user->id)
                ->latest()
                ->pluck('is_done')
                ->first();

            if ($reservation === 1 || $reservation === null) {
                $isValid = false;
            }
        }

        return !$isValid;
    }
}
