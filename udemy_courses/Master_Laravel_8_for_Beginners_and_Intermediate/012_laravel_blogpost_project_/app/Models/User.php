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

    public const LOCALES = [ 
        'en' => 'English',
        'es' => 'Español',
        'de' => 'Deutsch',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'email',
        'email_verified_at',
        'created_at',
        'updated_at',
        'is_admin',
        'locale',
        
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

    public function comments () {
        // These are all the user comments
        return $this->hasMany(Comment::class);
    }

    public function commentsOn() {  
        // These are all comments on the user pofile 
        return $this->morphMany(Comment::class, 'commentable')->latest();
    }

    public function image() {
        // return $this->hasOne(Image::class);
        return $this->morphOne(Image::class, 'imageable');
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

        } ])->having('blog_posts_count', '>=', 5)            
            ->orderBy('blog_posts_count', 'desc');      
    }

    // --- NOTICE: You can also use:
    //      ->has('blogPosts', '>', 5)

    public function scopeThatHasUserCommentedOnPost(Builder $query, BlogPost $post) {

        return $query->whereHas('comments', function ($query_comments) use ($post) {
            return $query_comments->where('commentable_id', '=', $post->id)
            ->where('commentable_type', '=', BlogPost::class);
        });
    }

    public function scopeFilterAdminUsers(Builder $query) {
        return $query->where('is_admin', true);
    }

}
