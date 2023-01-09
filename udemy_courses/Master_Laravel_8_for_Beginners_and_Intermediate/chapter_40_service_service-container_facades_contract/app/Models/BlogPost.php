<?php

namespace App\Models;

use App\Scopes\DeletedAdminScope;
use App\Scopes\LatestScope;
use App\Traits\Taggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Cache;

class BlogPost extends Model
{
protected $fillable = ['title', 'content', 'user_id', /*'image_url'*/];
    use HasFactory;
    use SoftDeletes;
    use Taggable;

    // ----- Relationship Methods --------------------------------------

    public function comments() {
        
        // ~~> UPDATED:
        // --- NOTICE: (We are adding the local scope scopeLatest here):
        // return $this->hasMany( Comment::class )->latest();


        // ~~> TO:
        return $this->morphMany(Comment::class, 'commentable')->latest();
    }

    public function user() {
        return $this->belongsTo( User::class );
    }

    // public function tags() {

    //     // ~~> NOTICE: ( we are using tagable trait instead)

    //     // ~~> UPDATED:
    //     // return $this->belongsToMany( Tag::class )->withTimestamps();
    //     // // ->as('tagged')  // this will rename the relation column pivot
        
    //     // --- Explanation: (watch video 168. Defining ManyToMany on models)
        
    //     // ~~> TO: 
    //     return $this->morphToMany(Tag::class, 'taggable')->withTimestamps();          

    // }

    public function image() {
        // ~~> UPDATED:
        // return $this->hasOne(Image::class);
        // ~~> TO:
        return $this->morphOne(Image::class, 'imageable');
    }

    // ----- Local Scope -----------------------------------------------

    public function scopeMostCommented(Builder $query) {
        return $query->withCount('comments')->orderBy('comments_count', 'desc');
    }

    public function scopeWithAllRelations(Builder $query) {
        return $query->with(['comments', 'tags', 'user', 'image']);
    }

    // ----- On Model Boot ---------------------------------------------

    public static function boot () {
             
        // ~~> NOTICE: this is global Scope , should be before the boot();
        static::addGlobalScope( new DeletedAdminScope);
        
        // --- This is calling the original parent boot method
        parent::boot();

        // --- Eloquent Events

        // ~~> NOTE: (Events has been moved to BlogPostObserver)
        
        // static::deleting(function(BlogPost $blogPost) {
        //     $blogPost->comments()->delete();
        //     $blogPost->image()->delete();
        //     Cache::tags(['blog-post'])->forget("blog-post-{$blogPost->id}");
        // });
        
        // static::restored(function(BlogPost $blogPost) {
        //     $blogPost->comments()->restore();
        //     $blogPost->image()->restore();
        //     Cache::tags(['blog-post'])->forget("blog-post-{$blogPost->id}");
        // });

        // static::updated(function(BlogPost $blogPost) {
        //     Cache::tags(['blog-post'])->forget("blog-post-{$blogPost->id}");
        // });
        
        // --- Adding a global scope              
        static::addGlobalScope( new LatestScope);

    }

    // -----------------------------------------------------------------


}
