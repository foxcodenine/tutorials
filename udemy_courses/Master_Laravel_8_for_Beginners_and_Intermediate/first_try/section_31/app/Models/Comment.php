<?php

namespace App\Models;

use App\Scopes\LatestScope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;

class Comment extends Model {

    protected $fillable = ['content', 'news_postnews_post_id', 'user_id'];

    use HasFactory;

    use SoftDeletes;

    // _________________________________________________________________
   // --- Relation Function

    public function newsPost() {

        return $this->belongsTo(NewsPost::class, 'news_post_id', 'id');

        /**  
         * 1st param -  Is the Class it belongs to.
         * 
         * 2nd is Optional - It is the column name in the db table 
         * and migration (in case you didn't use default);
         * 
         * 3rd is Optional - It is the primary key (in this case of NewsPost)
         * that the foriegn key is pointing, in case it is not default
         * 
         */
    }

    // --- Relation Function

    public function user() {

        return $this->belongsTo(User::class);

    }

    // _________________________________________________________________
    
    public static function boot() {

        parent::boot();



        // --- NOTE: This is a global scope.
        //           Comment it out to try also a local scope.

        // static::addGlobalScope(new LatestScope);

        // ________________________________________
        // static::updating(function(Comment $comment) {
        //     Cache::tags(['news-post'])->forget("news-post-{$comment->news_post_id}");
        // });
        static::created(function(Comment $comment) {
            Cache::tags(['news-post'])->forget("news-post-{$comment->news_post_id}");
            Cache::tags(['news-post'])->forget("newspost-most-commented");
        });
    }

        // _________________________________________________________________

    // --- NOTE: Defined a local scope.
    public function scopeLatest(Builder $query) { 

        return $query->orderBy(static::CREATED_AT, 'desc');
    }
}
