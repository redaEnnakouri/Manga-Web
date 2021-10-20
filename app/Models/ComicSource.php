<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ComicSource extends Model
{
    protected $fillable = [
        'link', 'comic_id', 'disabled'
    ];

    public $timestamps = null;

    public function comic()
    {
        return $this->belongsTo(Comic::class);
    }
}
