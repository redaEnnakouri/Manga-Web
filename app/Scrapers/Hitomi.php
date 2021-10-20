<?php

namespace App\Scrapers;

use Symfony\Component\Process\Process;
use Illuminate\Support\Str;
use Carbon\Carbon;

class Hitomi extends Scraper
{
    private $backend = 'https://ltn.hitomi.la';
    private $frontend = 'https://hitomi.la';
    private $assets = 'a.hitomi.la';

    public function getPageCount($tries = 3)
    {
        $process = new Process(['node', dirname(__FILE__).'/js/nozomi.js', $this->backend.'/index-all.nozomi']);
        $process->run();

        return json_decode($process->getOutput())->pages;
    }

    public function getComics($page)
    {
        $process = new Process(['node', dirname(__FILE__).'/js/nozomi.js', "{$this->backend}/index-all.nozomi", $page]);
        $process->run();

        return array_map(function ($id) {
            $crawler = $this->client->request('GET', "{$this->backend}/galleryblock/$id.html");
            return [
                'link' => $this->frontend.$crawler->filter('h1 a')->attr('href'),
                'title' => $crawler->filter('h1 a')->text(true)
            ];
        }, json_decode($process->getOutput())->galleries);
    }

    public function getComic($link)
    {
        $crawler = $this->client->request('GET', $this->safe_urlencode($link));
        $id = $this->extractVar($crawler->filter('head script')->text(), 'galleryid');

        if ($crawler->filter('.anime-gallery')->count()) throw new \Exception("Anime isn't supported yet.");
        $comic = [];
        $comic['cover'] = $crawler->filter('.content .cover-column .cover img')->image()->getUri();
        $comic['title'] = $crawler->filter('.gallery h1 a')->text(true);
        $comic['slug'] = $this->slug($comic['title']);
        $artists = [];
        $crawler->filter('.gallery h2 ul > li')->each(function ($node) use (&$artists) {
            $artists[] = $this->processTag($node->filter('a'));
        });
        $comic['artists'] = $artists;
        $groups = [];
        $crawler->filter('.gallery-info table tr')->eq(0)->filter('ul li')->each(function ($node) use (&$groups) {
            $groups[] = $this->processTag($node->filter('a'));
        });
        $comic['groups'] = $groups;
        $parodies = [];
        $crawler->filter('.gallery-info table tr')->eq(3)->filter('ul li')->each(function ($node) use (&$parodies) {
            $parodies[] = $this->processTag($node->filter('a'));
        });
        $comic['parodies'] = $parodies;
        $characters = [];
        $crawler->filter('.gallery-info table tr')->eq(4)->filter('ul li')->each(function ($node) use (&$characters) {
            $characters[] = $this->processTag($node->filter('a'));
        });
        $comic['characters'] = $characters;
        $tags = [];
        $crawler->filter('.gallery-info table tr')->eq(5)->filter('ul li')->each(function ($node) use (&$tags) {
            $tags[] = $this->processTag($node->filter('a'));
        });
        $comic['tags'] = $tags;

        if ($category = $crawler->filter('.gallery-info table tr')->eq(1)->filter('a'))
            $comic['category'] = $this->processTag($category);
        $language = $crawler->filter('.gallery-info table tr')->eq(2)->filter('a');
        if ($language->count()) {
            $comic['language']['name'] = Str::title(explode('-', $language->attr('href'))[1]);
            $comic['language']['slug'] = $this->slug($comic['language']['name']);
        }
        try {
            $comic['uploaded_at'] = Carbon::parse($crawler->filter('.gallery-info .date')->text(true))->toDateTimeString();
        } catch (\Exception $e) {
            $comic['uploaded_at'] = Carbon::now()->toDateTimeString();
        }
        $context = stream_context_create([
            'http' => [
                'header' => "referer: $link\r\n"
            ]
        ]);
        $comic['images'] = array_map(function ($image) use ($context) {
            $path = preg_replace('/^.*(..)(.)$/', ($image['haswebp'] ? '/webp' : '/images').'/$2/$1/'.$image['hash'], $image['hash']);
            $ext = $image['haswebp'] ? 'webp' : Str::afterLast($image['name'], '.');
            $frontends = 3;
            preg_match('/\/[0-9a-f]\/([0-9a-f]{2})\//', $path, $matches);
            $r = intval($matches[1], 16);
            if ($r < 48) $frontends = 2;
            if ($r < 9) $r = 1;
            $o = $r % $frontends;
            $domain = chr(97 + $o).$this->assets;
            return [
                'source' => "https://{$domain}{$path}.{$ext}",
                'context' => $context
            ];
        }, json_decode($this->extractVar(file_get_contents("{$this->backend}/galleries/$id.js"), 'galleryinfo', true), true)['files']);
        return $comic;
    }

    public function processTag($node, $array = []) {
        $this->removeChildren($node);
        $array['name'] = Str::title($node->text(true));
        $array['slug'] = $this->slug($array['name']);
        return $array;
    }
}
