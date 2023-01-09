<?php

namespace App\Providers;

use App\Models\BlogPost;
use App\Policies\BlogPostPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
        BlogPost::class => BlogPostPolicy::class
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        // --- Creating A Gates on BlogPost

        // ~~> UPDATED: ( used Policies )   

        // Gate::define('posts.update',function($user, $blogPost) {
        //     return $user->id === $blogPost->user_id;
        // });

        // Gate::define('posts.delete',function($user, $blogPost) {
        //     return $user->id === $blogPost->user_id;
        // });

        // ~~> TO: ( used Policies ) ( not required, just do: composer dump-autoload )

        // Gate::define('posts.update',  [BlogPostPolicy::class, 'update']);
        // Gate::define('posts.delete',  [BlogPostPolicy::class, 'delete']);
        // Gate::define('posts.restore', [BlogPostPolicy::class, 'delete']);

        // ~~> OR: ( you can also do ) ( you need to use the default names )

        // Gate::resource('posts', BlogPostPolicy::class);

        // ~~> OR:  

            /* You can use the protected property '$policies' (which is an array)
               and map the model to the policy. 
               Model being the key and policy value */
            
        // ~~> END


        // _____________________________________________________________

        // --- Creating A Gates on BlogPost for admin to update all news 
        // --- using the before method

        Gate::before(function($user, $ability) {

            // ~~> UPDATED:

            // if ($user->is_admin && in_array($ability, ['posts.update'])) {
            //     return true;
            // }

            // ~~> TO:
                // dd($ability);
            if ($user->is_admin && in_array($ability, ['update', 'delete', 'restore'])) {
                return true;

            // ~~> END
            }
        });

        // --- You can also use the after
        //     https://laravel.com/docs/9.x/authorization#intercepting-gate-checks

        // _____________________________________________________________

        Gate::define('home.secret', function($user) {
            return $user->is_admin;
        });

        Gate::define('restore', function($user, $id) {

            return $user->id === BlogPost::onlyTrashed()->where('id', $id)->first()->user_id;
        });
    }
}
