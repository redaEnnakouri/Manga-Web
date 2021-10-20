<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class AddComicChapterCount extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('comics', function (Blueprint $table) {
            $table->unsignedInteger('chapters_count')->default(0);
            $table->index('chapters_count');
        });
        echo DB::table('comics')->update(['chapters_count' => DB::raw("(select count(*) from chapters where comics.id = chapters.comic_id)")])." chapters assigned\n";
        DB::unprepared('CREATE TRIGGER increment_chapters_count AFTER INSERT ON chapters FOR EACH ROW
            BEGIN
                UPDATE comics SET chapters_count = chapters_count + 1 WHERE id = NEW.comic_id;
            END');
        DB::unprepared('CREATE TRIGGER decrement_chapters_count AFTER DELETE ON chapters FOR EACH ROW
            BEGIN
                UPDATE comics SET chapters_count = chapters_count - 1 WHERE id = OLD.comic_id;
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
            $table->dropIndex(['chapters_count']);
            $table->dropColumn('chapters_count');
        });
        DB::unprepared('DROP TRIGGER IF EXISTS increment_chapters_count');
        DB::unprepared('DROP TRIGGER IF EXISTS decrement_chapters_count');
    }
}
