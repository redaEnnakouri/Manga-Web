<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Referrer extends Model
{
    protected $fillable = [
        'type', 'from', 'to', 'count'
    ];
    
    public $timestamps = false;
}
