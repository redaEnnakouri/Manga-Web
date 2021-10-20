<?php

use App\Http\Controllers\TranslationController;

Artisan::command('generate:translations', function () {
    $languages = config('app.available_languages');
    foreach ($languages as $language => $data) {
        $messages = (new TranslationController)->generate($language)->content();
        file_put_contents(resource_path("js/translations/$language.json"), $messages);
        $this->info("JSON files for {$data['name']} generated successfully!");
    }
})->describe('Build JSON translation files from Laravel lang files.');

Artisan::command('site:js', function () {
    $config = array_intersect_key(config('site'), array_flip(['social', 'features', 'name', 'id', 'letter']));
    file_put_contents(resource_path("js/site.json"), json_encode($config, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
})->describe('Build JSON config files from env variables.');
