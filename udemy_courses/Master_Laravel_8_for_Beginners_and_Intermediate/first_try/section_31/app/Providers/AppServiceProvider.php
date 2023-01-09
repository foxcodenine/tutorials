<?php

namespace App\Providers;

use App\Http\ViewComposers\ActivityComposers;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // not required if component is in the resources/views/components 
        Blade::component('components.badge', 'badge');
        Blade::component('components.alert', 'alert');
        Blade::component('components.tags',   'tags');

        // view()->composer('*', ActivityComposers::class);
        // view()->composer('news.index', ActivityComposers::class);
        view()->composer(['news.index', 'news.show'], ActivityComposers::class);
    }
}
