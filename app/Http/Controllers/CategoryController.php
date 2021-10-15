<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api','admin'])->except(['index','show']);
    }

    public function index(Request $request)
    {
        $categories = Category::query();
        if ($request->has('sort')) {
            if ($request->sort == 'comics_count')
                $categories->withCount('comics');
            $categories->orderBy(
                (in_array($request->sort, ['name', 'comics_count']) ? $request->sort : 'id'),
                (in_array($request->order, ['desc', 'asc']) ? $request->order : 'desc')
            );
        }
        if ($request->filled('q')) $categories->simplesearch($request->q);
        $limit = (($request->per_page > 0 && $request->per_page < 100) ? $request->per_page : 12);
        return response()->json($categories->paginate($limit));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:categories',
            'description' => 'required'
        ]);
        $category = new Category([
            'name' => $request->name,
            'slug' => str_slug($request->name),
            'description' => $request->description
        ]);
        $category->save();

        return response()->json([
            'message' => __('admin.added_successfully')
        ], 201);
    }

    public function show($category)
    {
        return response()->json(Category::whereSlug($category)->firstOrFail()->append('meta_description'));
    }

    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => [
                'required',
                Rule::unique('categories')->ignore($category->id),
            ],
            'description' => 'required'
        ]);
        $category->update([
            'name' => $request->name,
            'slug' => str_slug($request->name),
            'description' => $request->description
        ]);

        return response()->json([
            'message' => __('admin.updated_successfully')
        ], 201);
    }

    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json([
            'message' => __('admin.deleted_successfully')
        ], 201);
    }
}
