<?php

namespace App\Models;

use App\Scopes\LatestScope;
use App\Traits\Taggable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;

class Comment extends Model
{
    protected $fillable = ['content', 'blog_post_id', 'user_id', 'commentable_id', 'commentable_type'];
    use HasFactory;
    use SoftDeletes;
    use Taggable;

    // ----- Relationship Methods --------------------------------------

    // Laravel by default will look for blog_post_id

    // ~~> UPDATED:
    // public function blogPost() {
    //     return $this->belongsTo(BlogPost::class, 'blog_post_id', 'id');
    // }

    /**  
     * 1st param -  Is the Class it belongs to.
     * 
     * 2nd is Optional - It is the column name in the db table 
     * and migration (in case you didn't use default);
     * 
     * 3rd is Optional - It is the primary key (in this case of BlogPosts)
     * that the foriegn key is pointing, in case it is not default
     * 
    */
    // ~~> TO:

    public function commentable() {
        return $this->morphTo();
    }

    public function user() {
        return $this->belongsTo(User::class);
    }


    // ~~> NOTICE: ( using taggable Traits instead )
    // public function tags() {
    //     return $this->morphToMany(Tag::class, 'taggable')->withTimestamps();  
    // }

    // ----- Local Scope -----------------------------------------------

    public function scopeLatestComments(Builder $query) {
        // --- This scope will order comments by created_at date
        return $query->orderBy('created_at', 'desc');
    }

    
    // ----- On Model Boot ---------------------------------------------

    public static function boot () {
        
        // --- This is calling the original parent boot method
        parent::boot();
        
        // --- Adding a global
        // static::addGlobalScope( new LatestScope); // <- using local scope 'scopeLatest' instead
        
        
        // --- Eloquent Events

        static::created(function(Comment $comment) {
            // dd($comment->blog_post_id);
            if ($comment->commentable_type === BlogPost::class) { 

                Cache::tags(['blog-post'])->forget("blog-post-{$comment->commentable_id}"); 
                Cache::tags(['blog-post'])->forget("blog-post-{$comment->commentable_id}-comments"); 
                Cache::tags(['blog-post'])->forget("most-commented-blog-posts"); 
            }
        });
    }
}
