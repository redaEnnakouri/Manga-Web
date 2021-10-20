@php
    echo '<?xml version="1.0" encoding="UTF-8"?>';
@endphp
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    @foreach ($map as $index)
    <sitemap>
       <loc>{{ $index['loc'] }}</loc>
       <lastmod>{{ $index['lastmod'] }}</lastmod>
    </sitemap>
    @endforeach
</sitemapindex>