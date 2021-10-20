<?php

namespace App\Http\Controllers;

use App\Models\Comic;
use App\Models\Session;
use App\Models\Referrer;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Session\Middleware\StartSession;

class ComicController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api','admin'])->only(['store', 'update', 'destroy', 'delete_chapter']);
        $this->middleware('auth:api')->only('download', 'favorite');
        $this->middleware(StartSession::class)->only('show');
    }

    public function index(Request $request)
    {
        $comics = Comic::query();
        if ($request->has('with') && count(array_diff(explode(',', $request->with), ['parodies', 'tags', 'artists', 'authors', 'groups', 'characters', 'relationships'])) == 0)
            $comics->with(explode(',', $request->with));
        if ($request->has('sort')) {
            $order = (in_array($request->order, ['desc', 'asc']) ? $request->order : 'desc');
            if (in_array($request->sort, ['title', 'pages', 'uploaded_at', 'favorites'])) {
                $comics->orderBy($request->sort, $order);
            } elseif ($request->sort == 'popularity') {
                $duration = (in_array($request->duration, ['day', 'week', 'month', 'year', 'all']) ? $request->duration : 'day');
                if ($duration != 'all') $comics->whereDate(config('site.id') !== 'readmanhwa' ? 'uploaded_at' : 'updated_at', '>=', date("Y-m-d", strtotime(($duration === 'day' ? '-2' : '-1')." $duration")));
                $comics->orderBy('visits', $order);
            }
        }
        if ($request->filled('languages'))
            $comics->whereIn('language_id', Arr::wrap($request->languages));
        if ($request->filled('categories'))
            $comics->whereIn('category_id', Arr::wrap($request->categories));
        if ($request->filled('users'))
            $comics->filter('favorites', 'entry', 'user_id', $request->users)->where('favorites.type', 'comic');
        if ($request->filled('characters'))
            $comics->filter('comic_characters', 'comic_id', 'character_id', $request->characters);
        if ($request->filled('artists'))
            $comics->filter('comic_artists', 'comic_id', 'artist_id', $request->artists);
        if ($request->filled('authors'))
            $comics->filter('comic_authors', 'comic_id', 'author_id', $request->authors);
        if ($request->filled('tags'))
            $comics->filter('comic_tags', 'comic_id', 'tag_id', $request->tags);
        if ($request->filled('parodies'))
            $comics->filter('comic_parodies', 'comic_id', 'parody_id', $request->parodies);
        if ($request->filled('relationships'))
            $comics->filter('comic_relationships', 'comic_id', 'relationship_id', $request->relationships);
        if ($request->filled('groups'))
            $comics->filter('comic_groups', 'comic_id', 'group_id', $request->groups);
        if ($request->filled('attributes')) {
            $attributes = array_intersect(Arr::wrap($request->input('attributes')), ['translated', 'speechless', 'rewritten']);
            if (count($attributes)) {
                $comics->where(function ($query) use ($attributes) {
                    foreach ($attributes as $i => $attribute) {
                        if ($i == 0) $query->where($attribute, true);
                        else $query->orWhere($attribute, true);
                    }
                });
            }
        }
        if ($request->filled('statuses'))
            $comics->whereIn('status', Arr::wrap($request->statuses));
        if ($request->filled('q'))
            $comics->simpleSearch($request->q);
        $limit = (($request->per_page > 0 && $request->per_page < 100) ? $request->per_page : 18);
        if ($request->has('discover'))
            $response = $comics->random($limit)->limit($limit)->get();
        else if ($request->has('latest'))
            $response = $comics->limit($limit)->orderBy('uploaded_at', 'desc')->get();
        else $response = $comics->paginate($limit);
        return response()->json($response);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'slug' => [
                'required',
                Rule::unique('comics'),
            ],
            'alternative_title' => 'nullable',
            'description' => 'nullable',
            'image' => [
                function ($attribute, $value, $fail) {
                    if (!empty($value) && !file_exists(storage_path('app/temp/'.$value))) {
                        $fail("The $attribute wasn't uploaded successfully");
                    }
                }
            ],
            'category_id' => 'nullable|exists:categories,id',
            'language_id' => 'nullable|exists:languages,id',
            'rewritten' => 'boolean',
            'speechless' => 'boolean',
            'translated' => 'boolean',
            'tags.*' => 'required|exists:tags,id',
            'authors.*' => 'required|exists:authors,id',
            'artists.*' => 'required|exists:artists,id',
            'characters.*' => 'required|exists:characters,id',
            'parodies.*' => 'required|exists:parodies,id',
            'relationships.*' => 'required|exists:relationships,id',
            'groups.*' => 'required|exists:groups,id',
            'status' => 'nullable|in:ongoing,complete,onhold,canceled',
            'uploaded_at' => 'required|date',
            'sources.*.link' => 'required',
            'sources.*.disabled' => 'boolean'
        ]);
        $comic = Comic::create($request->all());
        if (!empty($request->image)) {
            File::move(storage_path('app/temp/'.$request->image), storage_path('app/public/comics/'.$comic->id.'.jpg'));
            $comic->image = $comic->id.'.jpg';
            $comic->save();
            optimize('comics/'.$comic->image, 'comics/thumbs/'.$comic->image);
        }

        $comic->authors()->attach($request->authors);
        $comic->artists()->attach($request->artists);
        $comic->characters()->attach($request->characters);
        $comic->tags()->attach($request->tags);  $comic->relationships()->attach($request->relationships);
        $comic->parodies()->attach($request->parodies);    $comic->groups()->attach($request->groups);

        foreach ($request->sources as $source) {
            $comic->sources()->create(['link' => $source['link'], 'disabled' => $source['disabled']]);
        }

        return response()->json([
            'message' => __('admin.added_successfully')
        ], 201);
    }

    public function redirect($id) {
        //Get link code
        $linkcode = Comic::where('linkcode', $id);
        if (!$linkcode->get()->isEmpty()) {
            $comic = $linkcode->first();
        } else {
            $comic = Comic::find($id);
        }
        if (!$comic) return redirect('404');
        return redirect()->route('comic', ['locale' => app()->getLocale(), 'slug' => $comic->slug]);
    }

    public function show(Request $request, $slug)
    {
        $defaults = ['parodies', 'tags', 'artists', 'authors', 'groups', 'characters', 'language', 'category', 'relationships'];
        $query = Comic::whereSlug($slug);
        if (!array_diff(explode(',', $request->with), ['parodies', 'tags', 'artists', 'authors', 'groups', 'characters', 'language', 'category', 'images', 'relationships', 'chapters', 'sources'])) $query->with(array_merge($defaults, explode(',', $request->with)));
        else $query->with($defaults);
        $comic = $query->firstOrFail()->append(['favorited', 'downloadable', 'first_chapter', 'meta_description']);
        $last_comic = $request->session()->get('last_comic');
        if (!$last_comic || $last_comic != $comic->id) {
            $comic->timestamps = false;
            $comic->increment('visits');
            Session::firstOrCreate([
                'type' => 'comic',
                'date' => date('Y-m-d'),
                'entry' => $comic->id
            ], [
                'visits' => 0
            ])->increment('visits');
        }
        if ($last_comic && $last_comic != $comic->id) {
            Referrer::firstOrCreate([
                'type' => 'comic',
                'from' => $last_comic,
                'to' => $comic->id
            ], [
                'count' => 0
            ])->increment('count');
        }
        $request->session()->put('last_comic', $comic->id);
        return response()->json($comic);
    }

    public function chapters(Request $request, $slug)
    {
        $comic = Comic::whereSlug($slug)->setEagerLoads([])->firstOrFail();
        return response()->json($comic->chapters()->latest('id')->get());
    }

    public function images(Request $request, $comic_slug, $chapter_slug = null)
    {
        $comic = Comic::whereSlug($comic_slug)->setEagerLoads([])->with('tags:slug')->firstOrFail()->setAppends([]);
        if ($comic->premium && !auth('api')->user()) abort(401);
        $chapter = null;
        $next_chapter = null;
        if ($chapter_slug) {
            $chapter = $comic->chapters()->whereSlug($chapter_slug)->firstOrFail();
            if ($user = auth('api')->user()) $chapter->readers()->firstOrCreate([
                'user_id' => $user->id
            ]);
            $next_chapter = $comic->chapters()->where('id', '>', $chapter->id)->oldest('id')->first();
        }        
        return response()->json([
            'comic' => $comic,
            'chapter' => $chapter,
            'next_chapter' => $next_chapter,
            'images' => ($chapter_slug ? $chapter->images() : $comic->images())->get()->makeHidden(['chapter'])
        ]);
    }

    public function favorite(Request $request, $slug) {
        $comic = Comic::whereSlug($slug)->firstOrFail()->append('favorited');
        $user_id = auth('api')->user()->id;
        if ($comic->favorited) {
            $comic->favorites()->detach($user_id);
        } else {
            $comic->favorites()->attach($user_id, ['type' => 'comic']);
        }
        return response()->json([
            'favorited' => $comic->favorited,
            'favorites' => $comic->favorites()->count()
        ]);
    }

    public function download(Request $request, $slug) {
        $comic = Comic::whereSlug($slug)->firstOrFail();
        if (!$comic->downloadable) abort(400);
        $zip = md5($comic->id).'.zip';
        $directory = Storage::disk(getstoragedisk())->path("images/$comic->id");
        $destination = Storage::disk(getstoragedisk())->path("archives/$zip");
        exec("zip -qrj -0 $destination $directory", $output, $failed);
        if ($failed) abort(400, 'Server failed to generate the ZIP file.');
        return response()->json([
            'download_url' => Storage::disk(getstoragedisk())->url("archives/$zip")
        ]);
    }

    public function update(Request $request, Comic $comic)
    {
        $request->validate([
            'title' => 'required',
            'slug' => [
                'required',
                Rule::unique('comics')->ignore($comic->id),
            ],
            'alternative_title' => 'nullable',
            'description' => 'nullable',
            'image' => [
                function ($attribute, $value, $fail) {
                    if (!empty($value) && !file_exists(storage_path('app/temp/'.$value))) {
                        $fail("The $attribute wasn't uploaded successfully");
                    }
                }
            ],
            'category_id' => 'nullable|exists:categories,id',
            'language_id' => 'nullable|exists:languages,id',
            'rewritten' => 'boolean',
            'speechless' => 'boolean',
            'translated' => 'boolean',
            'tags.*' => 'required|exists:tags,id',
            'authors.*' => 'required|exists:authors,id',
            'artists.*' => 'required|exists:artists,id',
            'characters.*' => 'required|exists:characters,id',
            'parodies.*' => 'required|exists:parodies,id',
            'relationships.*' => 'required|exists:relationships,id',
            'groups.*' => 'required|exists:groups,id',
            'status' => 'nullable|in:ongoing,complete,onhold,canceled',
            'uploaded_at' => 'required|date',
            'sources.*.link' => 'required',
            'sources.*.disabled' => 'boolean'
        ]);
        $comic->update($request->all());
        if (!empty($request->image)) {
            File::move(storage_path('app/temp/'.$request->image), storage_path('app/public/comics/'.$comic->id.'.jpg'));
            $comic->image = $comic->id.'.jpg';
            $comic->save();
            optimize('comics/'.$comic->image, 'comics/thumbs/'.$comic->image);
        }

        $comic->authors()->sync($request->authors);
        $comic->artists()->sync($request->artists);
        $comic->characters()->sync($request->characters);
        $comic->tags()->sync($request->tags);  $comic->relationships()->sync($request->relationships);
        $comic->parodies()->sync($request->parodies);    $comic->groups()->sync($request->groups);

        foreach ($request->sources as $source) {
            $comic->sources()->updateOrCreate(['link' => $source['link']],['disabled' => $source['disabled']]);
        }

        return response()->json([
            'message' => __('admin.updated_successfully')
        ], 201);
    }

    public function destroy(Comic $comic)
    {
        $comic->delete();
        return response()->json([
            'message' => __('admin.deleted_successfully')
        ], 201);
    }

    public function delete_chapter(Comic $comic, $chapter)
    {
        $comic->chapters()->where('id', $chapter)->delete();
        return response()->json([
            'message' => __('admin.deleted_successfully')
        ], 201);
    }
}
