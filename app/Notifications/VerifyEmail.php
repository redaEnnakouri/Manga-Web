<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\URL;
use Illuminate\Auth\Notifications\VerifyEmail as OldVerifyEmail;

class VerifyEmail extends OldVerifyEmail
{
    use Queueable;

    protected function verificationUrl($notifiable)
    {
        return url('?'.parse_url(URL::temporarySignedRoute('verification.verify', now()->addMinutes(config('auth.verification.expire', 60)), ['email' => $notifiable->email]), PHP_URL_QUERY), ['verify', $notifiable->email]);
    }
}
