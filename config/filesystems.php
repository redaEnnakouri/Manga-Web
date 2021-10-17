<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default filesystem disk that should be used
    | by the framework. The "local" disk, as well as a variety of cloud
    | based disks are available to your application. Just store away!
    |
    */

    'default' => env('FILESYSTEM_DRIVER', 'local'),

    'usecdn' => env('USE_CDN', false),

    'cdnlink' => env('CDN_URL', 'http://mangaweb.local/'),

    /*
    |--------------------------------------------------------------------------
    | Default Cloud Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Many applications store files both locally and in the cloud. For this
    | reason, you may specify a default "cloud" driver here. This driver
    | will be bound as the Cloud disk implementation in the container.
    |
    */

    'cloud' => env('FILESYSTEM_CLOUD', 's3'),

    /*
    |--------------------------------------------------------------------------
    | Filesystem Disks
    |--------------------------------------------------------------------------
    |
    | Here you may configure as many filesystem "disks" as you wish, and you
    | may even configure multiple disks of the same driver. Defaults have
    | been setup for each driver as an example of the required options.
    |
    | Supported Drivers: "local", "ftp", "sftp", "s3", "rackspace"
    |
    */
    'disks' => [
        'local' => [
            'driver' => 'local',
            'root' => storage_path('app'),
        ],

        // 'public' => [
        //     'driver' => 'local',
        //     'root' => storage_path('app/public'),
        //     'url' => env('APP_URL')
        // ],

        'public' => [
            'driver' => 'local',
            'root' => public_path(),
            'url' => env('APP_URL')
        ],

        // 'cdn' => [
        //     'driver' => 'local',
        //     'root' => public_path(),
        //     'url' => env('CDN_URL')
        // ],        
        's3' => [
            'driver' => 's3',
            'key' => env('AWS_ACCESS_KEY_ID'),
            'secret' => env('AWS_SECRET_ACCESS_KEY'),
            'region' => env('AWS_DEFAULT_REGION'),
            'bucket' => env('AWS_BUCKET'),
            'url' => env('AWS_URL'),
        ],
        'cdn' => [
            'base_url' => env('CEPH_BASE_URL', 'http://mangaweb.local/'),
            'driver' => 'ceph',
            'key' => env('CEPH_ACCESS_KEY', 'GUOCNAS7EIDEYDBQHGMB'),
            'credentials' => [
                'key' => env('CEPH_ACCESS_KEY', 'GUOCNAS7EIDEYDBQHGMB'),
                'secret' => env('CEPH_SECRET_KEY', '3o0jYDYTRGqXN00GJi7u6VcFrJlckMrpqdIUnvgA'),
                ],
            'region' => '',
            'prefix' => '',
            'bucket' => env('CEPH_BUCKET', 'nhe'),
            'version' => env('CEPH_VERSION', 'latest'),
            'ACL' => env('CEPH_ACL', 'public-read'), //private,'public-read',
            'visibility' => 'public'
        ],
        
        'files' => [
            'base_url' => env('CEPH_BASE_URL', 'https://cdn.hentaihand.com'),
            'driver' => 'ceph',
            'key' => env('CEPH_ACCESS_KEY', 'GUOCNAS7EIDEYDBQHGMB'),
            'credentials' => [
                'key' => env('CEPH_ACCESS_KEY', 'GUOCNAS7EIDEYDBQHGMB'),
                'secret' => env('CEPH_SECRET_KEY', '3o0jYDYTRGqXN00GJi7u6VcFrJlckMrpqdIUnvgA'),
                ],
            'region' => '',
            'prefix' => '',
            'bucket' => env('CEPH_BUCKET', 'nhe'),
            'version' => env('CEPH_VERSION', 'latest'),
            'ACL' => env('CEPH_ACL', 'public-read'), //private,'public-read',
            'visibility' => 'public'
        ],
    ],
];
