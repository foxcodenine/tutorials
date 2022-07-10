<?php
namespace App\Http\ViewComposers;

use Illuminate\View\View;
use Illuminate\Support\Facades\Cache;
use App\Models\NewsPost;
use App\Models\User;

class ActivityComposers {

    public function compose(View $view) {

        $mostCommented = Cache::tags(['news-post'])->remember('newspost-most-commented', now()->addSeconds(60), function() {
            return  NewsPost::mostCommented()->take(5)->get();
        });
        $mostActive = Cache::tags(['news-post'])->remember('users-most-active', now()->addSeconds(60), function() {
            return  User::withMostNewsPosts()->take(5)->get();
        });
        $mostActiveLastMonth = Cache::tags(['news-post'])->remember('users-most-active-last-month', now()->addSeconds(60), function() {
            return  User::withMostNewsPostsLastMonth()->take(5)->get();
        });

        $view->with('mostCommented', $mostCommented);
        $view->with('mostActive', $mostActive);
        $view->with('mostActiveLastMonth', $mostActiveLastMonth);
    }
}