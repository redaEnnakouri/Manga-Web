<?php

namespace App\Http\Controllers;

use App\Models\Language;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class LanguageController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api','admin'])->except(['index','show']);
    }

    public function index(Request $request)
    {
        $languages = Language::query();
        if ($request->has('sort')) {
            if ($request->sort == 'comics_count')
                $languages->withCount('comics');
            $languages->orderBy(
                (in_array($request->sort, ['name', 'comics_count']) ? $request->sort : 'id'),
                (in_array($request->order, ['desc', 'asc']) ? $request->order : 'desc')
            );
        }
        if ($request->filled('q')) $languages->simplesearch($request->q);
        $limit = (($request->per_page > 0 && $request->per_page < 100) ? $request->per_page : 12);
        return response()->json($languages->paginate($limit));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:languages',
            'description' => 'required'
        ]);
        $language = new Language([
            'name' => $request->name,
            'slug' => str_slug($request->name),
            'description' => $request->description
        ]);
        $language->save();

        return response()->json([
            'message' => __('admin.added_successfully')
        ], 201);
    }

    public function show($language)
    {
        return response()->json(Language::whereSlug($language)->firstOrFail()->append('meta_description'));
    }

    public function update(Request $request, Language $language)
    {
        $request->validate([
            'name' => [
                'required',
                Rule::unique('languages')->ignore($language->id),
            ],
            'description' => 'required'
        ]);
        $language->update([
            'name' => $request->name,
            'slug' => str_slug($request->name),
            'description' => $request->description
        ]);

        return response()->json([
            'message' => __('admin.updated_successfully')
        ], 201);
    }

    public function destroy(Language $language)
    {
        $language->delete();
        return response()->json([
            'message' => __('admin.deleted_successfully')
        ], 201);
    }
}
