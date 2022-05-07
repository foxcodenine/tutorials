<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news_posts', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            // $table->string('title')->nullable(false);
            $table->string('title');
            $table->string('author');
            $table->string('publishedAt');
            $table->string('urlToImage');

            // In sqlite you can't have a column not null with out a 
            // default value, or used to be. 
            // And we are useing sqlite for testing:
            if (env('DB_CONNECTION') === 'sqlite_testing') {
                $table->text('content')->default('');
            } else {
                $table->text('content');
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('news_posts');
    }
}
