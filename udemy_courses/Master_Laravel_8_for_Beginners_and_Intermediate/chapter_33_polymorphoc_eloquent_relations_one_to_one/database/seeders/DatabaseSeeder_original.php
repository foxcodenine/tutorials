<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\Comment;
use App\Models\User;
use Faker\Generator;
use Illuminate\Container\Container;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder_original extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */

    // -----------------------------------------------------------------

    // --- NOTE: Here I added faker to this class.
    // --- I coped The Factory.php and follwed this Example:

    // https://stackoverflow.com/questions/62719262/how-to-declare-faker-in-the-seed-file-in-laravel-when-overriding-for-argument-t

    // <- MY THING
    public function __construct() {
        $this->faker = $this->withFaker();
    }

    protected function withFaker() {        
        return Container::getInstance()->make(Generator::class);
    }
    // <- MY THING
    // -----------------------------------------------------------------

    public function run() {

        // --- Createing a define user:
        // --- UPDATED:
        // DB::table('users')->insert([
        //     'name' => 'Christopher Farrugia',
        //     'email' => 'chris12aug@yahoo.com',
        //     'email_verified_at' => now(),
        //     'password' => Hash::make(env('MY_TEST_PASSWORD')),
        //     'remember_token' => Str::random(10),

        // ]);
        
        // --- TO:
        $chris  = User::factory()->stateNameEmail('Christopher Faruugia','chris12aug@yahoo.com')->create();

        // --- Creating 5 random users:
        $others = User::factory()->count(5)->create();
        
        // --- Adding defined user and random users to a single collection:
        $users_collection = $others->concat([$chris]);

        // --- Createing a random blogPost with a random user usering a state function
        $rand_blog_post = BlogPost::factory()->stateUser($users_collection->random())->create();

        // --- Createing 8 random blogPost each with a random user
        $blog_post_collection = BlogPost::factory()->count(8)->make();

        $blog_post_collection->each(function($blog_post) use ($users_collection) {
            $user = $users_collection->random();
            $date = $this->faker->dateTimeBetween($user->created_at, 'now');

            $blog_post->fill([
                'user_id' => $user->id,
                'created_at' => $date,
                'updated_at' => $date,
    
            ]);

            $blog_post->save();

        });

        // --- Creating a defined Blog Post: 

        $my_blog_post = DB::table('blog_posts')->insert([
            'title' => 'Christian Eriksen: Manchester United sign former Tottenham midfielder on three-year deal',
            'content' => $this->faker->sentence(50),
            'image_url' => 'https://e0.365dm.com/22/07/2048x1152/skysports-christian-eriksen_5835358.jpg?20220715144705',
            'user_id' => User::where('email', 'chris12aug@yahoo.com')->first()->id,
            'created_at' => now()
        ]); 
        
        // --- Adding Comments to blogPost:

        $blog_post_collection = $blog_post_collection->concat([$rand_blog_post]);
 
        
        $comments_collection = Comment::factory()->count(100)->make();

        $comments_collection->each(function($comment) use ($blog_post_collection) {

            $blog_post = $blog_post_collection->random();
       
            $date = $this->faker->dateTimeBetween($blog_post->created_at, 'now');
      
            $comment->fill([
                'blog_post_id' => $blog_post->id,
                'created_at' => $date,
                'updated_at' => $date,
            ]);

            $comment->save();
        });
    }


}
