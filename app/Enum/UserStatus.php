<?php

namespace App\Enum;

enum UserStatus: string
{
    case ACCEPTED = 'Accepted User';
    case WARNED = 'Warned User';
    case BANNED = 'Banned User';
}
