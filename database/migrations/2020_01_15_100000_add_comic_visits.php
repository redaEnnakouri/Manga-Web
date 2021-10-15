<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class AddComicVisits extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('comics', function (Blueprint $table) {
            $table->unsignedInteger('visits')->default(0);
            $table->index('visits');
        });
        echo DB::table('comics')->update(['visits' => DB::raw("(select COALESCE(sum(visits),0) from sessions where comics.id = sessions.entry and type = 'comic')")])." visits assigned\n";
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('comics', function (Blueprint $table) {
            $table->dropIndex(['visits']);
            $table->dropColumn('visits');
        });
    }
}
