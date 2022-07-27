<?php

namespace App\View\Composers;

use App\Models\BlogPost;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\View\View;


class ActivityComposer 
{
    public function compose(View $view) 
    
    {
        // ---- Side bar Data ------------------------------------------
        $mostCommented = Cache::tags(['blog-post'])->remember('most-commented-blog-posts', Carbon::now()->addSecond(60), function() {
            return BlogPost::mostCommented()->take(5)->get();
        }); 

        $mostActive = Cache::tags(['blog-post'])->remember('most-active-users', Carbon::now()->addSecond(60), function() {
            return User::withMostBlogPosts()->take(5)->get();
        });

        $mostActiveLastMonth = Cache::tags(['blog-post'])->remember('most-active-users-last-month', Carbon::now()->addSecond(60), function() {
            return User::mostActiveLastMonth()->take(5)->get();
        });
        // _____________________________________________________________

        $view->with('mostCommented', $mostCommented);
        $view->with('mostActive', $mostActive);
        $view->with('mostActiveLastMonth', $mostActiveLastMonth);
    }
}