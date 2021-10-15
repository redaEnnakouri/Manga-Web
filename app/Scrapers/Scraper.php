<?php

namespace App\Scrapers;

use Symfony\Component\DomCrawler\Crawler;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Arr;
use App\Models\ComicSource;
use App\Models\Comic;
use Goutte\Client;

class Scraper
{
    protected $user_agents = [
        "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36", 
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0", 
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246", 
        "Mozilla/5.0 (X11; CrOS x86_64 8172.45.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.64 Safari/537.36", 
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9", 
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36", 
        "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1"
    ];
    protected $proxies;
    public $user_agent;
    public $proxy;
    public $client;
    public $has_chapters = false;

    public function __construct()
    {
        $this->client = new Client();
        $this->proxies = json_decode(file_get_contents(config_path('proxies.json')), true);
        $this->setCrawler();
    }

    public function name() {
        return Str::snake(class_basename(get_class($this)));
    }

    static function switch($scraper) {
        app()->singleton(Scraper::class, function ($app) use ($scraper) {
            $class = 'App\Scrapers\\'.Str::studly($scraper);
            return new $class();
        });
    }

    public function setCrawler()
    {
        $this->proxy = Arr::random($this->proxies);
        if (!app()->environment('local')) $this->client->setClient(new \GuzzleHttp\Client(['proxy' => $this->proxy]));
        $this->user_agent = Arr::random($this->user_agents);
        $this->client->setHeader('user-agent', $this->user_agent);
    }

    public function getIP()
    {
        $crawler = $this->client->request('GET', 'http://requestbin.net/ip');
        return $crawler->getBody();
    }

    public function getUA()
    {
        $crawler = $this->client->request('GET', 'https://www.whatismybrowser.com/detect/what-is-my-user-agent');
        return $crawler->filter('#detected_value a')->text();
    }

    public function slug($name) {
        $slug = Str::slug($name);
        if (empty($slug)) return rand(10000, 99999);
        return $slug;
    }

    public function wpImage($uri, $sizes = true) {
        return preg_replace('/i\d+\.wp\.com\//', '', preg_replace('/(\?.*)?/', '', preg_replace($sizes ? '/-\d+[Xx]\d+\./' : '/\./', '.', $uri)));
    }

    public function jsonLd($crawler) {
        return json_decode($crawler->filter('script[type="application/ld+json"]')->last()->text('', true));
    }

    public function extractVar($script, $var, $no_ending = false) {
        if (preg_match($no_ending ? "/var $var = ([\s\S]*)/" : "/var $var = (.*?);/", $script, $matches)) return $matches[1];
        return null;
    }

    public function parseChapter($text) {
        $chapter['original'] = $text;
        preg_match('/ch[^0-9]+(\d+)(.5)?/i', $text, $numbers);
        $chapter['meta']['chapter'] = isset($numbers[1]) ? intval($numbers[1]) : null;
        $chapter['meta']['end'] = !!preg_match('/\bend\b/i', $text);
        $chapter['meta']['sidestory'] = null;
        $chapter['meta']['season'] = null;
        if (isset($numbers[2])) {
            $chapter['meta']['sidestory'] = 1;
        } else if (preg_match('/(?:Side|SS)[^0-9]+(\d+)/', $text, $sidestories)) {
            $chapter['meta']['sidestory'] = $sidestories[1];
        }
        if (preg_match('/\bS\d+\b/', $text, $seasons)) {
            $chapter['meta']['season'] = $seasons[0];
        }
        $chapter['meta']['prologue'] = $chapter['meta']['chapter'] === '0' || preg_match('/\bprologue\b/i', $text);
        $chapter['meta']['epilogue'] = !!preg_match('/\bepilogue\b/i', $text);
        return $chapter;
    }

    public function isDuplicate($comic, $options = [], &$duplicates = 0) {
        if ($scraper = DB::table('scraper')->where('link', $comic['link'])->first()){
            if ($scraper->status !== 'failed') return true;
            DB::table('scraper')->delete($scraper->id);
        }
        if (in_array('new', $options) && ComicSource::whereLink($comic['link'])->exists()) {
            $duplicates++;
            return true;
        }
        return false;
    }

    public function removeChildren(&$node) {
        $node->children()->each(function (Crawler $crawler) {
            $crawler->getNode(0)->parentNode->removeChild($crawler->getNode(0));
        });
        return $node;
    }

    public function normalize($text) {
        return trim(preg_replace('/(?:\s{2,}+|[^\S ])/', ' ', $text));
    }

    public function safe_urlencode($url){
        return preg_replace_callback("/[^-\._~:\/\?#\\[\\]@!\$&'\(\)\*\+,;=]+/", function ($match) {
            return rawurlencode($match[0]);
        }, $url);
    }
}
