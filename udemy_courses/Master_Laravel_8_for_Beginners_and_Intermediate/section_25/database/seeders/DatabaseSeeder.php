<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\NewsPost;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */

    public function run()
    {
        // \App\Models\User::factory(10)->create();


        // --- input manual data ---------------------------------------
        
        DB::table('users')->insert([
            'name' => 'John Doe',
            'email' => 'john@laravel.test',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            
        ]);



        // --- input data using factory --------------------------------
        
        User::factory()->count(2)->create();




        // --- input data using factory with state ---------------------

        User::factory()->nameEmail('Fox Code', 'fox@code.com')->create();




        // --- seeding with collections ( users ) ----------------------

        // - create a users collection
        $chris = User::factory()->nameEmail('Chr', 'chr@tst.ts')->create();
        $othes  = User::factory()->count(2)->create();


        // dd(get_class($userChris), get_class($othes));
        // //"App\Models\User"  
        // //"Illuminate\Database\Eloquent\Collection"


        // - adding $chris to collection
        $users = $othes->concat([$chris]);  
        // dd($users->count());



        // --- seeding with collections ( newsPosts with users ) -------

        // - create a users newsPosts collection

        $newsPosts = NewsPost::factory()->count(25)->make();

        $newsPosts->each(function($post) use ($users) {

            $post->user_id = $users->random()->id;
            $post->save();

        });


        // --- seeding with collections ( comments with newsPost ) -----

        // - create a users newsPosts collection

        $comments = Comment::factory()->count(150)->make();

        $comments->each(function($comment) use ($newsPosts) {

            $comment->news_post_id = $newsPosts->random()->id;
            $comment->save();

        });


    }

}
