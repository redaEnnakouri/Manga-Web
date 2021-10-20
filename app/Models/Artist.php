<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Storage;

class Artist extends Model
{
    use Traits\Countable, Traits\Searchable;

    protected $fillable = [
        'name', 'image', 'slug', 'description', 'gender', 'platforms'
    ];

    protected $casts = [
        'platforms' => 'json',
    ];

    protected $hidden = [
        'image', 'created_at', 'updated_at', 'pivot'
    ];

    protected $appends = [
        'image_url'
    ];

    protected $searchable = [
        'name',
        'description'
    ];

    public function getMetaDescriptionAttribute()
    {
        return $this->description ? Str::limit($this->description, 160) : __('meta.description.artist', [
            'name' => $this->name,
            'count' => $this->comics_count
        ]);
    }

    public function getImageUrlAttribute()
    {
        return Storage::disk(getstoragedisk())->url("storage/artists/" . ($this->image ?? 'default.jpg'));
    }

    public function comics()
    {
       return $this->belongsToMany(Comic::class, 'comic_artists');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class, 'entry')->where('comments.type', 'artist');
    }
}
