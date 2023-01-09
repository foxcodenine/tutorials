<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Seeder;

class TagsTablesSeeder extends Seeder
{

    public function run()
    {
        $tags = collect(['Science', 'Sport', 'Politics', 'Entertaiments', 'Economy']);

        $tags->each(function ($tagName) {

            $tag = new Tag();
            $tag->name = $tagName;
            $tag->save();
        });
    }
}
