<?php

namespace App\Scrapers;

use Symfony\Component\DomCrawler\Crawler;
use Illuminate\Support\Facades\DB;
use GuzzleHttp\Client;
use App\Models\Comic;
use Carbon\Carbon;

class Madara extends Scraper
{
    public $has_chapters = true;
    protected $ajax_class = ".col-12";

    public function getPageCount()
    {
        return 1;
    }

    public function getComics($page)
    {
        $client = new Client();
        $crawler = new Crawler((string) $client->request('POST', "{$this->domain}/wp-admin/admin-ajax.php", [
            'form_params' => [
                'action' => 'madara_load_more',
                'template' => 'madara-core/content/content-archive',
                'vars' => [
                    'posts_per_page' => 1000000,
                    'orderby' => 'meta_value_num',
                    'order' => 'desc',
                    'meta_key' => '_latest_update',
                    'post_type' => 'wp-manga'
                ]
            ]
        ])->getBody());

        $comics = [];
        $crawler->filter($this->ajax_class)->each(function ($node) use (&$comics) {
            $comics[] = [
                'link' => $node->filter('.post-title a')->last()->link()->getUri(),
                'title' => $node->filter('.post-title a')->last()->text(),
                'latest_chapter' => $this->parseChapter($node->filter('.chapter a')->text('', true))
            ];
        });
        return array_reverse($comics);
    }

    public function getComic($link)
    {
        $crawler = $this->client->request('GET', $link);
        $json_ld = $this->jsonLd($crawler);
        $comic = [];
        try {
            $comic['cover'] = $this->wpImage($crawler->filter('meta[property="og:image"]')->attr('content'), false);
        } catch (\Exception $e) {
            $comic['cover'] = $this->wpImage($crawler->filter('.summary_image img')->attr('data-src'), false);
        }
        $title_node = $crawler->filter('.post-title > *');
        $comic['title'] = iconv('UTF-8', 'ASCII//TRANSLIT', html_entity_decode($json_ld->headline ?? $this->removeChildren($title_node)->text(null, true), ENT_QUOTES));
        $comic['slug'] = $this->slug($comic['title']);
        $comic['description'] = $crawler->filter('.summary__content p')->text('', true);
        $comic = array_merge($comic, $this->getMeta($crawler));
        try {
            $comic['uploaded_at'] = Carbon::parse($json_ld->datePublished ?? $json_ld->{'@graph'}[3]->datePublished)->toDateTimeString();
        } catch (\Exception $e) {
            $comic['uploaded_at'] = Carbon::now()->toDateTimeString();
        }
        return $comic;
    }

    public function getChapters($link) {
        $crawler = $this->client->request('GET', $link);
        $all_chapters = [];
        if ($crawler->filter('#manga-chapters-holder')->count()) {
            $crawler = $this->client->request('POST', "{$this->domain}/wp-admin/admin-ajax.php", [
                'action' => 'manga_get_chapters',
                'manga' => $crawler->filter('#manga-chapters-holder')->attr('data-id')
            ]);
        }
        $crawler->filter('.version-chap .wp-manga-chapter')->each(function ($node) use (&$all_chapters) {
            try {
                $added_at = Carbon::parse($node->filter('.chapter-release-date i')->text())->toDateTimeString();
            } catch (\Exception $e) {
                $added_at = Carbon::now()->toDateTimeString();
            }
            $all_chapters[] = [
                'name' => $node->filter('a')->text('', true),
                'link' => $node->filter('a')->link()->getUri(),
                'added_at' => $added_at
            ];
        });

        return $all_chapters;
    }

    public function getChapter($details) {
        $chapter = $this->parseChapter($details['name']);
        $chapter['name'] = null;
        $chapter['added_at'] = $details['added_at'];
        $crawler = $this->client->request('GET', $details['link']);
        $images = [];
        $crawler->filter('.reading-content .page-break')->each(function ($node) use (&$images) {
            $source = $this->normalize($node->filter('img')->attr('data-src') ?? $node->filter('img')->attr('src'));
            $images[] = [
                'source' => $source
            ];
        });
        $chapter['images'] = $images;
        return $chapter;
    }

    public function getMeta($crawler) {
        $meta = [];
        $crawler->filter('.post-content_item')->each(function ($node) use (&$meta) {
            if ($type = collect([
                '/artist|creator/i' => 'artists',
                '/author/i' => 'authors',
                '/genre/i' => 'tags',
                '/status/i' => 'status',
                '/alternative|alt/i' => 'alternative_title'
                ])->first(function ($value, $key) use ($node) {
                return preg_match($key, $node->filter('.summary-heading')->text('', true));
            })) {
                $text = $node->filter('.summary-content')->text('', true);
                if (preg_match('/updating|N\/A/i', $text)) return;
                if (in_array($type, ['alternative_title'])) $meta[$type] = $text;
                else if ($type == 'status') $meta[$type] = $this->mapStatuses($text);
                else $meta[$type] = $node->filter('.summary-content a')->each(function ($link) {
                    return [
                        'name' => $link->text(),
                        'slug' => $this->slug($link->text())
                    ];
                });
            }
        });
        return $meta;
    }

    public function mapStatuses($status) {
        return collect([
            '/complete/i' => 'complete',
            '/going/i' => 'ongoing',
            '/canceled/i' => 'canceled',
            '/hold/i' => 'onhold'
        ])->first(function ($value, $key) use ($status) {
            return preg_match($key, $status);
        });
    }

    public function hasNewChapters($comic, $options = []) {
        if (DB::table('scraper')->where('link', $comic['link'])->exists()) return false;
        if (!in_array('fresh', $options)) {
            $result = Comic::where('title', $comic['title'])->first();
            if ($result) return !$result->chapters()->where('original', $comic['latest_chapter']['original'])->exists();
        }
        return true;
    }
}
