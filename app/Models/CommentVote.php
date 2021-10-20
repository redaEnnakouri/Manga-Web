<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CommentVote extends Model
{
    protected $connection = 'users';
    protected $fillable = ['comment_id', 'user_id', 'vote'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comment()
    {
        return $this->belongsTo(Comment::class);
    }
}
