<?php

namespace App\Providers;

use App\Contracts\CounterCountract;
use App\Services\Counter;
use App\View\Composers\ActivityComposer;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Schema;
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
        // ----- Setting Schema defaults strig length  _________________

        Schema::defaultStringLength(191);
        

        // ----- Register Components -----------------------------------

        // --- NOTICE: This not required, if component is in the resources/views/components 
        // Blade::component('components.alert', 'alert');

        // ----- Register ViewComposers --------------------------------

        View::composer(['posts.index', 'posts.show'], ActivityComposer::class);
        
        // Can also do:

        // view()->composer('*', ActivityComposers::class);
        // view()->composer('posts.index', ActivityComposers::class);


        // ----- Service Container Binding -----------------------------

            // ~~> CHANGED:
            // $this->app->bind( Counter::class, function($app) {
            //     return new Counter(env('TIMEOUT_USERS_ON_PAGE'));
            // } );

            // https://laravel.com/docs/9.x/container#binding-basics

            // ~~> TO:
            $this->app->singleton( Counter::class, function($app) {
                return new Counter(
                    $app->make('Illuminate\Contracts\Cache\Factory'),
                    $app->make('Illuminate\Contracts\Session\Session'),
                    env('TIMEOUT_USERS_ON_PAGE')
                );
            } );

            // https://appdividend.com/2022/01/23/laravel-dependency-injection/
            // https://laravel.com/docs/9.x/container#the-make-method

            // ~~> OR:

            // $this->app->when(Counter::class)
            //           ->needs('$timeout')
            //           ->give(env(env('TIMEOUT_USERS_ON_PAGE')));


        // ----- Binding a Contract to a Service / Class ---------------
        
        $this->app->bind(
            CounterCountract::class, Counter::class
        );


    }
}
