<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
    protected $connection = 'users';
    protected $fillable = [
        'type', 'entry', 'date', 'visits'
    ];
    
    public $timestamps = false;
}
