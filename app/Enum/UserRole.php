<?php

namespace App\Enum;

use Spatie\Enum\Enum;

/**
 * @method static self admin()
 * @method static self user()
 */
class UserRole extends Enum
{
    protected static function values(): array
    {
        return [
            'admin' => 1,
            'user' => 2,
        ];
    }
}
