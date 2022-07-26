<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\Comment;
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
        $blog_post_collection = BlogPost::all()->where( 'created_at', '<', Carbon::now()->subMinute(1));
 
        // --- Checking if there are any BlogPost:

        if ($blog_post_collection->count() < 1) {
            $this->command->warn('There are no blog post, so no comments will be added');
            return;
        }

        // --- Ask how many Comments user like:

        $numberOfComments = (int) $this->command->ask('How many comments would you like to create', 20);

        // --- Adding Comments to blogPost:

        $comments_collection = Comment::factory()->count($numberOfComments)->make();

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
