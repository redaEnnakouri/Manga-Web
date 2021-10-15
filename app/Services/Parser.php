<?php

namespace App\Services;

use Parsedown;
use App\Models\User;

class Parser extends Parsedown 
{
    private $parser;

    public function __construct()
    {
        $this->setSafeMode(true)->setBreaksEnabled(true);
        $this->InlineTypes['@'][] = 'Mention';
        $this->inlineMarkerList .= '@';

        $this->InlineTypes['['][] = 'Embeding';
        $this->inlineMarkerList .= '[';
    }

    protected function inlineMention($Excerpt)
    {
        if (preg_match('/^@([^\s]+)/', $Excerpt['text'], $matches)) {
            if (User::where('username', $matches[1])->count()) {
                return [
                    'extent' => strlen($matches[0]),
                    'element' => [
                        'name' => 'a',
                        'text' => '@' . $matches[1],
                        'attributes' => ['href' => url('profile/'.$matches[1])]
                    ],
                ];
            }
        }
        return null;
    }

    protected function inlineLink($Excerpt)
    {
        $link = parent::inlineLink($Excerpt);
        if (!$link) return;
        $attributes = $link['element']['attributes'];
        $url = $attributes['href'];
        if (!strpos($url, '://') && (($url[ 0 ] == '/' && $url[ 1 ] != '/') || $url[ 0 ] != '/')) return;
        if (!strpos($url, $_SERVER["SERVER_NAME"])) {
            $attributes['rel'] = 'nofollow';
            $attributes['target'] = '_blank';
        }

        $link['element']['attributes'] = $attributes;
        return $link;
    }
    
    protected function inlineEmbeding($excerpt)
    {
        if (preg_match('/\[video.*src="([^"]*)".*\]/', $excerpt['text'], $matches)) {
            $url = htmlentities($matches[1], ENT_QUOTES);
            $type = '';
            $needles = ['youtube', 'vimeo', 'dailymotion'];
            foreach ($needles as $needle) {
                if (strpos($url, $needle) !== false) {
                    $type = $needle;
                }
            }
            $element = false;
            switch ($type) {
                case 'youtube':
                    $element = 'iframe';
                    $attributes = [
                        'src' => preg_replace('/.*\?v=([^\&\]]*).*/', 'https://www.youtube.com/embed/$1', $url),
                        'frameborder' => '0',
                        'allow' => 'autoplay',
                        'allowfullscreen' => '',
                        'sandbox' => 'allow-same-origin allow-scripts allow-forms'
                    ];
                    $regxr = '';
                    break;
                case 'vimeo':
                    $element = 'iframe';
                    $attributes = [
                        'src' => preg_replace('/(?:https?:\/\/(?:[\w]{3}\.|player\.)*vimeo\.com(?:[\/\w:]*(?:\/videos)?)?\/([0-9]+)[^\s]*)/', 'https://player.vimeo.com/video/$1', $url),
                        'frameborder' => '0',
                        'allow' => 'autoplay',
                        'allowfullscreen' => '',
                        'sandbox' => 'allow-same-origin allow-scripts allow-forms'
                    ];
                    $regxr = '';
                    break;
                case 'dailymotion':
                    $element = 'iframe';
                    $attributes = [
                        'src' => preg_replace('/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/', 'https://www.dailymotion.com/embed/video/$2', $url),
                        'frameborder' => '0',
                        'allow' => 'autoplay',
                        'allowfullscreen' => '',
                        'sandbox' => 'allow-same-origin allow-scripts allow-forms'
                    ];
                    $regxr = '';
                    break;
            }
            if (!$element) return [
                'extent' => strlen($matches[0]),
                'element' => [
                    'name' => 'a',
                    'text' => $url,
                    'attributes' => ['href' => $url, 'rel' => 'nofollow', 'target' => '_blank']
                ]
            ];
            return [
                'extent' => strlen($matches[0]),
                'element' => [
                    'name' => $element,
                    'text' => $url,
                    'attributes' => $attributes
                ]
            ];
        }
    }
}
