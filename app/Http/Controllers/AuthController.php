<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\Events\Verified;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;
use Avatar;
use Illuminate\Support\Facades\Storage;
use Image;

class AuthController extends Controller
{
    public function protected_register(Request $request)
    {
        $request->validate([
            'captcha' => [
                'required',
                function ($attribute, $value, $fail) {
                    $recaptcha = new \ReCaptcha\ReCaptcha(config('site.captcha.secret'));
                    $check = $recaptcha->verify($value);
                    if (!$check->isSuccess()) {
                        $fail(__('auth.captcha'));
                    }
                },
            ],
        ]);

        return $this->register($request);
    }

    public function register(Request $request)
    {
        $request->validate([
            'username' => 'required|alpha_dash|unique:users.users|min:2|max:12',
            'email' => 'required|string|email|unique:users.users',
            'password' => 'required|string|min:6'
        ]);
        $user = new User([
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        $user->save();

        $avatar = Avatar::create($user->username)->getImageObject()->encode('jpg');

        Storage::disk(getstoragedisk())->put('storage/avatars/'.$user->id.'.jpg', (string) $avatar);

        $user->sendEmailVerificationNotification();

        return response()->json([
            'message' => __('auth.registered')
        ], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required',
            'remember_me' => 'boolean'
        ]);

        $credentials = request(['username', 'password']);

        if(!Auth::attempt($credentials))
            return response()->json(['message' => __('auth.invalid')], 401);

        $user = $request->user();

        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;

        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addYear(1);
        } else {
            $token->expires_at = Carbon::now()->addWeek(1);
        }

        $token->save();

        return response()->json([
            'auth' => [
                'access_token' => $tokenResult->accessToken,
                'type' => 'Bearer',
                'expires_at' => Carbon::parse(
                    $tokenResult->token->expires_at
                )->toDateTimeString()
            ],
            'user' => $user
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return response()->json([
            'message' => __('auth.logged_out')
        ]);
    }

    public function verify(Request $request, $email)
    {
        $user = User::where('email', $email)->firstOrFail();
        if ($user->hasVerifiedEmail()) return response()->json(['message' => __('auth.already_verified')], 401);

        if ($user->markEmailAsVerified()) event(new Verified($user));

        return response()->json(['message' => __('auth.verified')]);
    }

    public function resend(Request $request)
    {
        if ($request->user()->hasVerifiedEmail()) return response()->json(['message' => __('auth.already_verified')], 401);

        $request->user()->sendEmailVerificationNotification();

        return response()->json([
            'message' => __('auth.resent')
        ]);
    }

    public function account(Request $request)
    {
        return response()->json($request->user()->makeVisible('email'));
    }

    public function update_account(Request $request)
    {
        $user = $request->user();
        $request->validate([
            'username' => [
                'required',
                'alpha_dash',
                'min:2',
                'max:12',
                Rule::unique('users.users')->ignore($user->id),
            ],
            'email' => [
                'required',
                'email',
                Rule::unique('users.users')->ignore($user->id),
            ],
            'password' => 'nullable|min:6',
            'avatar' => [
                function ($attribute, $value, $fail) {
                    if (!empty($value) && !file_exists(storage_path('app/temp/'.$value))) {
                        $fail("The $attribute wasn't uploaded successfully");
                    }
                }
            ],
        ]);

        $current_email = $user->email;

        $user->update([
            'username' => $request->username,
            'email' => $request->email,
            'password' => !empty($request->password) ? bcrypt($request->password) : $user->password,
        ]);
        if (!empty($request->avatar)) {
            Image::make(storage_path('app/temp/'.$request->avatar))->fit(150)->save(storage_path('app/temp/'.$request->avatar));
            //File::move(storage_path('app/temp/'.$request->avatar), storage_path('app/public/avatars/'.$user->id.'.jpg'));
            $modfiedavatar = storage_path('app/temp/'.$request->avatar);
            $putavatar = Storage::disk(getstoragedisk())->put('storage/avatars/'.$user->id.'.jpg', fopen($modfiedavatar, 'r+'));
            //dump($putavatar);
            //Delete
            if ($putavatar) {
                File::delete(storage_path('app/temp/'.$request->avatar));
            }            
        }

        if ($current_email != $user->email) {
            $user->forceFill(['email_verified_at' => null])->save();
            $user->sendEmailVerificationNotification();
        }

        return response()->json([
            'message' => __('auth.updated_successfully')
        ], 201);
    }
}
