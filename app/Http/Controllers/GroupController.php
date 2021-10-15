<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class GroupController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api','admin'])->except(['index','show']);
    }

    public function index(Request $request)
    {
        $groups = Group::query();
        if ($request->has('sort')) {
            $groups->orderBy(
                (in_array($request->sort, ['name', 'comics_count']) ? $request->sort : 'id'),
                (in_array($request->order, ['desc', 'asc']) ? $request->order : 'desc')
            );
        }
        if ($request->filled('q'))
            $groups->where('name', 'LIKE', '%'.$request->q.'%')->orWhere('description', 'LIKE', '%'.$request->q.'%');
        $limit = (($request->per_page > 0 && $request->per_page < 100) ? $request->per_page : 24);
        return response()->json($groups->paginate($limit));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:groups',
            'description' => 'required'
        ]);
        $group = new Group([
            'name' => $request->name,
            'slug' => str_slug($request->name),
            'description' => $request->description
        ]);
        $group->save();

        return response()->json([
            'message' => __('admin.added_successfully')
        ], 201);
    }

    public function show($group)
    {
        return response()->json(Group::whereSlug($group)->firstOrFail()->append('meta_description'));
    }

    public function update(Request $request, Group $group)
    {
        $request->validate([
            'name' => [
                'required',
                Rule::unique('groups')->ignore($group->id),
            ],
            'description' => 'required'
        ]);
        $group->update([
            'name' => $request->name,
            'slug' => str_slug($request->name),
            'description' => $request->description
        ]);

        return response()->json([
            'message' => __('admin.updated_successfully')
        ], 201);
    }

    public function destroy(Group $group)
    {
        $group->delete();
        return response()->json([
            'message' => __('admin.deleted_successfully')
        ], 201);
    }
}
