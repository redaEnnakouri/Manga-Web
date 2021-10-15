<?php

namespace App\Http\Middleware;

use Closure;

class SetLanguage
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (array_key_exists($request->lang, config('app.available_languages'))) {
            $language = $request->lang;
        } elseif (array_key_exists($request->server('HTTP_ACCEPT_LANGUAGE'), config('app.available_languages'))) {
            $language = $request->server('HTTP_ACCEPT_LANGUAGE');
        } else {
            $language = config('app.fallback_locale');
        }
        \App::setLocale($language);
        return $next($request);
    }
}
