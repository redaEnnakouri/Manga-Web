<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Image;

class UploadController extends Controller
{
    public function __invoke(Request $request)
    {
        $this->middleware(['admin']);
        $request->validate([
            'image' => 'required|image',
        ]);
        $name = substr(md5(mt_rand()), 0, 7).'.jpg';
        Image::make($request->file('image'))->encode('jpg')->save(storage_path('app/temp/'.$name));
        return response()->json([
            'file' => $name,
            'message' => __('admin.uploaded_successfully')
        ], 201);
    }
}
