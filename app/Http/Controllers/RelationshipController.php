<?php

namespace App\Http\Controllers;

use App\Models\Relationship;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class RelationshipController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api','admin'])->except(['index','show']);
    }

    public function index(Request $request)
    {
        $relationships = Relationship::query();
        if ($request->has('with') && $request->with = 'comics') {
            $relationships->with(['comics' => function($query) {
                $query->limit(8);
            }]);
        }
        if ($request->has('sort')) {
            $relationships->orderBy(
                (in_array($request->sort, ['name', 'comics_count']) ? $request->sort : 'id'),
                (in_array($request->order, ['desc', 'asc']) ? $request->order : 'desc')
            );
        }
        if ($request->filled('q'))
            $relationships->where('name', 'LIKE', '%'.$request->q.'%')->orWhere('description', 'LIKE', '%'.$request->q.'%');
        $limit = (($request->per_page > 0 && $request->per_page < 100) ? $request->per_page : 12);
        return response()->json($relationships->paginate($limit));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:relationships',
            'description' => 'required'
        ]);
        $relationship = new Relationship([
            'name' => $request->name,
            'slug' => str_slug($request->name),
            'description' => $request->description
        ]);
        $relationship->save();

        return response()->json([
            'message' => __('admin.added_successfully')
        ], 201);
    }

    public function show($relationship)
    {
        return response()->json(Relationship::whereSlug($relationship)->firstOrFail()->append('meta_description'));
    }

    public function update(Request $request, Relationship $relationship)
    {
        $request->validate([
            'name' => [
                'required',
                Rule::unique('relationships')->ignore($relationship->id),
            ],
            'description' => 'required'
        ]);
        $relationship->update([
            'name' => $request->name,
            'slug' => str_slug($request->name),
            'description' => $request->description
        ]);

        return response()->json([
            'message' => __('admin.updated_successfully')
        ], 201);
    }

    public function destroy(Relationship $relationship)
    {
        $relationship->delete();
        return response()->json([
            'message' => __('admin.deleted_successfully')
        ], 201);
    }
}
