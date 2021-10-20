<?php

use Illuminate\Support\Facades\Route;

Route::apiResources(array_filter([
    'comics' => 'ComicController',
    'tags' => in_array('tags', config('site.features')) ? 'TagController' : null,
    'characters' => in_array('characters', config('site.features')) ? 'CharacterController' : null,
    'artists' => in_array('artists', config('site.features')) ? 'ArtistController' : null,
    'authors' => in_array('authors', config('site.features')) ? 'AuthorController' : null,
    'groups' => in_array('groups', config('site.features')) ? 'GroupController' : null,
    'languages' => in_array('languages', config('site.features')) ? 'LanguageController' : null,
    'parodies' => in_array('parodies', config('site.features')) ? 'ParodyController' : null,
    'relationships' => in_array('relationships', config('site.features')) ? 'RelationshipController' : null,
    'categories' => in_array('categories', config('site.features')) ? 'CategoryController' : null,
    'ads' => 'AdController'
]));
Route::get('comics/{slug}/download', 'ComicController@download');
Route::post('comics/{slug}/favorite', 'ComicController@favorite');
Route::get('comics/{slug}/images', 'ComicController@images');
Route::get('comics/{slug}/{chapter}/images', 'ComicController@images');
Route::get('comics/{slug}/chapters', 'ComicController@chapters');
Route::delete('comics/{comic}/chapters/{chapter}', 'ComicController@delete_chapter');

Route::get('profile/{username}', 'ProfileController@show');

Route::group(['prefix' => 'comments'], function () {
    Route::get('/', 'CommentsController@index')->middleware('auth:api', 'admin');
    Route::post('preview/{type}/{entry}/{parent_id?}', 'CommentsController@preview');
    Route::post('vote/{identifier}/{vote}', 'CommentsController@vote');
    Route::get('{type}/{entry}/{parent_id?}', 'CommentsController@index');
    Route::post('{type}/{entry}/{parent_id?}', 'CommentsController@store');
    Route::put('{identifier}', 'CommentsController@update');
    Route::delete('{identifier}', 'CommentsController@destroy');
});

Route::group(['prefix' => 'recommendations'], function () {
    Route::get('{type}/{entry}', 'RecommendationsController@index');
});

Route::post('login', 'AuthController@login');
Route::post('register', 'AuthController@protected_register');

Route::group(['prefix' => 'password'], function () {
    Route::post('create', 'PasswordResetController@create');
    Route::get('find/{token}', 'PasswordResetController@find');
    Route::post('reset', 'PasswordResetController@reset');
});

Route::get('email/verify/{email}', 'AuthController@verify')->middleware('signed')->name('verification.verify');

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('logout', 'AuthController@logout');
    Route::get('account', 'AuthController@account');
    Route::put('account', 'AuthController@update_account');
    Route::post('email/resend', 'AuthController@resend');

    Route::group(['middleware' => 'admin'], function() {
        Route::post('upload', 'UploadController');
    });
});

Route::group(['prefix' => 'mobile'], function () {
    Route::post('register', 'AuthController@register');
});