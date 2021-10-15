<?php

namespace App\Scrapers;

class Toonily extends Madara
{
    public $domain = "https://toonily.com";
    protected $ajax_class = ".col-6";
}