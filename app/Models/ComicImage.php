<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Storage;

class ComicImage extends Model
{
    protected $fillable = [
        'page', 'comic_id', 'chapter_id', 'image'
    ];

    protected $hidden = [
        'comic_id', 'chapter_id', 'image'
    ];

    public $timestamps = null;

    protected $appends = ['source_url', 'thumbnail_url'];

    protected $with = ['chapter'];

    public function getSourceUrlAttribute()
    {
        return Storage::disk(getstoragedisk())->url("storage/images/{$this->comic_id}".($this->chapter ? '/'.$this->chapter->slug : '')."/{$this->image}");
    }

    public function getThumbnailUrlAttribute()
    {
        return Storage::disk(getstoragedisk())->url("storage/thumbnails/{$this->comic_id}".($this->chapter ? '/'.$this->chapter->slug : '')."/{$this->image}");
    }

    public function comic()
    {
        return $this->belongsTo(Comic::class);
    }

    public function chapter()
    {
        return $this->belongsTo(Chapter::class);
    }
}
