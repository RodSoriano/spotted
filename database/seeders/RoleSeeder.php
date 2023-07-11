<?php

namespace Database\Seeders;

use App\Enum\RoleName;
use App\Enum\UserRole;
use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        Role::factory()
            ->create([
                'id' => UserRole::ADMIN->value,
                'role_name' => RoleName::ADMIN->value,
            ]);

        Role::factory()
            ->create([
                'id' => UserRole::USER->value,
                'role_name' => RoleName::USER->value,
            ]);
    }
}
