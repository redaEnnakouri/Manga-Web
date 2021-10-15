<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Category extends Model
{
    use Traits\Searchable;

    protected $fillable = [
        'name', 'slug', 'description'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    protected $searchable = [
        'name',
        'description'
    ];

    public function getMetaDescriptionAttribute()
    {
        return $this->description ? Str::limit($this->description, 160) : __('meta.description.category', [
            'name' => $this->name,
            'count' => $this->comics()->count()
        ]);
    }

    public function comics()
    {
        return $this->hasMany(Comic::class);
    }
}
