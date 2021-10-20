<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PasswordReset extends Model
{
    protected $connection = 'users';
    protected $fillable = [
        'email', 'token'
    ];
}
