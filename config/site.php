<?php

return [
    'id' => env('SITE', 'nhentai'),
    'name' => env('SITE_NAME', 'nHentai'),
    'letter' => env('SITE_LETTER', 'n'),
    'scrapers' => env_array('SITE_SCRAPERS', ['nhentai', 'hentai_cafe', 'hitomi']),
    'features' => env_array('SITE_FEATURES', ['logo', 'artists', 'tags', 'groups', 'categories', 'relationships', 'parodies', 'characters', 'languages', 'dmca']),
    'social' => env_array('SITE_SOCIAL', ['https://twitter.com/nhentaicom', 'https://instagram.com/nhengram']),
    'ua' => env('SITE_UA', 'UA-153166130-1'),
    'captcha' => [
        'key' => env('SITE_CAPTCHA_KEY', '6Lcdk1cbAAAAAIVQIgKiyqyLqMiN02n_5HGqof9k'),
        'secret' => env('SITE_CAPTCHA_SECRET', '6Lcdk1cbAAAAAFcNgpo3QgJHQFmuelqHr_eBlfrl')
    ]
];