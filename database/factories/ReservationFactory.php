<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ReservationFactory extends Factory
{
    public function definition(): array
    {
        return [
            'user_id' => fake()->randomNumber(),
            'promo_code' => false,
            'is_done' => true,
            'date' => fake()->date(),
        ];
    }
}
