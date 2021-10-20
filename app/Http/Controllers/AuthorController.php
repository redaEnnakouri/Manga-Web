<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class AuthorController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api','admin'])->except(['index','show']);
    }

    public function index(Request $request)
    {
        $authors = Author::query();
        if ($request->has('sort')) {
            $authors->orderBy(
                (in_array($request->sort, ['name', 'comics_count']) ? $request->sort : 'id'),
                (in_array($request->order, ['desc', 'asc']) ? $request->order : 'desc')
            );
        }
        if ($request->filled('q')) $authors->simplesearch($request->q);
        $limit = (($request->per_page > 0 && $request->per_page < 100) ? $request->per_page : 18);
        return response()->json($authors->paginate($limit));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:authors',
            'description' => 'nullable',
            'gender' => 'required|in:male,female',
            'platforms.*.platform' => 'required',
            'platforms.*.details' => 'required',
        ]);
        $author = new Author([
            'name' => $request->name,
            'slug' => str_slug($request->name, '-'),
            'description' => $request->description,
            'gender' => $request->gender,
            'platforms' => $request->platforms,
        ]);
        $author->save();

        return response()->json([
            'message' => __('admin.added_successfully')
        ], 201);
    }

    public function show($author)
    {
        return response()->json(Author::whereSlug($author)->firstOrFail()->append('meta_description'));
    }

    public function update(Request $request, Author $author)
    {
        $request->validate([
            'name' => [
                'required',
                Rule::unique('authors')->ignore($author->id),
            ],
            'description' => 'nullable',
            'gender' => 'required|in:male,female',
            'platforms.*.platform' => 'required',
            'platforms.*.details' => 'required',
        ]);
        $author->update([
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

    public function destroy(Author $author)
    {
        $author->delete();
        return response()->json([
            'message' => __('admin.deleted_successfully')
        ], 201);
    }
}
