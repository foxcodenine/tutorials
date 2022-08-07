<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\BlogPost;
use App\Models\Tag;

class BlogPostTagTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Fetching all blogPost and tags
        $blog_post_collection = BlogPost::all();
        $all_tags = Tag::inRandomOrder()->get();

        // Assigning a random number of tags to each blogPost
        $blog_post_collection->each(function($post) use ($all_tags) {

            // ~~> UPDATED: ( from using saveMany )

            // $tags = $all_tags->random(rand(0, (int) $all_tags->count() / 2));
            // $post->tags()->saveMany($tags);

            // ~~> TO:  ( using sync )
            // ~~> NOTICE: This was not required, just trying different way.

            $all_tags_ids = $all_tags->pluck('id');
            $some_tags_ids = $all_tags_ids->random(rand(0, (int) $all_tags->count() / 2));
            $post->tags()->sync($some_tags_ids);

        });
    }
}
