<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Relationship extends Model
{
    use Traits\Countable, \Staudenmeir\EloquentEagerLimit\HasEagerLimit;

    protected $fillable = [
        'name', 'slug', 'description'
    ];

    protected $hidden = [
        'created_at', 'updated_at', 'pivot'
    ];

    public function getMetaDescriptionAttribute()
    {
        return $this->description ? Str::limit($this->description, 160) : __('meta.description.relationship', [
            'name' => $this->name,
            'count' => $this->comics_count
        ]);
    }

    public function comics()
    {
        return $this->belongsToMany(Comic::class, 'comic_relationships');
    }
}
