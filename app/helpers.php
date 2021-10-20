<?php

use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\File;

function env_array($key, $default = []) {
    return array_filter(array_map('trim', explode(',', env($key, implode(',', $default)))));
}

function optimize($source, $dest, $height = 200, $width = 150) {
    $path = Storage::disk(getstoragedisk())->path($source);
    try {
        $fullpath = Storage::disk(getstoragedisk())->url($path);
        if (getstoragedisk() == 'cdn') {
            $img = Image::make($fullpath);
        } else {
            $img = Image::make($path);
        }
        $img->height() < $img->width() ? $img->heighten($height) : $img->widen($width);
        $store = Storage::disk(getstoragedisk())->put($dest, $img->encode());
        //dump("Image was modified = $store");
    } catch (\Exception $e) {
        //Don't make sense though
        $dest_path = Storage::disk(getstoragedisk())->path($dest);
        $directory = File::dirname($dest_path);        
        if (!Storage::disk(getstoragedisk())->exists($directory)) {
            $makedirectory = Storage::disk(getstoragedisk())->makeDirectory($directory);
            if ($makedirectory) {
                $img = Image::make($path);
                $img->height() < $img->width() ? $img->heighten($height) : $img->widen($width);
                $store = Storage::disk(getstoragedisk())->put($dest, $img->encode());
            }            
        } else {
            dump($e->getMessage());
        }
    }
}

if (!function_exists('getstoragedisk')) {
    function getstoragedisk($disk = null) {
        if ($disk == null) {
            if (config('filesystems.usecdn')) {
                return 'cdn';
            }else {
                return 'public';
            }
        }else {
            return $disk;
        }        
    }
}