<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Storage;

class Comic extends Model
{
    use Traits\Filterable, Traits\Searchable, Traits\Countable, Traits\Randomable, \Staudenmeir\EloquentEagerLimit\HasEagerLimit;

    protected $fillable = [
        'title', 'alternative_title', 'linkcode', 'slug', 'description', 'language_id', 'category_id', 'rewritten', 'translated', 'speechless', 'status', 'uploaded_at'
    ];

    protected $hidden = [
        'created_at', 'updated_at', 'relevance_score', 'language_id', 'category_id', 'image', 'visits'
    ];

    protected $appends = [
        'thumb_url',
        'image_url',
        'short_url',
        'premium'
    ];

    protected $casts = [
        'translated' => 'boolean',
        'rewritten' => 'boolean',
        'speechless' => 'boolean',
        'uploaded_at' => 'date:Y-m-d'
    ];

    protected $with = [
        'category',
        'language',
        'tags'
    ];

    protected $searchable = [
        'title',
        'alternative_title',
        'description'
    ];

    protected static function booted()
    {
        if (!config('app.nsfw')) {
            static::addGlobalScope('nsfw', function ($builder) {
                $builder->whereDoesntHave('tags', function ($query) {
                    $query->whereIn('slug', ['adult']);
                });
            });
        }
        static::deleting(function ($comic) {
            if ($comic->image) {
                Storage::disk(getstoragedisk())->delete("storage/comics/{$comic->image}");
                Storage::disk(getstoragedisk())->delete("storage/thumbs/{$comic->image}");
            }
            Storage::disk(getstoragedisk())->deleteDirectory("storage/images/{$comic->id}");
            Storage::disk(getstoragedisk())->deleteDirectory("storage/thumbnails/{$comic->id}");
        });
    }

    public function getNsfwAttribute()
    {
        return $this->tags->whereIn('slug', ['adult'])->isNotEmpty();
    }

    public function getMetaDescriptionAttribute()
    {
        return $this->description ? Str::limit($this->description, 160) : __('meta.description.comic', [
            'date' => $this->uploaded_at->isoFormat('ll'),
            'title' => $this->title,
            'category' => $this->category->name ?? __('meta.description.defaults.category'),
            'creators' => $this->artists->merge($this->authors)->pluck('name')->implode(', ') ?: __('meta.description.defaults.creators')
        ]);
    }

    public function getDownloadableAttribute()
    {
        return ($this->pages > 0) && ($this->pages <= 300);
    }

    public function getPremiumAttribute()
    {
        return $this->tags->where('slug', 'premium')->isNotEmpty();
    }

    public function getImageUrlAttribute()
    {
        return Storage::disk(getstoragedisk())->url('storage/comics/' . ($this->image ?? 'default.jpg'));
    }

    public function getThumbUrlAttribute()
    {
        return Storage::disk(getstoragedisk())->url('storage/comics/thumbs/' . ($this->image ?? 'default.jpg'));
    }

    public function getShortUrlAttribute()
    {
        return route('comic.short_url', ['id' => $this->id]);
    }

    public function getFavoritedAttribute()
    {
        if ($user = auth('api')->user()) return $this->favorites()->where('user_id', $user->id)->exists();
        return false;
    }

    public function getRecommendationsAttribute()
    {
        return self::get();
    }

    public function artists()
    {
        return $this->belongsToMany(Artist::class, 'comic_artists');
    }

    public function authors()
    {
        return $this->belongsToMany(Author::class, 'comic_authors');
    }

    public function characters()
    {
        return $this->belongsToMany(Character::class, 'comic_characters');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'comic_tags')->withoutGlobalScope('nsfw-categories');
    }

    public function parodies()
    {
        return $this->belongsToMany(Parody::class, 'comic_parodies');
    }

    public function relationships()
    {
        return $this->belongsToMany(Relationship::class, 'comic_relationships');
    }

    public function groups()
    {
        return $this->belongsToMany(Group::class, 'comic_groups');
    }

    public function language()
    {
        return $this->belongsTo(Language::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function images()
    {
        return $this->hasMany(ComicImage::class)->oldest('chapter_id')->orderBy('page', 'asc');
    }

    public function sources()
    {
        return $this->hasMany(ComicSource::class);
    }

    public function chapters()
    {
        return $this->hasMany(Chapter::class);
    }

    public function favorites()
    {
        return $this->belongsToMany(User::class, 'favorites', 'entry', 'user_id')->withPivot('created_at')->wherePivot('type', 'comic');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class, 'entry')->where('comments.type', 'comic');
    }

    public function sessions()
    {
        return $this->hasMany(Session::class, 'entry')->where('sessions.type', 'comic')->selectRaw('entry, sum(visits) as total')
        ->groupBy('entry');
    }

    public function getFirstChapterAttribute()
    {
        return $this->chapters()->oldest('id')->first();
    }
}
