<?php

namespace App\Models\Traits;

use Illuminate\Support\Str;

trait Slugable
{
    static function slugify($name, $where = [], $extra = null)
    {
        $slug = Str::slug($name);
        if ($extra) $slug .= $extra;
        if (self::where(array_merge(['slug' => $slug], $where))->exists()) return self::slugify($name, $where, ($extra ? ++$extra : 1));
        return $slug;
    }
}