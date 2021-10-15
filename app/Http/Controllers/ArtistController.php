<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ArtistController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api','admin'])->except(['index','show']);
    }

    public function index(Request $request)
    {
        $artists = Artist::query();
        if ($request->has('sort')) {
            $artists->orderBy(
                (in_array($request->sort, ['name', 'comics_count']) ? $request->sort : 'id'),
                (in_array($request->order, ['desc', 'asc']) ? $request->order : 'desc')
            );
        }
        if ($request->filled('q')) $artists->simplesearch($request->q);
        $limit = (($request->per_page > 0 && $request->per_page < 100) ? $request->per_page : 18);
        return response()->json($artists->paginate($limit));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:artists',
            'description' => 'nullable',
            'gender' => 'required|in:male,female',
            'platforms.*.platform' => 'required',
            'platforms.*.details' => 'required',
        ]);
        $artist = new Artist([
            'name' => $request->name,
            'slug' => str_slug($request->name, '-'),
            'description' => $request->description,
            'gender' => $request->gender,
            'platforms' => $request->platforms,
        ]);
        $artist->save();

        return response()->json([
            'message' => __('admin.added_successfully')
        ], 201);
    }

    public function show($artist)
    {
        return response()->json(Artist::whereSlug($artist)->firstOrFail()->append('meta_description'));
    }

    public function update(Request $request, Artist $artist)
    {
        $request->validate([
            'name' => [
                'required',
                Rule::unique('artists')->ignore($artist->id),
            ],
            'description' => 'nullable',
            'gender' => 'required|in:male,female',
            'platforms.*.platform' => 'required',
            'platforms.*.details' => 'required',
        ]);
        $artist->update([
            'name' => $request->name,
            'slug' => str_slug($request->name, '-'),
            'description' => $request->description,
            'gender' => $request->gender,
            'platforms' => $request->platforms,
        ]);

        return response()->json([
            'message' => __('admin.updated_successfully')
        ], 201);
    }

    public function destroy(Artist $artist)
    {
        $artist->delete();
        return response()->json([
            'message' => __('admin.deleted_successfully')
        ], 201);
    }
}
