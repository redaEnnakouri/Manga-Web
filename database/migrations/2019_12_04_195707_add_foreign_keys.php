<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeys extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('comic_tags', function (Blueprint $table) {
            $table->foreign('comic_id')->references('id')->on('comics')->onDelete('cascade');
            $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
        });

        Schema::table('comic_artists', function (Blueprint $table) {
            $table->foreign('comic_id')->references('id')->on('comics')->onDelete('cascade');
            $table->foreign('artist_id')->references('id')->on('artists')->onDelete('cascade');
        });

        Schema::table('comic_characters', function (Blueprint $table) {
            $table->foreign('comic_id')->references('id')->on('comics')->onDelete('cascade');
            $table->foreign('character_id')->references('id')->on('characters')->onDelete('cascade');
        });

        Schema::table('comic_groups', function (Blueprint $table) {
            $table->foreign('comic_id')->references('id')->on('comics')->onDelete('cascade');
            $table->foreign('group_id')->references('id')->on('groups')->onDelete('cascade');
        });

        Schema::table('comic_parodies', function (Blueprint $table) {
            $table->foreign('comic_id')->references('id')->on('comics')->onDelete('cascade');
            $table->foreign('parody_id')->references('id')->on('parodies')->onDelete('cascade');
        });

        Schema::table('comic_relationships', function (Blueprint $table) {
            $table->foreign('comic_id')->references('id')->on('comics')->onDelete('cascade');
            $table->foreign('relationship_id')->references('id')->on('relationships')->onDelete('cascade');
        });

        Schema::table('comic_images', function (Blueprint $table) {
            $table->foreign('comic_id')->references('id')->on('comics')->onDelete('cascade');
        });

        Schema::table('comments', function (Blueprint $table) {
            $table->index('entry');
            $table->foreign('parent_id')->references('id')->on('comments')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::table('sessions', function (Blueprint $table) {
            $table->index('type');
            $table->index('entry');
            $table->index('visits');
            $table->index('date');
        });

        Schema::table('referrers', function (Blueprint $table) {
            $table->index('from');
        });

        Schema::table('comment_votes', function (Blueprint $table) {
            $table->foreign('comment_id')->references('id')->on('comments')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

        Schema::table('favorites', function (Blueprint $table) {
            $table->index('entry');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('comic_artists', function (Blueprint $table) {
            $table->dropForeign(['comic_id']);
            $table->dropForeign(['artist_id']);
        });

        Schema::table('comic_groups', function (Blueprint $table) {
            $table->dropForeign(['comic_id']);
            $table->dropForeign(['group_id']);
        });

        Schema::table('comic_tags', function (Blueprint $table) {
            $table->dropForeign(['comic_id']);
            $table->dropForeign(['tag_id']);
        });

        Schema::table('comic_characters', function (Blueprint $table) {
            $table->dropForeign(['comic_id']);
            $table->dropForeign(['character_id']);
        });

        Schema::table('comic_parodies', function (Blueprint $table) {
            $table->dropForeign(['comic_id']);
            $table->dropForeign(['parody_id']);
        });

        Schema::table('comic_relationships', function (Blueprint $table) {
            $table->dropForeign(['comic_id']);
            $table->dropForeign(['relationship_id']);
        });
        
        Schema::table('comic_images', function (Blueprint $table) {
            $table->dropForeign(['comic_id']);
        });

        Schema::table('comments', function (Blueprint $table) {
            $table->dropForeign(['parent_id']);
            $table->dropForeign(['user_id']);
            $table->dropIndex(['entry']);
        });

        Schema::table('comment_votes', function (Blueprint $table) {
            $table->dropForeign(['comment_id']);
            $table->dropForeign(['user_id']);
        });

        Schema::table('sessions', function (Blueprint $table) {
            $table->dropIndex(['type']);
            $table->dropIndex(['entry']);
            $table->dropIndex(['visits']);
            $table->dropIndex(['date']);
        });

        Schema::table('referrers', function (Blueprint $table) {
            $table->dropIndex(['from']);
        });

        Schema::table('favorites', function (Blueprint $table) {
            $table->dropIndex(['entry']);
            $table->dropForeign(['user_id']);
        });
    }
}
