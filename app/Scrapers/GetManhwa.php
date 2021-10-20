<?php

namespace App\Scrapers;

class GetManhwa extends Madara
{
    public $domain = "https://getmanhwa.co";

    public function getMeta($crawler) {
        $meta = [];
        $crawler->filter('.post-content_item')->each(function ($node) use (&$meta) {
            if ($type = collect([
                '/creator/i' => 'artists',
                '/genre/i' => 'tags',
            ])->first(function ($value, $key) use ($node) {
                return preg_match($key, $node->text('', true));
            })) {
                $meta[$type] = $node->filter('a')->each(function ($link) {
                    return [
                        'name' => $link->text(),
                        'slug' => $this->slug($link->text())
                    ];
                });
            }
        });
        return $meta;
    }
}