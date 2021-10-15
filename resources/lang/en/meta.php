<?php

return [

    "title" => [
        "default" => "Home",
        "404" => "Page not found",
        "comics" => "Comics",
        "comic" => ":title - Comic",
        "reader" => "Read :title",
        "characters" => "Characters",
        "character" => ":name - Character",
        "artists" => "Artists",
        "artist" => ":name - Artist",
        "authors" => "Authors",
        "Author" => ":name - Author",
        "groups" => "Groups",
        "group" => ":name - Group",
        "parodies" => "Parodies",
        "parody" => ":name - Parody",
        "relationships" => "Relationships",
        "relationship" => ":name - Relationship",
        "tags" => "Tags",
        "tag" => ":name - Tag",
        "language" => ":name - Language",
        "category" => ":name - Category",
        "profile" => ":username - Profile",
        "settings" => "Settings",
        "admin" => [
            "publishers" => "Manage publishers",
            "authors" => "Manage authors",
            "artists" => "Manage artists",
            "genres" => "Manage genres",
            "comics" => "Manage comics",
            "slides" => "Manage slides",
        ]
    ],
    "description" => [
        "default" => config('site.name')." is a free and frequently updated hentai manga and doujinshi reader packed with thousands of multilingual comics for reading and downloading.",
        "tags" => "Read uncensored, lolicon, full color, big breasts and milf comics on ".config('site.name').", a hentai doujinshi and manga reader.",
        "comic" => ":date - Read and download :title, a hentai :category by :creators for free on ".config('site.name').".",
        "artist" => "Read :count hentai comics by :name on ".config('site.name').", a hentai doujinshi and manga reader.",
        "author" => "Read :count hentai comics by :name on ".config('site.name').", a hentai doujinshi and manga reader.",
        "group" => ":description",
        "parody" => "Read :count :name hentai comics on ".config('site.name').", a hentai doujinshi and manga reader.",
        "relationship" => "Read :count :name hentai comics on ".config('site.name').", a hentai doujinshi and manga reader.",
        "category" => "Read :count :name hentai comics on ".config('site.name').", a hentai doujinshi and manga reader.",
        "tag" => "Read :count :name hentai comics on ".config('site.name').", a hentai doujinshi and manga reader.",
        "character" => "Read :count :name hentai comics on ".config('site.name').", a hentai doujinshi and manga reader.",
        "language" => "Read :count :name hentai comics on ".config('site.name').", a hentai doujinshi and manga reader.",
        "reader" => "",
        "defaults" => [
            "category" => "comic",
            "creators" => "multiple artists"
        ]
    ],

];
