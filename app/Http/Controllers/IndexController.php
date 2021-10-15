<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use App\Models\Ad;
use App\Models\Comic;
use App\Models\Tag;
use Mobile_Detect;

class IndexController extends Controller
{
    public function __invoke($locale = null, $slug = null)
    {
        $nsfw = request()->has('nsfw') ? request()->boolean('nsfw') : session('nsfw', false);
        $title = __('meta.title.default');
        $description = __('meta.description.default');
        $comic = $tag = null;
        if ($slug) {
            if ($comic = Comic::whereSlug($slug)->first()) {
                $title = __('meta.title.comic', ['title' => $comic->title]);
                $description = $comic->meta_description;
            } else if ($tag = Tag::whereSlug($slug)->first()) {
                $title = __('meta.title.tag', ['name' => $tag->name]);
                $description = $tag->meta_description;
            }
        }
        if (($comic && $comic->nsfw) || ($tag && $tag->nsfw)) $nsfw = true;
        session(compact('nsfw'));
        $is_mobile = (new Mobile_Detect)->isMobile();
        $country = strtoupper(request()->vj_ca ?? $_SERVER['HTTP_CF_IPCOUNTRY'] ?? 'XX');
        $cdn = Storage::disk(getstoragedisk());
        //$filecdn = config('filesystems.cdnlink');
        $ads = Ad::where([
            $is_mobile ? 'mobile' : 'desktop' => true,
            'enabled' => true
        ])->where(function ($query) use ($nsfw) {
            $query->whereNull('nsfw');
            $query->orWhere('nsfw', $nsfw);
        })->where(function ($query) use ($country) {
            $query->whereNull('include');
            $query->orWhereJsonContains('include', $country);
        })->where(function ($query) use ($country) {
            $query->whereNull('exclude');
            $query->orWhereJsonDoesntContain('exclude', $country);
        })->get();
        $popup = $ads->where('spot', 'popup')->pluck('code')->implode('');
        $ads = $ads->where('spot', '!=', 'popup')->groupBy('spot')->all();

        

        return view('index', compact('is_mobile', 'country', 'cdn', 'popup', 'ads', 'nsfw', 'title', 'description'));
    }
}