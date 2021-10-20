<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    protected $connection = 'users';
    protected $fillable = [
        'code', 'spot', 'include', 'exclude', 'mobile', 'desktop', 'enabled', 'language', 'nsfw', 'nsfw_enabled'
    ];

    protected $hidden = [
        'id', 'spot', 'include', 'exclude', 'mobile', 'desktop', 'enabled', 'created_at', 'updated_at', 'nsfw', 'nsfw_enabled'
    ];

    protected $casts = [
        'nsfw' => 'boolean',
    ];

    protected $appends = ['nsfw_enabled'];

    public function getNsfwEnabledAttribute()
    {
        return $this->nsfw;
    }
    public function setNsfwEnabledAttribute($value)
    {
        $this->attributes['nsfw'] = $value;
    }
    public function setIncludeAttribute($value)
    {
        $this->attributes['include'] = $value ? json_encode(array_map('strtoupper', array_map('trim', explode(',', $value)))) : null;
    }
    public function getIncludeAttribute()
    {
        if ($json = json_decode($this->attributes['include'])) return implode(', ', $json);
    }
    public function setExcludeAttribute($value)
    {
        $this->attributes['exclude'] = $value ? json_encode(array_map('strtoupper', array_map('trim', explode(',', $value)))) : null;
    }
    public function getExcludeAttribute()
    {
        if ($json = json_decode($this->attributes['exclude'])) return implode(', ', $json);
    }
}
