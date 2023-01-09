<?php

namespace Database\Seeders;

use App\Models\NewsPost;
use App\Models\Tag;
use Illuminate\Database\Seeder;

class NewsPostTagTableSeeder extends Seeder
{

    public function run()
    {
        $tagCount = Tag::all()->count();

        if (0 === $tagCount) {
            $this->command->info('No tags found, skipping assigning tags to news posts');
            return;
        }

        $howManyMin = (int) $this->command->ask('Minimun tags on blog post?', 0);
        $howManyMax = min((int) $this->command->ask('Maximun tags on blog post?', $tagCount), $tagCount);

        NewsPost::all()->each(function (NewsPost $news) use ($howManyMin, $howManyMax) {

            $take = random_int($howManyMin, $howManyMax);

            // This will return a random collation of the tags instance
            // take is specifying the qty of tags to return
            $tags = Tag::inRandomOrder()->take($take)->get();

            // pluck is return an array of id's form the collection
            $tags = $tags->pluck('id');

            $news->tags()->sync($tags);
        });
    }
}
