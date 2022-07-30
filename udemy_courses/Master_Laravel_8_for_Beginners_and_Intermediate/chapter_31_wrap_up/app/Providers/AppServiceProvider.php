<?php

namespace App\Providers;

use App\View\Composers\ActivityComposer;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\View;
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
        // ----- Register Components -----------------------------------

        // --- NOTICE: This not required, if component is in the resources/views/components 
        // Blade::component('components.alert', 'alert');

        // ----- Register ViewComposers --------------------------------

        View::composer(['posts.index', 'posts.show'], ActivityComposer::class);
        
        // Can also do:

        // view()->composer('*', ActivityComposers::class);
        // view()->composer('posts.index', ActivityComposers::class);

    }
}
