<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCascadeDeleteToCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('comments', function (Blueprint $table) {

            // If using sqlite (in testing) do nor drop foreign key:
            if (env('DB_CONNECTION') !== 'sqlite_testing') {
                $table->dropForeign(['news_post_id']);
            }   
            $table->foreign('news_post_id')->references('id')->on('news_posts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('comments', function (Blueprint $table) {

            $table->dropForeign(['news_post_id']);
            $table->foreign('news_post_id')->references('id')->on('news_posts');
        });
    }
}
