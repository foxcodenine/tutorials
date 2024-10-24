<?php

namespace App\Providers;

use App\Models\BlogPost;
use App\Models\Comment;
use App\Models\User;
use App\Policies\BlogPostPolicy;
use App\Policies\CommentPolicy;
use App\Policies\UserPolicy;
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
        BlogPost::class => BlogPostPolicy::class,
        User::class => UserPolicy::class,
        Comment::class => CommentPolicy::class,
    ];

    // * Note. If you follow the nameing convention and match the police
    // * name with the model ex Cat => CatPolice from laravel 5.8 you
    // * dont need 2 register the policies, they will be auto-discovered

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        // ----- Registering Policies ----------------------------------

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
            if ($user->is_admin && in_array($ability, ['update', 'delete', 'restore'])) {
                // dd($ability);
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
