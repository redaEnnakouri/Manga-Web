<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;
use Carbon\CarbonImmutable;

class SitemapController extends Controller
{
    public $per_page = 20000;
    public $languages;
    public $now;

    function __construct() {
        ini_set('memory_limit','2048M');

        $this->now = CarbonImmutable::now()->tz('UTC')->toAtomString();
        $this->languages = collect(config('app.available_languages'));
    }

    public function languages(Request $request)
    {
        $languages = $this->languages->map(function ($details, $language) {
            return [
                'loc' => route("sitemap.index", ['language' => $language]),
                'lastmod' => $this->now
            ];
        });

        return response()->view('sitemap.index', [
            'map' => $languages
        ])->header('Content-Type', 'text/xml');
    }

    public function index(Request $request, $language)
    {
        if (!$this->languages->has($language)) abort(404);
        $indexes = [];
        $indexes['main'] = [[
            'loc' => route("sitemap.main", ['language' => $language]),
            'lastmod' => $this->now
        ]];
        $indexes['comics'] = $this->pages('comics', \App\Models\Comic::class, $language);
        if (in_array('tags', config('site.features'))) $indexes['tags'] = $this->pages('tags', \App\Models\Tag::class, $language);
        if (in_array('characters', config('site.features'))) $indexes['characters'] = $this->pages('characters', \App\Models\Character::class, $language);
        if (in_array('groups', config('site.features'))) $indexes['groups'] = $this->pages('groups', \App\Models\Group::class, $language);
        if (in_array('parodies', config('site.features'))) $indexes['parodies'] = $this->pages('parodies', \App\Models\Parody::class, $language);
        if (in_array('relationships', config('site.features'))) $indexes['relationships'] = $this->pages('relationships', \App\Models\Relationship::class, $language);
        if (in_array('authors', config('site.features'))) $indexes['authors'] = $this->pages('authors', \App\Models\Author::class, $language);
        if (in_array('artists', config('site.features'))) $indexes['artists'] = $this->pages('artists', \App\Models\Artist::class, $language);

        return response()->view('sitemap.index', [
            'map' => collect($indexes)->flatten(1)
        ])->header('Content-Type', 'text/xml');
    }
    public function pages($name, $class, $language)
    {
        if (!$this->languages->has($language)) abort(404);
        $pages = intval(ceil($class::count() / $this->per_page));
        return collect(range(1, $pages))->map(function ($page) use ($language, $name) {
            if (Cache::has($name.'-'.$language.'-'.$page)) $updated = Cache::get($name.'-'.$language.'-'.$page)['updated_at'];
            return [
                'loc' => route("sitemap.$name", ['page' => $page, 'language' => $language]),
                'lastmod' => $updated ?? $this->now
            ];
        });
    }
    public function main(Request $request, $language)
    {
        if (!$this->languages->has($language)) abort(404);

        $index = [
            [
                'loc' => url(implode('/', [$language])),
                'lastmod' => $this->now,
                'changefreq' => 'daily',
                'priority' => '1'
            ],
            [
                'loc' => url(implode('/', [$language, 'register'])),
                'lastmod' => $this->now,
                'changefreq' => 'monthly',
                'priority' => '0.8'
            ],
            [
                'loc' => url(implode('/', [$language, 'login'])),
                'lastmod' => $this->now,
                'changefreq' => 'monthly',
                'priority' => '0.8'
            ],
            [
                'loc' => url(implode('/', [$language, 'latest'])),
                'lastmod' => $this->now,
                'changefreq' => 'hourly',
                'priority' => '1'
            ],
            [
                'loc' => url(implode('/', [$language, 'tags'])),
                'lastmod' => $this->now,
                'changefreq' => 'hourly',
                'priority' => '1'
            ],
            [
                'loc' => url(implode('/', [$language, 'groups'])),
                'lastmod' => $this->now,
                'changefreq' => 'hourly',
                'priority' => '1'
            ],
            [
                'loc' => url(implode('/', [$language, 'parodies'])),
                'lastmod' => $this->now,
                'changefreq' => 'hourly',
                'priority' => '1'
            ],
            [
                'loc' => url(implode('/', [$language, 'characters'])),
                'lastmod' => $this->now,
                'changefreq' => 'hourly',
                'priority' => '1'
            ],
            [
                'loc' => url(implode('/', [$language, 'artists'])),
                'lastmod' => $this->now,
                'changefreq' => 'hourly',
                'priority' => '1'
            ],
            [
                'loc' => url(implode('/', [$language, 'authors'])),
                'lastmod' => $this->now,
                'changefreq' => 'hourly',
                'priority' => '1'
            ],
            [
                'loc' => url(implode('/', [$language, 'relationships'])),
                'lastmod' => $this->now,
                'changefreq' => 'hourly',
                'priority' => '1'
            ],

        ];
        
        if ($language == 'en') {
            $index = [
                [
                    'loc' => url('/'),
                    'lastmod' => $this->now,
                    'changefreq' => 'daily',
                    'priority' => '1'
                ],
                [
                    'loc' => url('/en'),
                    'lastmod' => $this->now,
                    'changefreq' => 'daily',
                    'priority' => '1'
                ]
            ] + $index;
        }

        return response()->view('sitemap.urls', [
            'index' => $index
        ])->header('Content-Type', 'text/xml');
    }
    public function comics(Request $request, $language, $page)
    {
        return $this->generate('comics', in_array('webtoons', config('site.features')) ? 'webtoon' : 'comic', \App\Models\Comic::class, $language, $page);
    }
    public function tags(Request $request, $language, $page)
    {
        return $this->generate('tags', 'tag', \App\Models\Tag::class, $language, $page, 'weekly');
    }
    public function characters(Request $request, $language, $page)
    {
        return $this->generate('characters', 'character', \App\Models\Character::class, $language, $page, 'weekly');
    }
    public function artists(Request $request, $language, $page)
    {
        return $this->generate('artists', 'artist', \App\Models\Artist::class, $language, $page, 'weekly');
    }
    public function authors(Request $request, $language, $page)
    {
        return $this->generate('authors', 'author', \App\Models\Author::class, $language, $page, 'weekly');
    }
    public function groups(Request $request, $language, $page)
    {
        return $this->generate('groups', 'group', \App\Models\Group::class, $language, $page, 'weekly');
    }
    public function parodies(Request $request, $language, $page)
    {
        return $this->generate('parodies', 'parody', \App\Models\Parody::class, $language, $page, 'weekly');
    }
    public function relationships(Request $request, $language, $page)
    {
        return $this->generate('relationships', 'relationship', \App\Models\Relationship::class, $language, $page, 'weekly');
    }
    public function generate($name, $route, $class, $language, $page, $frequence = 'monthly')
    {
        if (!$this->languages->has($language)) abort(404);
        if (Cache::has($name.'-'.$language.'-'.$page)) {
            $index = Cache::get($name.'-'.$language.'-'.$page)['index'];
        } else {
            $items = $class::offset($this->per_page * ($page - 1))->limit($this->per_page)->get();
            $index = $items->map(function ($item) use ($language, $route, $frequence) {
                return [
                    'loc' => url(implode('/', [$language, $route, $item->slug])),
                    'lastmod' => $item->updated_at->tz('UTC')->toAtomString(),
                    'changefreq' => $frequence,
                    'priority' => '0.9'
                ];
            });
            if (count($index) == $this->per_page) {
                Cache::put($name.'-'.$language.'-'.$page, [
                    'index' => $index,
                    'updated_at' => $this->now
                ]);
            }
        }

        return response()->view('sitemap.urls', [
            'index' => $index
        ])->header('Content-Type', 'text/xml');
    }
}
