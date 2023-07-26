<?php

namespace Database\Seeders;

use App\Enum\UserRole;
use App\Models\Admin;
use App\Models\CheckIn;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        Admin::factory(2)
            ->create([
                'role_id' => UserRole::admin()->value,
            ]);

        User::factory(10)
            ->has(CheckIn::factory())
            ->create([
                'role_id' => UserRole::user()->value,
            ]);
    }
}
