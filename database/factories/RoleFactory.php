<?php

namespace Database\Factories;

use App\Enum\RoleName;
use Illuminate\Database\Eloquent\Factories\Factory;

class RoleFactory extends Factory
{
    public function definition(): array
    {
        return [
            'role_name' => fake()->randomElement(RoleName::values()),
        ];
    }
}
