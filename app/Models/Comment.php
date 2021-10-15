<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Facades\App\Services\Parser;

class Comment extends Model
{
    use SoftDeletes;

    protected $connection = 'users';
    protected $fillable = [
        'identifier', 'parent_id', 'user_id', 'content', 'type', 'entry'
    ];

    protected $with = ['user'];

    protected $hidden = [
        'id', 'children', 'deleted_at', 'parent_id', 'user_id', 'votes'
    ];

    protected $appends = ['points', 'html', 'posted', 'item', 'meta', 'child'];

    static function entryModel($type)
    {
        return $models = [
            'comic' => Comic::query(),
            'user' => User::query(),
            'artist' => Artist::query(),
            'author' => Author::query(),
            'character' => Character::query()
        ][$type] ?? null;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getChildAttribute()
    {
        return !!$this->parent_id;
    }

    public function getPointsAttribute()
    {
        return $this->votes->sum('vote');
    }

    public function getItemAttribute()
    {
        $model = $this->entryModel($this->type)->setEagerLoads([])->find($this->entry);
        if (!$model) return ['title' => 'Deleted', 'slug' => null];
        return $model->only('title', 'name', 'slug', 'identifier', 'type');
    }

    public function getMetaAttribute()
    {
        $user = auth('api')->user();
        $edited = $this->created_at->ne($this->updated_at);
        if (!$user) return ['edited' => $edited, 'upvoted' => null, 'downvoted' => null, 'owner' => null];
        $actions = $this->votes->where('user_id', $user->id);
        return [
            'edited' => $edited,
            'upvoted' => $actions->where('vote', '1')->isNotEmpty(),
            'downvoted' => $actions->where('vote', '-1')->isNotEmpty(),
            'owner' => $this->user->id === $user->id || $user->role === 'admin'
        ];
    }

    public function getHtmlAttribute()
    {
        return Parser::text($this->content);
    }

    public function getPostedAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    public function children()
    {
        return $this->hasMany(self::class, 'parent_id');
    }

    public function votes()
    {
        return $this->hasMany(CommentVote::class);
    }
}
