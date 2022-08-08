<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\Comment;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class CommentsTableSeeder extends Seeder
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
        // --- Fetch all BlogPost created more that 1 minute ago (usingEloquent)
        // --- And all the users
        $blog_posts_collection = BlogPost::all()->where( 'created_at', '<', Carbon::now()->subMinute(1));
        $users_collection = User::all();
 
        // --- Checking if there are any BlogPost:

        if ($blog_posts_collection->count() < 1) {
            $this->command->warn('There are no blog post, so no comments will be added');
            return;
        }

        // --- Ask how many Comments user like:

        $numberOfComments = (int) $this->command->ask('How many comments would you like to create', 20);

        // --- Fetching all Comments:

        $comments_collection = Comment::factory()->count($numberOfComments)->make();

        // --- Assigning Comments to a blogPost and a user:
        // --- And adjust dates:

        $comments_collection->each(function($comment) use ($blog_posts_collection, $users_collection) {

            $blog_post = $blog_posts_collection->random();
            $user = $users_collection->random();
       
            $date = $this->faker->dateTimeBetween($blog_post->created_at, 'now');
      
            $comment->fill([
                // 'blog_post_id' => $blog_post->id,
                'user_id'    => $user->id,
                'created_at' => $date,
                'updated_at' => $date,
            ]);           

            // $comment->save();
            $blog_post->comments()->save($comment);

        });
    }
}
