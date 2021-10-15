<?php

namespace App\Http\Controllers;

use App\Models\Parody;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ParodyController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api','admin'])->except(['index','show']);
    }

    public function index(Request $request)
    {
        $parodies = Parody::query();
        if ($request->has('with') && $request->with = 'comics') {
            $parodies->with(['comics' => function($query) {
                $query->limit(8);
            }]);
        }
        if ($request->has('sort')) {
            $parodies->orderBy(
                (in_array($request->sort, ['name', 'comics_count']) ? $request->sort : 'id'),
                (in_array($request->order, ['desc', 'asc']) ? $request->order : 'desc')
            );
        }
        if ($request->filled('q'))
            $parodies->simplesearch($request->q);
        $limit = (($request->per_page > 0 && $request->per_page < 100) ? $request->per_page : 5);
        return response()->json($parodies->paginate($limit));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:parodies',
            'description' => 'required'
        ]);
        $parody = new Parody([
            'name' => $request->name,
            'slug' => str_slug($request->name),
            'description' => $request->description
        ]);
        $parody->save();

        return response()->json([
            'message' => __('admin.added_successfully')
        ], 201);
    }

    public function show($parody)
    {
        return response()->json(Parody::whereSlug($parody)->firstOrFail()->append('meta_description'));
    }

    public function update(Request $request, Parody $parody)
    {
        $request->validate([
            'name' => [
                'required',
                Rule::unique('parodies')->ignore($parody->id),
            ],
            'description' => 'required'
        ]);
        $parody->update([
            'name' => $request->name,
            'slug' => str_slug($request->name),
            'description' => $request->description
        ]);

        return response()->json([
            'message' => __('admin.updated_successfully')
        ], 201);
    }

    public function destroy(Parody $parody)
    {
        $parody->delete();
        return response()->json([
            'message' => __('admin.deleted_successfully')
        ], 201);
    }
}
