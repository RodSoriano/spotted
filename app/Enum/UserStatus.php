<?php

namespace App\Enum;

enum UserStatus: string
{
    case ACCEPTED = 'Accepted User';
    case WARNED = 'Warned User';
    case BANNED = 'Banned User';

    public static function values(): array
    {
        return array_map(function ($enum) {
            return $enum->value;
        }, self::cases());
    }
}
