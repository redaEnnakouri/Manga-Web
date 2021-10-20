<?php

namespace App\Http\Controllers;

use Illuminate\Filesystem\Filesystem as File;

class TranslationController extends Controller
{
    public function generate($language)
    {
        $messages = [];
        foreach ((new File)->allFiles(resource_path('lang' . DIRECTORY_SEPARATOR . $language)) as $file) {
            $pathName = $file->getRelativePathName();
            $key = substr($pathName, 0, -4);
            $key = str_replace('\\', '.', $key);
            $key = str_replace('/', '.', $key);
            if (starts_with($key, 'vendor')) {
                $key = $this->getVendorKey($key);
            }
            $fullPath = resource_path('lang' . DIRECTORY_SEPARATOR . $language . DIRECTORY_SEPARATOR . $pathName);
            $messages[$key] = include $fullPath;
        }
        $this->sortMessages($messages);
        return response()->json($messages,200,[],JSON_PRETTY_PRINT);
    }
    protected function sortMessages(&$messages)
    {
        ksort($messages);
        foreach ($messages as $key => &$value) {
            if (!is_array($value)) {
                $value = preg_replace_callback(
                    '/(?<!mailto|tel):\w+/',
                    function ($matches) {
                        return '{' . mb_substr($matches[0], 1) . '}';
                    },
                    $value
                );
            } else {
                $this->sortMessages($value);
            }
        }
    }
    private function getVendorKey($key)
    {
        $keyParts = explode('.', $key, 4);
        unset($keyParts[0]);
        return $keyParts[2] . '.' . $keyParts[1] . '::' . $keyParts[3];
    }
}
