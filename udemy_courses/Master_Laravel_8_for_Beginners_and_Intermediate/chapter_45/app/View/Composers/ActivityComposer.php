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
        $mostCommented = Cache::tags(['blog-post'])->remember(
            'most-commented-blog-posts', 
            Carbon::now()->addSecond(env('CACHE_TIMEOUT')), 
            function() { return BlogPost::mostCommented()->take(5)->get();}
        ); 

        $mostActive = Cache::tags(['blog-post'])->remember(
            'most-active-users', 
            Carbon::now()->addSecond(env('CACHE_TIMEOUT')), 
            function() { return User::withMostBlogPosts()->take(5)->get(); }
        );

        $mostActiveLastMonth = Cache::tags(['blog-post'])->remember(
            'most-active-users-last-month', 
            Carbon::now()->addSecond(env('CACHE_TIMEOUT')), 
            function() { return User::mostActiveLastMonth()->take(5)->get(); }
        );
        // _____________________________________________________________

        $view->with('mostCommented', $mostCommented);
        $view->with('mostActive', $mostActive);
        $view->with('mostActiveLastMonth', $mostActiveLastMonth);
        
    }
}

// Attaching A Composer To Multiple Views
// use App\Views\Composers\MultiComposer;
 
// View::composer(
//     ['profile', 'dashboard'],
//     MultiComposer::class
// );