<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;

class NewsTagController extends Controller{

    public function index($tagId) {

        $tag =Tag::findOrFail($tagId);

        return view('news.index', [

            // --- UPDATED:
            // 'news'  => $tag->newsPosts,

            // --- TO: (added eager loading as in NewsController.index to cache)
            'news'  => $tag->newsPosts()
                           ->latestWithRelations()      // <-using local scope
                           ->get(),
        ]);
    }

}
