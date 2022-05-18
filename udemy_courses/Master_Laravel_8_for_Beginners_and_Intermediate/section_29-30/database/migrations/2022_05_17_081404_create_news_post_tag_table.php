<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// $ php artisan make:migration CreateNewsPostTagTable
// $ php artisan migrate
// $ php artisan migrate:rollback

class CreateNewsPostTagTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news_post_tag', function (Blueprint $table) {
            $table->id();

            $table->foreignId('news_post_id')->index();
            $table->foreign('news_post_id')->references('id')->on('news_posts')->onDelete('cascade');

            $table->foreignId('tag_id')->index();
            $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');

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
        Schema::dropIfExists('news_post_tag');
    }
}
