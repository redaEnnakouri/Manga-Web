<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <title>{{ $title . ' | ' . __('app.name') }}</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="description" content="{{ $description }}" data-meta>
        <link href="{{ $cdn->url('css/app.css') }}" rel="stylesheet">
        <script>
            var app = {
                cdn: "{{ rtrim($cdn->url('/'), "/") }}",
                title: "{{ __('app.name') }}",
                description: "{{ $description }}",
                languages: @json(config('app.available_languages')),
                ads: @json($ads), 
                ua: "{{ config('site.ua') }}",
                captcha: "{{ config('site.captcha.key') }}",
                country: "{{ $country }}",
                is_mobile: @json($is_mobile),
                nsfw: @json($nsfw)
            };
        </script>
    </head>
    <body>
        <div id="app"></div>
        <script src="{{ $cdn->url('js/app.js') }}"></script>
        {!! $popup !!}
        <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700,800&display=swap" rel="stylesheet">
        @if (!in_array('logo', config('site.features')))<link href="https://fonts.googleapis.com/css?family=Fredoka+One&text={{ implode('', array_filter(array_map('trim', array_unique(str_split(config('site.name').config('site.letter')))))) }}" rel="stylesheet">@endif
    </body>
</html>
