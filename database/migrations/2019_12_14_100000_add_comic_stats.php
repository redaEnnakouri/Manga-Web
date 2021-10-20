<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class AddComicStats extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('comics', function (Blueprint $table) {
            $table->unsignedInteger('pages')->default(0);
            $table->index('pages');
        });
        echo DB::table('comics')->update(['pages' => DB::raw("(select count(*) from comic_images where comics.id = comic_images.comic_id)")])." pages assigned\n";
        DB::unprepared('CREATE TRIGGER increment_pages AFTER INSERT ON comic_images FOR EACH ROW
            BEGIN
                UPDATE comics SET pages = pages + 1 WHERE id = NEW.comic_id;
            END');
        DB::unprepared('CREATE TRIGGER decrement_pages AFTER DELETE ON comic_images FOR EACH ROW
            BEGIN
                UPDATE comics SET pages = pages - 1 WHERE id = OLD.comic_id;
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
            $table->dropIndex(['pages']);
            $table->dropColumn('pages');
        });
        DB::unprepared('DROP TRIGGER IF EXISTS increment_pages');
        DB::unprepared('DROP TRIGGER IF EXISTS decrement_pages');
    }
}
