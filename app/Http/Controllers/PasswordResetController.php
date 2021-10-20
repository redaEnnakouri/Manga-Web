<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Notifications\PasswordResetRequest;
use App\Models\User;
use App\Models\PasswordReset;

class PasswordResetController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user)
            return response()->json([
                'message' => __('auth.account_not_found')
            ], 404);

        $password_reset = PasswordReset::updateOrCreate(['email' => $user->email], ['email' => $user->email,'token' => str_random(60)]);

        if ($user && $password_reset) {
            rescue(function() use($user, $password_reset) {
                $user->notify(new PasswordResetRequest($password_reset->token));
            });
        }

        return response()->json([
            'message' => __('auth.link_sent')
        ]);
    }

    public function find($token)
    {
        $password_reset = PasswordReset::where('token', $token)->first();

        if (!$password_reset)
            return response()->json([
                'message' => __('auth.invalid_link')
            ], 404);

        if (Carbon::parse($password_reset->updated_at)->addMinutes(720)->isPast()) {
            $password_reset->delete();
            return response()->json([
                'message' => __('auth.link_expired')
            ], 403);
        }

        return response()->json($password_reset);
    }

    public function reset(Request $request)
    {
        $request->validate([
            'password' => 'required|string|min:6',
            'token' => 'required|string'
        ]);

        $password_reset = PasswordReset::where('token', $request->token)->first();

        if (!$password_reset)
            return response()->json([
                'message' => __('auth.invalid_link')
            ], 404);

        $user = User::where('email', $password_reset->email)->first();

        if (!$user)
            return response()->json([
                'message' => __('auth.account_not_found')
            ], 404);

        $user->password = bcrypt($request->password);
        $user->save();

        $password_reset->delete();

        return response()->json([
            'message' => __('auth.resetted')
        ]);
    }
}
