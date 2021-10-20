<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Tag extends Model
{
    use Traits\Countable, Traits\Randomable, \Staudenmeir\EloquentEagerLimit\HasEagerLimit;

    protected $fillable = [
        'name', 'slug', 'description', 'color'
    ];

    protected $hidden = [
        'pivot', 'updated_at', 'created_at'
    ];

    protected static function booted()
    {
        if (!config('app.nsfw')) {
            static::addGlobalScope('nsfw-categories', function ($builder) {
                $builder->whereNotIn('slug', ['adult']);
            });
        }
    }

    public function getNsfwAttribute()
    {
        return in_array($this->slug, ['adult']);
    }

    public function getMetaDescriptionAttribute()
    {
        return $this->description ? Str::limit($this->description, 160) : __('meta.description.tag', [
            'name' => $this->name,
            'count' => $this->comics_count
        ]);
    }

    public function comics()
    {
        return $this->belongsToMany(Comic::class, 'comic_tags');
    }
}
