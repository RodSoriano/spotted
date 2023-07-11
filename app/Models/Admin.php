<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Admin extends Model
{
    use HasFactory;

    protected $fillable = [
        'role_id',
        'email',
        'password',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function setPasswordAttribute($password): void
    {
        $this->attributes['password'] = bcrypt($password);
    }

    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }
}
