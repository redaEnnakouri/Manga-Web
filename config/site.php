<?php

return [
    'id' => env('SITE', 'Manga-Web'),
    'name' => env('SITE_NAME', 'Manga-Web'),
    'letter' => env('SITE_LETTER', 'n'),
    'scrapers' => env_array('SITE_SCRAPERS', ['Manga-Web', 'hentai_cafe', 'hitomi']),
    'features' => env_array('SITE_FEATURES', ['logo', 'artists', 'tags', 'groups', 'categories', 'relationships', 'parodies', 'characters', 'languages', 'dmca']),
    'social' => env_array('SITE_SOCIAL', ['https://github.com/redaEnnakouri/Manga-Web', 'https://github.com/redaEnnakouri/Manga-Web']),
    'ua' => env('SITE_UA', 'UA-153166130-1'),
    'captcha' => [
        'key' => env('SITE_CAPTCHA_KEY', '6Lcdk1cbAAAAAIVQIgKiyqyLqMiN02n_5HGqof9k'),
        'secret' => env('SITE_CAPTCHA_SECRET', '6Lcdk1cbAAAAAFcNgpo3QgJHQFmuelqHr_eBlfrl')
    ]
];