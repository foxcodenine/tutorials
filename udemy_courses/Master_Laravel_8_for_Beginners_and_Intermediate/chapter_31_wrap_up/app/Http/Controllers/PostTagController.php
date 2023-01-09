<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Tag;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class PostTagController extends Controller
{
    public function index($tag) 
    {
        $tag = Tag::findOrFail($tag);
        // $tag = Tag::where('id', $tag)->with(['blogPosts', 'blogPosts.user'])->first();
       
        
        // ---- Side bar Data ------------------------------------------

        // ~~> NOTICE: This is not required anymore, since we are useing a view composer instead

        // $mostCommented = Cache::tags(['blog-post'])->remember('most-commented-blog-posts', Carbon::now()->addSecond(60), function() {
        //     return BlogPost::mostCommented()->take(5)->get();
        // }); 

        // $mostActive = Cache::tags(['blog-post'])->remember('most-active-users', Carbon::now()->addSecond(60), function() {
        //     return User::withMostBlogPosts()->take(5)->get();
        // });

        // $mostActiveLastMonth = Cache::tags(['blog-post'])->remember('most-active-users-last-month', Carbon::now()->addSecond(60), function() {
        //     return User::mostActiveLastMonth()->take(5)->get();
        // });

        // -------------------------------------------------------------

        return view('posts.index', [
            'posts' => $tag->blogPosts()->withAllRelations()->get(),
            // 'mostCommented' => $mostCommented,
            // 'mostActive' => $mostActive,
            // 'mostActiveLastMonth' => $mostActiveLastMonth,
        ]);
    }
}
