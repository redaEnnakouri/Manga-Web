<?php

namespace App\Scrapers;

use Illuminate\Support\Str;
use Illuminate\Support\Arr;
use Carbon\Carbon;

class HentaiCafe extends Scraper
{
    public function getPageCount()
    {
        $crawler = $this->client->request('GET', 'https://hentai.cafe/');
        return $crawler->filter('.x-pagination a.last')->text(true);
    }

    public function getComics($page)
    {
        $crawler = $this->client->request('GET', "https://hentai.cafe/page/$page/");
        $comics = [];
        $crawler->filter('#x-iso-container article')->each(function ($node) use (&$comics) {
            $comics[] = [
                'link' => $node->filter('.entry-title a')->link()->getUri(),
                'title' => $node->filter('.entry-title a')->text(true)
            ];
        });
        return $comics;
    }

    public function getComic($link)
    {
        $crawler = $this->client->request('GET', $link);
        $comic = [];
        $cover = $crawler->filter('.content > .x-column')->first();
        if ($cover->filter('a')->count()) $comic['cover'] = $cover->filter('a')->link()->getUri();
        else $comic['cover'] = $this->wpImage($cover->filter('img')->image()->getUri());
        $comic['title'] = $crawler->filter('.content > .last')->filter('h3')->text(true);
        $comic['slug'] = $this->slug($comic['title']);
        $tags = [[
            'name' => 'Premium',
            'slug' => 'premium',
            'color' => '#ffbf00'
        ], [
            'name' => 'Uncensored',
            'slug' => 'uncensored'
        ], [
            'name' => 'Fakku',
            'slug' => 'fakku'
        ]];
        $artists = [];
        $crawler->filter('.content > .last > p a[rel=tag]')->each(function ($node) use (&$tags, &$artists) {
            $link = $node->link()->getUri();
            $tag = $this->processTag($node);
            if (Str::contains($link, 'tag')) $tags[] = $tag;
            else if (Str::contains($link, 'artist')) $artists[] = $tag;
        });
        $comic['tags'] = $tags;
        $comic['artists'] = $artists;
        $script_content = $this->client->click($crawler->filter('.content > .last > p .x-btn')->link())->filter('body script')->text();
        $images = [];
        if (preg_match('/var pages = (.*?);/', $script_content, $matches)) {
            $pages = json_decode($matches[1], true);
            foreach ($pages as $page) {
                $images[] = ['source' => $page['url']];
            }
        }
        $comic['images'] = $images;
        try {
            $comic['uploaded_at'] = Carbon::parse($pages[0]['created'])->toDateTimeString();
        } catch (\Exception $e) {
            $comic['uploaded_at'] = Carbon::now()->toDateTimeString();
        }
        return $comic;
    }

    public function processTag($node, $array = []) {
        $value = $node->text(true);
        $array['name'] = Str::title($value);
        $array['slug'] = $this->slug($array['name']);
        return $array;
    }
}
