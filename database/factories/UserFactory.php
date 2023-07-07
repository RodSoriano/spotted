<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    public function definition()
    {
        return [
            'role_id' => fake()->numberBetween(1, 2),
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'email' => fake()->email(),
            'date_of_birth' => fake()->date(),
            'photo' => fake()->random_bytes(5),
            'emergency_contact' => fake()->name(),
            'emergency_contact_number' => fake()->phoneNumber(),
            'status' => fake()->randomElement(['green', 'yellow', 'red']),
            'fee' => fake()->randomElement([2, 5, 10]),
        ];
    }
}
