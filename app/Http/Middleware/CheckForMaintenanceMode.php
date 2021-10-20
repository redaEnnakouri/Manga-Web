<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode as Middleware;
use Closure;

class CheckForMaintenanceMode extends Middleware
{
    /**
     * The URIs that should be reachable while maintenance mode is enabled.
     *
     * @var array
     */
    protected $except = [
        //
    ];

    public function handle($request, Closure $next)
    {
        if ($this->app->isDownForMaintenance()) {
            if ($this->inExceptArray($request)) {
                return $next($request);
            }
            return redirect()->away('http://hentaihand.com');
        }
        return $next($request);
    }
}
