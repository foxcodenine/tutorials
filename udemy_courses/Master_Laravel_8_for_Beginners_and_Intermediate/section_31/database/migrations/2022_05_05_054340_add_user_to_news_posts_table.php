<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


// _____________________________________________________________________

class AddUserToNewsPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('news_posts', function (Blueprint $table) {

            $table->foreignId('user_id')->nullable()->onDelete('cascade');
            // $table->foreignId('user_id')->onDelete('cascade');
            
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('news_posts', function (Blueprint $table) {

            $table->dropForeign(['user_id']);             
            $table->dropColumn('user_id');
        });
    }
}
