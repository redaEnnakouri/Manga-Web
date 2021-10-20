<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class TagController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api','admin'])->except(['index','show']);
    }

    public function index(Request $request)
    {
        $tags = Tag::query();
        if ($request->has('with') && $request->with = 'comics') {
            $tags->with(['comics' => function($query) {
                $query->limit(8);
            }]);
        }
        if ($request->has('landing')) $tags->orderByRaw("field(slug, 'uncensored') desc");
        if ($request->has('sort')) {
            $tags->orderBy(
                (in_array($request->sort,
                ['name', 'comics_count']) ? $request->sort : 'id'),
                (in_array($request->order, ['desc', 'asc']) ? $request->order : 'desc')
            );
        }
        if ($request->filled('q')) $tags->where('name', 'LIKE', '%'.$request->q.'%')->orWhere('description', 'LIKE', '%'.$request->q.'%');
        $limit = (($request->per_page > 0 && $request->per_page < 100) ? $request->per_page : 5);
        if ($request->has('discover'))
            return $tags->random($limit)->limit($limit)->get();
        return $tags->paginate($limit);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:tags',
            'description' => 'required',
            'color' => [
                'required',
                'regex:/^(\#[\da-f]{3}|\#[\da-f]{6}|rgba\(((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*,\s*){2}((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*)(,\s*(0\.\d+|1))\)|hsla\(\s*((\d{1,2}|[1-2]\d{2}|3([0-5]\d|60)))\s*,\s*((\d{1,2}|100)\s*%)\s*,\s*((\d{1,2}|100)\s*%)(,\s*(0\.\d+|1))\)|rgb\(((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*,\s*){2}((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*)|hsl\(\s*((\d{1,2}|[1-2]\d{2}|3([0-5]\d|60)))\s*,\s*((\d{1,2}|100)\s*%)\s*,\s*((\d{1,2}|100)\s*%)\))$/i',
            ],
        ]);
        $tag = new Tag([
            'name' => $request->name,
            'slug' => str_slug($request->name, '-'),
            'description' => $request->description,
            'color' => $request->color,
        ]);
        $tag->save();

        return response()->json([
            'message' => __('admin.added_successfully')
        ], 201);
    }

    public function show($tag)
    {
        return response()->json(Tag::whereSlug($tag)->firstOrFail()->append('meta_description'));
    }

    public function update(Request $request, Tag $tag)
    {
        $request->validate([
            'name' => [
                'required',
                Rule::unique('tags')->ignore($tag->id),
            ],
            'description' => 'required',
            'color' => [
                'required',
                'regex:/^(\#[\da-f]{3}|\#[\da-f]{6}|rgba\(((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*,\s*){2}((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*)(,\s*(0\.\d+|1))\)|hsla\(\s*((\d{1,2}|[1-2]\d{2}|3([0-5]\d|60)))\s*,\s*((\d{1,2}|100)\s*%)\s*,\s*((\d{1,2}|100)\s*%)(,\s*(0\.\d+|1))\)|rgb\(((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*,\s*){2}((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*)|hsl\(\s*((\d{1,2}|[1-2]\d{2}|3([0-5]\d|60)))\s*,\s*((\d{1,2}|100)\s*%)\s*,\s*((\d{1,2}|100)\s*%)\))$/i',
            ],
        ]);
        $tag->update([
            'name' => $request->name,
            'slug' => str_slug($request->name, '-'),
            'description' => $request->description,
            'color' => $request->color,
        ]);

        return response()->json([
            'message' => __('admin.updated_successfully')
        ], 201);
    }

    public function destroy(Tag $tag)
    {
        $tag->delete();
        return response()->json([
            'message' => __('admin.deleted_successfully')
        ], 201);
    }
}
