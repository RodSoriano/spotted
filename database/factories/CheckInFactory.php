<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CheckInFactory extends Factory
{
    public function definition(): array
    {
        return [
            'user_id' => fake()->randomNumber(),
            'promo_code' => false,
            'is_due' => false,
            'date' => fake()->date(),
        ];
    }
}
