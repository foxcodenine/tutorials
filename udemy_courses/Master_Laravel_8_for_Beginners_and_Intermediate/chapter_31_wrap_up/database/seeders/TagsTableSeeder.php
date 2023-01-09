<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\Tag;
use Illuminate\Database\Seeder;

class TagsTableSeeder extends Seeder
{
    public $tagList = [
        'science',
        'politics',
        'love',
        'photographer',
        'kids',
        'nature',
        'study',
        'life',
        'model',
        'camera',
        'student',
        'maths',
        'languages'
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create a collect with the tag name
        $tagList = collect($this->tagList);
        
        // Create Tags
        $tagList->each(function($tag) { Tag::create(['name'=> $tag]);});


    }
}
