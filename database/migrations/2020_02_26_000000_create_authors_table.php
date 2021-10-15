<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAuthorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('authors', function (Blueprint $table) {
            $table->increments('id');
            $table->string('image')->nullable();
            $table->string('name');
            $table->string('slug')->index();
            $table->text('description')->nullable();
            $table->enum('gender', ['male', 'female'])->nullable();
            $table->json('platforms');
            $table->unsignedInteger('comics_count')->default(0);
            $table->index('comics_count');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('authors');
    }
}
