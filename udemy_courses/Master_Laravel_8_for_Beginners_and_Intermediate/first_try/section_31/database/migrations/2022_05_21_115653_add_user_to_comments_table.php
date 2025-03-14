<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// php artisan make:migration AddUserToCommentsTable

// _____________________________________________________________________

class AddUserToCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('comments', function (Blueprint $table) {
            
            if (env('DB_CONNECTION') === 'sqlite_testing') {
                $table->foreignId('user_id')->default(0)->onDelete('cascade');
            } else {
                $table->foreignId('user_id')->nullable(false)->onDelete('cascade');
            }

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
        Schema::table('comments', function (Blueprint $table) {
            
            $table->dropForeign(['user_id']);             
            $table->dropColumn('user_id');
        });
    }
}
