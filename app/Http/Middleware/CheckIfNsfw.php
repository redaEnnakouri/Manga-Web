<?php

namespace App\Http\Middleware;

use Closure;

class CheckIfNsfw
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
        if (in_array('nsfw', config('site.features'))) config(['app.nsfw' => $request->has('nsfw') ? $request->nsfw === 'true' : false]);
        $request->offsetUnset('nsfw');
        return $next($request);
    }
}
