<?php

namespace App\Http\Middleware;

use Closure;

class EnsureUserIsAdmin
{
    public function handle($request, Closure $next)
    {
        if (!$request->user() || $request->user()->role != 'admin') {
            abort(403, 'You don\'t have the permissions to perform such action.');
        }

        return $next($request);
    }
}
