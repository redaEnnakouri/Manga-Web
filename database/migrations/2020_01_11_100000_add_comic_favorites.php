<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class AddComicFavorites extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('comics', function (Blueprint $table) {
            $table->unsignedInteger('favorites')->default(0);
            $table->index('favorites');
        });
        echo DB::table('comics')->update(['favorites' => DB::raw("(select count(*) from favorites where comics.id = favorites.entry and type = 'comic')")])." favorites assigned\n";
        DB::unprepared('CREATE TRIGGER increment_favorites AFTER INSERT ON favorites FOR EACH ROW
            BEGIN
                IF (NEW.`type` = "comic") THEN
                    UPDATE comics SET favorites = favorites + 1 WHERE id = NEW.entry;
                END IF;
            END');
        DB::unprepared('CREATE TRIGGER decrement_favorites AFTER DELETE ON favorites FOR EACH ROW
            BEGIN
                IF (OLD.`type` = "comic") THEN
                    UPDATE comics SET favorites = favorites - 1 WHERE id = OLD.entry;
                END IF;
            END');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('comics', function (Blueprint $table) {
            $table->dropIndex(['favorites']);
            $table->dropColumn('favorites');
        });
        DB::unprepared('DROP TRIGGER IF EXISTS increment_favorites');
        DB::unprepared('DROP TRIGGER IF EXISTS decrement_favorites');
    }
}
