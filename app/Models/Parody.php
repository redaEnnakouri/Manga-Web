<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Parody extends Model
{
    use Traits\Countable, Traits\Searchable, \Staudenmeir\EloquentEagerLimit\HasEagerLimit;

    protected $fillable = [
        'name', 'slug', 'description'
    ];

    protected $hidden = [
        'created_at', 'updated_at', 'pivot'
    ];

    protected $searchable = [
        'name',
        'description'
    ];

    public function getMetaDescriptionAttribute()
    {
        return $this->description ? Str::limit($this->description, 160) : __('meta.description.parody', [
            'name' => $this->name,
            'count' => $this->comics_count
        ]);
    }

    public function comics()
    {
        return $this->belongsToMany(Comic::class, 'comic_parodies');
    }
}
