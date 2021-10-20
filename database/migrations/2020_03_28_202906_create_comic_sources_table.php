<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComicSourcesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comic_sources', function (Blueprint $table) {
            $table->increments('id');
            $table->string('link');
            $table->unsignedInteger('comic_id');
            $table->boolean('disabled')->default(0);

            $table->foreign('comic_id')->references('id')->on('comics')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('comic_sources', function (Blueprint $table) {
            $table->dropForeign(['comic_id']);
        });
        Schema::dropIfExists('comic_sources');
    }
}
