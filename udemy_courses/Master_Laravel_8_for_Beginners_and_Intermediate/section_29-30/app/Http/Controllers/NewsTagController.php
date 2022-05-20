<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;

class NewsTagController extends Controller{

    public function index($tagId) {

        $tag =Tag::findOrFail($tagId);

        return view('news.index', [
            'news'  => $tag->newsPosts,
        ]);
    }

}
