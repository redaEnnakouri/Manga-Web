<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Storage;

class Slide extends Model
{
    protected $fillable = [
        'headline', 'text', 'link', 'active'
    ];

    protected $appends = ['images'];

    public function getImagesAttribute()
    {
        return [
            'desktop' => Storage::disk(getstoragedisk())->exists("storage/slides/{$this->id}.jpg") ? Storage::disk(getstoragedisk())->url("storage/slides/{$this->id}.jpg") : Storage::disk(getstoragedisk())->url('storage/slides/default.jpg'),
            'mobile' => Storage::disk(getstoragedisk())->exists("storage/slides/{$this->id}_mobile.jpg") ? Storage::disk(getstoragedisk())->url("storage/slides/{$this->id}_mobile.jpg") : null
        ];
    }
}
