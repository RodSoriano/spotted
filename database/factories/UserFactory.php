<?php

namespace Database\Factories;

use App\Enum\UserRole;
use App\Enum\UserStatus;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    public function definition(): array
    {
        return [
            'role_id' => UserRole::USER->value,
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'email' => fake()->unique()->safeEmail(),
            'date_of_birth' => fake()->date(),
            'photo' => base64_encode('photo'),
            'emergency_contact_name' => fake()->name(),
            'emergency_contact_number' => fake()->phoneNumber(),
            'status' => fake()->randomElement(UserStatus::cases()),
            'fee' => fake()->randomElement([5, 10]),
        ];
    }
}
