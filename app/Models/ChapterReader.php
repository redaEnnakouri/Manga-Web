<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChapterReader extends Model
{
    protected $connection = 'users';
    protected $fillable = [
        'chapter_id', 'user_id'
    ];

    const CREATED_AT = 'read_at';
    const UPDATED_AT = null;

    public function chapter()
    {
        return $this->belongsTo(Chapter::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
