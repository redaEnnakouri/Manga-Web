<?php

namespace App\Http\Controllers;

use App\Models\Comic;
use App\Models\Artist;
use App\Models\Author;
use App\Models\Character;
use App\Models\Referrer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RecommendationsController extends Controller
{
    private $model;
    private $entry;

    public function __construct(Request $request)
    {
        $this->model = $this->getModel();
        $this->limit = (($request->per_page > 0 && $request->per_page < 100) ? $request->per_page : 10);
        $this->entry = $this->model::select('id')->setEagerLoads([])->findOrFail($request->route('entry'));
    }

    public function getModel($type = null)
    {
        if (!$type) $type = request()->route('type');
        return $models = [
            'comic' => Comic::class,
            'artist' => Artist::class,
            'author' => Author::class,
            'character' => Character::class
        ][$type] ?? abort(404);
    }

    public function index(Request $request, $type)
    {
        $referrers = Referrer::select('to')->where('type', $request->route('type'))->where('from', $this->entry->id)->orderBy('count')->limit($this->limit)->pluck('to');
        if ($referrers->count() < $this->limit) {
            $tagged = $this->model::where((new $this->model)->getQualifiedKeyName(), '!=', $this->entry->id);
            if ($type == 'comic') $tagged->select('comics.id')->filter('comic_tags', 'comic_id', 'tag_id', $this->entry->tags()->limit($this->limit)->pluck('tags.id')->toArray(), false);
            $tagged = $tagged->limit($this->limit - $referrers->count())->pluck((new $this->model)->getQualifiedKeyName());
        } else $tagged = [];
        $ids = $referrers->merge($tagged);
        $response = $this->model::query();
        if ($ids->isNotEmpty()) $response->whereIn((new $this->model)->getQualifiedKeyName(), $ids->toArray())->orderBy(DB::raw(str_replace('?', $ids->implode(', '), 'field(comics.id, ?)')), 'desc');
        return response()->json($response->limit($this->limit)->get());
    }
}
