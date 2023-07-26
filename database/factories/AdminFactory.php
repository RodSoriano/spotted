<?php

namespace Database\Factories;

use App\Enum\UserRole;
use Illuminate\Database\Eloquent\Factories\Factory;

class AdminFactory extends Factory
{
    public function definition(): array
    {
        return [
            'role_id' => UserRole::admin()->value,
            'email' => fake()->safeEmail(),
            'password' => bcrypt('password'),
        ];
    }
}
