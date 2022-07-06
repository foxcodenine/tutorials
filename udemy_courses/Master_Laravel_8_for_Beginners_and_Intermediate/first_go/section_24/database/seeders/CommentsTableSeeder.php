<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\NewsPost;
use Illuminate\Database\Seeder;

class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $newsPost = NewsPost::all();

        if ($newsPost->count() < 1) {
            $this->command->info('There are no news, so no comments will be added!');
            return;
        } 
        
        $comments = Comment::factory()->count(100)->make();

        $comments->each(function ($item, $key) use ($newsPost) {

            $item->news_post_id = $newsPost->random()->id;
            $item->save();
        });

        // --- USE: $ php artisan db:seed --class=CommentsTableSeeder
    }
}
