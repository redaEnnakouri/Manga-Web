<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Chapter extends Model
{
    use Traits\Slugable;

    protected $fillable = [
        'chapter', 'comic_id', 'original', 'name', 'slug', 'meta', 'added_at'
    ];

    protected $hidden = [
        'chapter', 'comic_id', 'original', 'meta'
    ];
    protected $casts = [
        'meta' => 'array',
    ];

    protected $appends = [
        'read'
    ];

    protected $touches = ['comic'];

    public $timestamps = null;

    protected static function booted()
    {
        static::deleting(function ($comic) {
            Storage::disk(getstoragedisk())->deleteDirectory("storage/images/{$chapter->comic->id}/{$chapter->id}");
            Storage::disk(getstoragedisk())->deleteDirectory("storage/thumbnails/{$chapter->comic->id}/{$chapter->id}");
        });
    }

    public function getNameAttribute($value)
    {
        return $this->attributes['original'];
    }

    public function getAddedAtAttribute($value)
    {
        $carbon = Carbon::parse($value);
        if ($carbon->greaterThan(now()->subWeek())) return $carbon->diffForHumans();
        return $carbon->format('Y-m-d');
    }

    static function generate($meta, $fallback = 'Chapter')
    {
        $parts = [];
        if (!empty($meta['chapter'])) $parts[] = "Chapter {$meta['chapter']}";
        if (!empty($meta['sidestory'])) $parts[] = "Sidestory {$meta['sidestory']}";
        if (!empty($meta['season'])) $parts[] = "Season {$meta['season']}";
        if ($meta['prologue']) $parts[] = "Prologue";
        else if ($meta['epilogue']) $parts[] = "Epilogue";
        if ($meta['end']) $parts[] = "[END]";
        return implode(' - ', $parts) ?: $fallback;
    }

    public function comic()
    {
        return $this->belongsTo(Comic::class);
    }

    public function images()
    {
        return $this->hasMany(ComicImage::class)->orderBy('page', 'asc');
    }

    public function readers()
    {
        return $this->hasMany(ChapterReader::class);
    }

    public function getReadAttribute()
    {
        if ($user = auth('api')->user()) return $this->readers()->where('user_id', $user->id)->exists();
        return false;
    }
}
