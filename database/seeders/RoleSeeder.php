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
                'id' => UserRole::admin()->value,
                'role_name' => RoleName::admin()->value,
            ]);

        Role::factory()
            ->create([
                'id' => UserRole::user()->value,
                'role_name' => RoleName::user()->value,
            ]);
    }
}
