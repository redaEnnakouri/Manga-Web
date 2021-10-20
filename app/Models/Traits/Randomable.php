<?php

namespace App\Models\Traits;

trait Randomable
{
    public function scopeRandom($query, $limit)
    {
        return $query->offset(max(rand(1, $query->count()) - $limit, 0));
    }
}