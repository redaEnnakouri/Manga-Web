<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Storage;

class Language extends Model
{
    use Traits\Searchable;

    protected $fillable = [
        'name', 'slug', 'description'
    ];

    protected $appends = [
        'icon_url'
    ];

    protected $icons = [
        'english' => 'en.svg',
        'chinese' => 'cn.svg',
        'japanese' => 'jp.svg',
        'esperanto' => 'eo.svg',
        'cebuano' => 'ph.svg',
        'arabic' => 'ma.svg',
        'mongolian' => 'mn.svg',
        'slovak' => 'sk.svg',
        'czech' => 'cz.svg'
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
        return $this->description ? Str::limit($this->description, 160) : __('meta.description.language', [
            'name' => $this->name,
            'count' => $this->comics()->count()
        ]);
    }

    public function getIconUrlAttribute()
    {
        return Storage::disk(getstoragedisk())->url('images/flags/' . ($this->icons[$this->slug] ?? 'default.svg'));
    }

    public function comics()
    {
        return $this->hasMany(Comic::class);
    }
}
