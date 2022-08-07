<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

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

            // ----- IF we are using sqlite (example in testing) -------
          
            if (env('DB_CONNECTION') === 'sqlite_testing') {
                // $table->foreignId('user_id')->nullable()->index();
                // --- OR:
                $table->foreignId('user_id')->default('0')->index();

            } else {
                $table->foreignId('user_id')->index();
            }
            // _________________________________________________________

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
        Schema::table('comments', function (Blueprint $table) {
            
            $table->dropForeign(['user_id']); // <~~ Notice Order!             
            $table->dropColumn('user_id');
        });
    }
}
