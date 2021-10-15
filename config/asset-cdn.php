<?php

return [

    'use_cdn' => env('USE_CDN', false),

    'cdn_url' => '',

    'filesystem' => [
        'disk' => 'cdn',
        'options' => [
            'ACL' => 'public-read', // File is available to the public, independent of the S3 Bucket policy 
            //'CacheControl' => 'max-age=31536000, public', // Sets HTTP Header 'cache-control'. The client should cache the file for max 1 year 
        ],
    ],

    'files' => [
        'ignoreDotFiles' => true,

        'ignoreVCS' => true,

        'include' => [
            'paths' => [
                'js', 
                'css',
                'images',
                'storage',
                'fonts'
            ],
            'files' => [],
            'extensions' => [],
            'patterns' => [],
        ],

        'exclude' => [
            'paths' => [],
            'files' => [],
            'extensions' => [],
            'patterns' => [],
        ],
    ],

];