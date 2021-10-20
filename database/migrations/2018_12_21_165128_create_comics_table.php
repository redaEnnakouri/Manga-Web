<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comics', function (Blueprint $table) {
            $table->increments('id');
            $table->string('image')->nullable();
            $table->string('title');
            $table->string('alternative_title')->nullable();
            $table->string('slug')->index();
            $table->text('description')->nullable();
            $table->unsignedInteger('language_id')->nullable();
            $table->unsignedInteger('category_id')->nullable();
            $table->boolean('rewritten')->default(0);
            $table->boolean('translated')->default(0);
            $table->boolean('speechless')->default(0);
            $table->date('uploaded_at');
            $table->timestamps();
        });
        DB::statement('ALTER TABLE comics ADD FULLTEXT comics_index (title, alternative_title, description)');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comics');
    }
}
