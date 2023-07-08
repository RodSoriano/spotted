<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AdminFactory extends Factory
{
    public function definition(): array
    {
        return [
            'role_id' => fake()->numberBetween(1, 2),
            'email' => fake()->safeEmail(),
            'password' => fake()->password_hash(),
        ];
    }
}
