<?php

namespace App\Http\Controllers;

use App\Models\Character;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class CharacterController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api','admin'])->except(['index','show']);
    }

    public function index(Request $request)
    {
        $characters = Character::query();
        if ($request->has('sort')) {
            in_array($request->sort, ['name', 'comics_count']) ? $characters->orderBy($request->sort, in_array($request->order, ['desc', 'asc']) ? $request->order : 'desc') : 'id';
        }
        if ($request->filled('q')) $characters->simplesearch($request->q);
        $limit = (($request->per_page > 0 && $request->per_page < 100) ? $request->per_page : 18);
        return response()->json($characters->paginate($limit));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:characters',
            'description' => 'required',
            'gender' => 'required|in:male,female',
            'hair' => 'required',
        ]);
        $character = new Character([
            'name' => $request->name,
            'slug' => str_slug($request->name, '-'),
            'description' => $request->description,
            'gender' => $request->gender,
            'hair' => $request->hair,
        ]);
        $character->save();

        return response()->json([
            'message' => __('admin.added_successfully')
        ], 201);
    }

    public function show($character)
    {
        return response()->json(Character::whereSlug($character)->firstOrFail()->append('meta_description'));
    }

    public function update(Request $request, Character $character)
    {
        $request->validate([
            'name' => [
                'required',
                Rule::unique('characters')->ignore($character->id),
            ],
            'description' => 'required',
            'gender' => 'required|in:male,female',
            'hair' => 'required',
        ]);
        $character->update([
            'name' => $request->name,
            'slug' => str_slug($request->name, '-'),
            'description' => $request->description,
            'gender' => $request->gender,
            'hair' => $request->hair,
        ]);

        return response()->json([
            'message' => __('admin.updated_successfully')
        ], 201);
    }

    public function destroy(Character $character)
    {
        $character->delete();
        return response()->json([
            'message' => __('admin.deleted_successfully')
        ], 201);
    }
}
