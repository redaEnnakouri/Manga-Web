<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class AddComicCounts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tags', function (Blueprint $table) {
            $table->unsignedInteger('comics_count')->default(0);
            $table->index('comics_count');
        });
        echo DB::table('tags')->update(['comics_count' => DB::raw("(select count(*) from comic_tags where tags.id = comic_tags.tag_id)")])." comics assigned to tags\n";
        DB::unprepared('CREATE TRIGGER increment_tag_comics_count AFTER INSERT ON comic_tags FOR EACH ROW
            BEGIN
                UPDATE tags SET comics_count = comics_count + 1 WHERE id = NEW.tag_id;
            END');
        DB::unprepared('CREATE TRIGGER decrement_tag_comics_count AFTER DELETE ON comic_tags FOR EACH ROW
            BEGIN
                UPDATE tags SET comics_count = comics_count - 1 WHERE id = OLD.tag_id;
            END');

        Schema::table('artists', function (Blueprint $table) {
            $table->unsignedInteger('comics_count')->default(0);
            $table->index('comics_count');
        });
        echo DB::table('artists')->update(['comics_count' => DB::raw("(select count(*) from comic_artists where artists.id = comic_artists.artist_id)")])." comics assigned to artists\n";
        DB::unprepared('CREATE TRIGGER increment_artist_comics_count AFTER INSERT ON comic_artists FOR EACH ROW
            BEGIN
                UPDATE artists SET comics_count = comics_count + 1 WHERE id = NEW.artist_id;
            END');
        DB::unprepared('CREATE TRIGGER decrement_artist_comics_count AFTER DELETE ON comic_artists FOR EACH ROW
            BEGIN
                UPDATE artists SET comics_count = comics_count - 1 WHERE id = OLD.artist_id;
            END');

        Schema::table('characters', function (Blueprint $table) {
            $table->unsignedInteger('comics_count')->default(0);
            $table->index('comics_count');
        });
        echo DB::table('characters')->update(['comics_count' => DB::raw("(select count(*) from comic_characters where characters.id = comic_characters.character_id)")])." comics assigned to characters\n";
        DB::unprepared('CREATE TRIGGER increment_character_comics_count AFTER INSERT ON comic_characters FOR EACH ROW
            BEGIN
                UPDATE characters SET comics_count = comics_count + 1 WHERE id = NEW.character_id;
            END');
        DB::unprepared('CREATE TRIGGER decrement_character_comics_count AFTER DELETE ON comic_characters FOR EACH ROW
            BEGIN
                UPDATE characters SET comics_count = comics_count - 1 WHERE id = OLD.character_id;
            END');

        Schema::table('groups', function (Blueprint $table) {
            $table->unsignedInteger('comics_count')->default(0);
            $table->index('comics_count');
        });
        echo DB::table('groups')->update(['comics_count' => DB::raw("(select count(*) from comic_groups where groups.id = comic_groups.group_id)")])." comics assigned to groups\n";
        DB::unprepared('CREATE TRIGGER increment_group_comics_count AFTER INSERT ON comic_groups FOR EACH ROW
            BEGIN
                UPDATE `groups` SET comics_count = comics_count + 1 WHERE id = NEW.group_id;
            END');
        DB::unprepared('CREATE TRIGGER decrement_group_comics_count AFTER DELETE ON comic_groups FOR EACH ROW
            BEGIN
                UPDATE `groups` SET comics_count = comics_count - 1 WHERE id = OLD.group_id;
            END');

        Schema::table('parodies', function (Blueprint $table) {
            $table->unsignedInteger('comics_count')->default(0);
            $table->index('comics_count');
        });
        echo DB::table('parodies')->update(['comics_count' => DB::raw("(select count(*) from comic_parodies where parodies.id = comic_parodies.parody_id)")])." comics assigned to parodies\n";
        DB::unprepared('CREATE TRIGGER increment_parody_comics_count AFTER INSERT ON comic_parodies FOR EACH ROW
            BEGIN
                UPDATE parodies SET comics_count = comics_count + 1 WHERE id = NEW.parody_id;
            END');
        DB::unprepared('CREATE TRIGGER decrement_parody_comics_count AFTER DELETE ON comic_parodies FOR EACH ROW
            BEGIN
                UPDATE parodies SET comics_count = comics_count - 1 WHERE id = OLD.parody_id;
            END');

        Schema::table('relationships', function (Blueprint $table) {
            $table->unsignedInteger('comics_count')->default(0);
            $table->index('comics_count');
        });
        echo DB::table('relationships')->update(['comics_count' => DB::raw("(select count(*) from comic_relationships where relationships.id = comic_relationships.relationship_id)")])." comics assigned to relationships\n";
        DB::unprepared('CREATE TRIGGER increment_relationship_comics_count AFTER INSERT ON comic_relationships FOR EACH ROW
            BEGIN
                UPDATE relationships SET comics_count = comics_count + 1 WHERE id = NEW.relationship_id;
            END');
        DB::unprepared('CREATE TRIGGER decrement_relationship_comics_count AFTER DELETE ON comic_relationships FOR EACH ROW
            BEGIN
                UPDATE relationships SET comics_count = comics_count - 1 WHERE id = OLD.relationship_id;
            END');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tags', function (Blueprint $table) {
            $table->dropIndex(['comics_count']);
            $table->dropColumn(['comics_count']);
        });
        DB::unprepared('DROP TRIGGER IF EXISTS increment_tag_comics_count');
        DB::unprepared('DROP TRIGGER IF EXISTS decrement_tag_comics_count');

        Schema::table('artists', function (Blueprint $table) {
            $table->dropIndex(['comics_count']);
            $table->dropColumn(['comics_count']);
        });
        DB::unprepared('DROP TRIGGER IF EXISTS increment_artist_comics_count');
        DB::unprepared('DROP TRIGGER IF EXISTS decrement_artist_comics_count');

        Schema::table('characters', function (Blueprint $table) {
            $table->dropIndex(['comics_count']);
            $table->dropColumn(['comics_count']);
        });
        DB::unprepared('DROP TRIGGER IF EXISTS increment_character_comics_count');
        DB::unprepared('DROP TRIGGER IF EXISTS decrement_character_comics_count');

        Schema::table('groups', function (Blueprint $table) {
            $table->dropIndex(['comics_count']);
            $table->dropColumn(['comics_count']);
        });
        DB::unprepared('DROP TRIGGER IF EXISTS increment_group_comics_count');
        DB::unprepared('DROP TRIGGER IF EXISTS decrement_group_comics_count');

        Schema::table('parodies', function (Blueprint $table) {
            $table->dropIndex(['comics_count']);
            $table->dropColumn(['comics_count']);
        });
        DB::unprepared('DROP TRIGGER IF EXISTS increment_parody_comics_count');
        DB::unprepared('DROP TRIGGER IF EXISTS decrement_parody_comics_count');

        Schema::table('relationships', function (Blueprint $table) {
            $table->dropIndex(['comics_count']);
            $table->dropColumn(['comics_count']);
        });
        DB::unprepared('DROP TRIGGER IF EXISTS increment_relationship_comics_count');
        DB::unprepared('DROP TRIGGER IF EXISTS decrement_relationship_comics_count');
    }
}
