<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\Image;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BlogPostsTableSeeder extends Seeder
{

    // -----------------------------------------------------------------
    use _MySeederTrait;
    // -----------------------------------------------------------------
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // --- Fetch all users (using Query-Builder instead Eloquent)
        $users_collection = DB::table('users')->get();

        $numberOfBlogPosts = (int) $this->command->ask('How many blog post would you like to create', 5);
        if ($numberOfBlogPosts < 1) return;

        // --- Createing a random blogPost with a random user usering a state function
        $rand_blog_post = BlogPost::factory()->stateUser($users_collection->random())->create();

        // --- Createing random blogPost each with a random user
        
        $blog_post_collection = BlogPost::factory()->count($numberOfBlogPosts - 1)->make();

        $blog_post_collection->each(function($blog_post) use ($users_collection) {
            $user = $users_collection->random();
            $date = $this->faker->dateTimeBetween($user->created_at, 'now');

            $blog_post->fill([
                'user_id' => $user->id,
                'created_at' => $date,
                'updated_at' => $date,
            ]);

            $blog_post->save();


            // Adding as image to each blog post
            
            $blogPostCollection = BlogPost::get();
            
            $blogPostCollection->each(function($post) {
                Image::factory(['blog_post_id' => $post->id])->create();             
            });
        });

        // ----- Creating a defined Blog Post -------------------------- 

        // ~~> UPDATED: form query builder:

        // DB::table('blog_posts')->insert([ ... ]);

        // ~~> TO: Eloquent

        $my_blog_post = BlogPost::create([
            'title' => 'Christian Eriksen: Manchester United sign former Tottenham midfielder on three-year deal',
            'content' => $this->faker->sentence(50),
            // 'image_url' => 'https://e0.365dm.com/22/07/2048x1152/skysports-christian-eriksen_5835358.jpg?20220715144705',
            'user_id' => User::where('email', 'chris12aug@yahoo.com')->first()->id,
            'created_at' => now()
        ]); 

        //  --- Adding an image
        $my_blog_post_image = new Image();
        $my_blog_post_image->path = 'https://e0.365dm.com/22/07/2048x1152/skysports-christian-eriksen_5835358.jpg?20220715144705';
        
        $my_blog_post->image()->save($my_blog_post_image);
    }
}
