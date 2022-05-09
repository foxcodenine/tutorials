<?php

namespace App\Providers;

use App\Policies\NewsPostPolicy;
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
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        // _____________________________________________________________

        // --- Creating A Gates on NewsPost 
        // --- UPDATED: (used Policies)

        // Gate::define('newspost.update', function($user, $newspost) {
        //     return $user->id === $newspost->user_id;
        // });

        // Gate::define('newspost.delete', function($user, $newspost) {
        //     return $user->id === $newspost->user_id;
        // });


        // _____________________________________________________________
        // --- TO: (used Policies)


        // Gate::define('newspost.update', [NewsPostPolicy::class, 'update']);
        // Gate::define('newspost.delete', [NewsPostPolicy::class, 'update']);

        // --- OR:

        Gate::resource('newspost', NewsPostPolicy::class);

        // --- OR: (Not requied any more)

        // Laravel can automatically discover policies 
        // as long as the model and policy follow standard Laravel naming conventions.

        // https://laravel.com/docs/9.x/authorization#policy-auto-discovery



        // _____________________________________________________________

        // --- Creating A Gates on NewsPost for admin to update all news 

        // Gate::before(function($user, $ability) {

        //     if ($user->is_admin && in_array($ability, ['newspost.update'])) {
        //         return true;
        //     }
        // });

        // --- You can also use the after
        //     https://laravel.com/docs/9.x/authorization#intercepting-gate-checks


    }
}
