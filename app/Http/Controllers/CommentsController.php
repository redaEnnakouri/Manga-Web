<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Facades\App\Services\Parser;
use Illuminate\Http\Request;
use \Illuminate\Pagination\LengthAwarePaginator;

class CommentsController extends Controller
{
    private $entry;
    private $model;
    private $comment;
    private $comments;

    public function __construct(Request $request)
    {
        $this->middleware(['auth:api'])->only(['store', 'update', 'destroy', 'vote']);
        if ($request->route()->uri() === 'api/comments') {
            $this->comments = Comment::whereNull('parent_id');
            return;
        }
        if ($request->route('type', false)) {
            $model = Comment::entryModel($request->route('type')) ?: abort(404);
            $this->entry = $model->setEagerLoads([])->findOrFail($request->route('entry'));
            $this->model = $this->entry->comments();
            if ($request->route('type') == 'user') $this->comments = $this->entry->comments();
            else $this->comments = $this->entry->comments()->whereNull('parent_id');
            if ($request->route('parent_id', false)) {
                $this->comments = $this->model->where('identifier', $request->route('parent_id'));
                $this->model = $this->comments->firstOrFail()->children();
            }
            if ($request->route('type') == 'user') $this->model = false;
        } else if ($request->route('identifier', false)) $this->comment = Comment::where('identifier', $request->route('identifier'))->firstOrFail();
    }

    public function index(Request $request)
    {
        $total = $this->comments->count();
        $tree = $this->tree($this->comments->latest('created_at')->with('children', 'votes')->offset(((abs($request->page) ?: 1) - 1) * 10)->limit(10)->get(), 10, true);
        $paginated = new LengthAwarePaginator($tree, $total, 10);
        return response()->json($paginated);
    }

    public function tree($model = null, $depth = 10, $parent = false)
    {
        if ($depth <= 0) return true;
        return $model->map(function ($comment) use ($depth) {
            $comment->comments = $this->tree($comment->children, --$depth);
            return $comment;
        });
    }

    public function store(Request $request)
    {
        if (!$this->model) return abort(404);
        $request->validate([
            'content' => 'required|min:2|max:10000'
        ]);
        $identifier = strtolower(str_random(7));
        while (Comment::where('identifier', $identifier)->exists()) {
            $identifier = strtolower(str_random(7));
        }
        $comment = $this->model->create([
            'identifier' => $identifier,
            'user_id' => $request->user()->id,
            'type' => $request->route('type'),
            'entry' => $request->route('entry'),
            'content' => $request->content
        ]);

        $this->comment = $comment;

        $this->vote($request, $comment->identifier, 1);

        return response()->json($this->tree(Comment::where('identifier', $comment->identifier)->get()), 201);
    }

    public function update(Request $request)
    {
        if (!$this->comment->meta['owner']) abort(404);
        $request->validate([
            'content' => 'required|min:2|max:10000'
        ]);
        $this->comment->update([
            'content' => $request->content
        ]);

        return response()->json(array_merge(['message' => __('app.discussion.modified')], $this->comment->toArray()), 201);
    }

    public function destroy(Request $request)
    {
        if (!$this->comment->meta['owner']) abort(404);
        $this->comment->children()->delete();
        $this->comment->delete();
        return response()->json(['message' => __('app.discussion.deleted')], 200);
    }

    public function vote(Request $request, $identifier, $vote)
    {
        $model = $this->comment->votes()->where(['user_id' => $request->user()->id])->first();
        $undo = false;
        if ($model) {
            $undo = $model->vote == $vote;
            $model->delete();
        }
        if (!$undo) $this->comment->votes()->create(['user_id' => $request->user()->id, 'vote' => ($vote > 0 ? "1" : "-1")]);

        return response()->json(array_merge(['message' => __('app.discussion.voted')], $this->comment->toArray()), 200);
    }

    public function preview(Request $request)
    {
        return Parser::text($request->markdown); 
    }
}
