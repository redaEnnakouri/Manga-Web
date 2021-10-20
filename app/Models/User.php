<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use App\Notifications;
use Storage;

class User extends Authenticatable implements MustVerifyEmail
{
    protected $connection = 'users';
    use Notifiable, HasApiTokens;

    protected $fillable = [
        'username', 'name', 'email', 'password', 'role'
    ];

    protected $hidden = [
        'email', 'password', 'email_verified_at'
    ];

    protected $appends = [
        'avatar_url', 'signed_up', 'verified'
    ];

    public function getAvatarUrlAttribute()
    {
        return Storage::disk(getstoragedisk())->url('storage/avatars/'.$this->id.'.jpg?_='.$this->updated_at->timestamp);
    }

    public function getSignedUpAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    public function getVerifiedAttribute()
    {
        return $this->hasVerifiedEmail();
    }

    public function sendEmailVerificationNotification()
    {
        rescue(function () {
            $this->notify(new Notifications\VerifyEmail);
        });
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function favorites()
    {
        return $this->belongsToMany(Comic::class, 'favorites', 'user_id', 'entry')->wherePivot('type', 'comic');
    }
}
