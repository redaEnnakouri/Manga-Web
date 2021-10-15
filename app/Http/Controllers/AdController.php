<?php

namespace App\Http\Controllers;

use App\Models\Ad;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class AdController extends Controller
{
    const spots = ['popup', 'top', 'bottom'];

    public function __construct()
    {
        $this->middleware(['auth:api','admin']);
    }

    public function index(Request $request)
    {
        return response()->json(Ad::all()->each->setHidden([])->groupBy('spot'));
    }

    public function validation()
    {
        return request()->validate([
            'code' => 'required',
            'spot' => [
                'required',
                Rule::in(self::spots)
            ],
            'mobile' => 'boolean',
            'desktop' => 'boolean',
            'include' => 'nullable',
            'exclude' => 'nullable',
            'enabled' => 'boolean',
            'nsfw_enabled' => 'boolean|nullable',
            'language' => [
                'nullable',
                Rule::in(array_keys(config('app.available_languages')))
            ]
        ]);
    }

    public function store(Request $request)
    {
        (new Ad($this->validation()))->save();

        return response()->json([
            'message' => __('admin.added_successfully')
        ], 201);
    }

    public function show($id)
    {
        return response()->json(Ad::where('id', $id)->firstOrFail()->setHidden([]));
    }

    public function update(Request $request, Ad $ad)
    {
        $ad->update($this->validation());

        return response()->json([
            'message' => __('admin.updated_successfully')
        ], 201);
    }

    public function destroy(Ad $ad)
    {
        $ad->delete();
        return response()->json([
            'message' => __('admin.deleted_successfully')
        ], 201);
    }
}