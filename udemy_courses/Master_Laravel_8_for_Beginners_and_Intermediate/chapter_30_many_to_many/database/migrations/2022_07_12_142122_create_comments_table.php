<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {

            $table->id();
            $table->timestamps();
            $table->text('content');

            // ----- IF we are using sqlite (example in testing) -------

            if (env('DB_CONNECTION') === 'sqlite_testing') {

                $table->foreignId('blog_post_id')->nullable()->index();
                // --- OR:                
                // $table->foreignId('blog_post_id')->default('0')->index();

            } else {
                $table->foreignId('blog_post_id')->index();
            }

            $table->foreign('blog_post_id')->references('id')->on('blog_posts');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}
