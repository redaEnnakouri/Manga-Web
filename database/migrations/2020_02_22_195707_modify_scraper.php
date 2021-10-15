<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModifyScraper extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('scraper', function (Blueprint $table) {
            $table->string('scraper');
            $table->string('title')->index()->nullable();
            $table->string('link')->index()->nullable();
            $table->dropColumn('meta');
            $table->dropTimestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('scraper', function (Blueprint $table) {
            $table->dropColumn('scraper');
            $table->dropColumn('title');
            $table->dropColumn('link');
            $table->json('meta');
            $table->timestamps();
        });
    }
}
