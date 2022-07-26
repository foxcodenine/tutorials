<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // -----Relationship Methods --------------------------------------

    public function blogPosts () {
        return $this->hasMany(BlogPost::class);
    }

    // ----- Local Scopes -----------------------------------------------

    public function scopeWithMostBlogPosts(Builder $query) {
        $query->withCount('blogPosts')->orderBy('blog_posts_count', 'desc');
    }

    public function scopeMostActiveLastMonth(Builder $query) {

        $query->withCount(['blogPosts' => function($blog_post_query) {

            // --- UPDATED: 
            // return $blog_post_query->where('created_at', '>', Carbon::now()->subMonth(1) );
            // --- TO: 
            return $blog_post_query
                    ->whereBetween('created_at',  [ Carbon::now()->subMonth(1), Carbon::now() ] );

        } ])->having('blog_posts_count', '>', 5)->orderBy('blog_posts_count', 'desc');
      
    }

}
