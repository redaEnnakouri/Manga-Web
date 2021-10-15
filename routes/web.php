<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

Route::get('/', function () {
    return redirect('/home');
});

Route::pattern('page', '[0-9]+');

Route::get('translations/{lang}.json', 'TranslationController@generate');
Route::get('sitemap.xml', 'SitemapController@languages')->name('sitemap.languages');
Route::group(['prefix' => '{language}'], function () {
    Route::get('sitemap.xml', 'SitemapController@index')->name('sitemap.index');
    Route::get('sitemap/main.xml', 'SitemapController@main')->name('sitemap.main');
    Route::get('sitemap/comics/{page}.xml', 'SitemapController@comics')->name('sitemap.comics');
    Route::get('sitemap/tags/{page}.xml', 'SitemapController@tags')->name('sitemap.tags');
    Route::get('sitemap/characters/{page}.xml', 'SitemapController@characters')->name('sitemap.characters');
    Route::get('sitemap/authors/{page}.xml', 'SitemapController@authors')->name('sitemap.authors');
    Route::get('sitemap/artists/{page}.xml', 'SitemapController@artists')->name('sitemap.artists');
    Route::get('sitemap/groups/{page}.xml', 'SitemapController@groups')->name('sitemap.groups');
    Route::get('sitemap/parodies/{page}.xml', 'SitemapController@parodies')->name('sitemap.parodies');
    Route::get('sitemap/relationships/{page}.xml', 'SitemapController@relationships')->name('sitemap.relationships');
});
Route::get('g/{id}', 'ComicController@redirect')->name('comic.short_url');
Route::get('{locale}/'.(in_array('webtoons', config('site.features')) ? 'webtoon' : 'comic').'/{slug}/{any?}', 'IndexController')->name('comic')->where('any', '.*');
Route::get('{locale}/tag/{slug}/{any?}', 'IndexController')->name('tag')->where('any', '.*');
Route::get('/{any}', 'IndexController')->where('any', '.*');
