<?php

namespace App\Models;

use App\Scopes\DeletedAdminScope;
use App\Scopes\LatestScope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;

// _____________________________________________________________________



class NewsPost extends Model {   

    use HasFactory;

    use SoftDeletes;

    // ______________________________________

    // --- TO: use NewsPost::create()  &  NewPost::make()
    protected $fillable = ['title', 'author', 'publishedAt', 'urlToImage', 'content', 'user_id'];

    // ______________________________________

    // --- Relation Function

    public function comments() {

        return $this->hasMany(Comment::class);

        // --- NOTE: (You can add the local scopeLatest like this):
        // return $this->hasMany(Comment::class)->latest();
    }

    // ______________________________________

    // --- Relation Function

    public function users() {

        // return $this->belongsTo(User::class);

        return $this->belongsTo(User::class, 'user_id', 'id');

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

    // ______________________________________

    // --- Relation Function

    public function tags() {
        return $this->belongsToMany( Tag::class )->withTimestamps();
        // --- Explanation: (watch video 168. Defining ManyToMany on models)
    }

    // _________________________________________________________________

    public static function boot() {

        // --- NOTE: this is global Scope , should be before the boot();
        static::addGlobalScope(new DeletedAdminScope);
        // _____________________________________________
        parent::boot();

        // _____________________________________________
        // --- NOTE: Eloquent Events

        static::deleting(function (NewsPost $newsPost) {
            $newsPost->comments()->delete();
        });

        static::restored(function (NewsPost $newsPost) {
            $newsPost->comments()->restore();
        });

        // static::restoring(function (NewsPost $newsPost) {
        //     $newsPost->comments()->restore();
        // });

        static::updating(function(NewsPost $newsPost) {
            Cache::forget("news-post-{$newsPost->id}");
        });

        // _____________________________________________

        // --- NOTE: This is a global scope.
        //           Comment it out to use a local scope instaed.

        // static::addGlobalScope(new LatestScope);

        // _____________________________________________


    }

    // _________________________________________________________________

    // --- NOTE: local scope Methods

    public function scopeLatest(Builder $query) {

        return $query->orderBy(static::CREATED_AT, 'desc');
    }


    public function scopeMostCommented(Builder $query) {
        //  withCount will create comments_count property
        return $query->withCount('comments')->orderBy('comments_count', 'desc');
    }
    
}
