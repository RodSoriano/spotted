<?php

namespace App\Enum;

enum RoleName: string
{
    case ADMIN = 'Application Admin';
    case USER = 'Application User';

    public static function values(): array
    {
        return array_map(function ($enum) {
            return $enum->value;
        }, self::cases());
    }
}
