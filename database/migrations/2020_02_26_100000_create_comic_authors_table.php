<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComicAuthorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comic_authors', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('comic_id');
            $table->unsignedInteger('author_id');
            $table->foreign('comic_id')->references('id')->on('comics')->onDelete('cascade');
            $table->foreign('author_id')->references('id')->on('authors')->onDelete('cascade');
        });

        DB::unprepared('CREATE TRIGGER increment_author_comics_count AFTER INSERT ON comic_authors FOR EACH ROW
            BEGIN
                UPDATE authors SET comics_count = comics_count + 1 WHERE id = NEW.author_id;
            END');
        DB::unprepared('CREATE TRIGGER decrement_author_comics_count AFTER DELETE ON comic_authors FOR EACH ROW
            BEGIN
                UPDATE authors SET comics_count = comics_count - 1 WHERE id = OLD.author_id;
            END');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::unprepared('DROP TRIGGER IF EXISTS increment_author_comics_count');
        DB::unprepared('DROP TRIGGER IF EXISTS decrement_author_comics_count');
        Schema::dropIfExists('comic_authors');
    }
}
