<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Storage;

class Character extends Model
{
    use Traits\Countable, Traits\Searchable;

    protected $fillable = [
        'name', 'image', 'slug', 'description', 'gender', 'hair'
    ];

    protected $hidden = [
        'image', 'created_at', 'updated_at', 'pivot'
    ];

    protected $searchable = [
        'name',
        'description'
    ];

    protected $appends = [
        'image_url'
    ];

    public function getMetaDescriptionAttribute()
    {
        return $this->description ? Str::limit($this->description, 160) : __('meta.description.character', [
            'name' => $this->name,
            'count' => $this->comics_count
        ]);
    }

    public function getImageUrlAttribute()
    {
        return Storage::disk(getstoragedisk())->url("storage/characters/" . ($this->image ?? 'default.jpg'));
    }

    public function comics()
    {
        return $this->belongsToMany(Comic::class, 'comic_characters');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class, 'entry')->where('comments.type', 'character');
    }
}
