<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

// _____________________________________________________________________



class NewsPost extends Model {   

    use HasFactory;

    use SoftDeletes;

    // ______________________________________

    // --- TO: use NewsPost::create()  &  NewPost::make()
    protected $fillable = ['title', 'author', 'publishedAt', 'urlToImage', 'content'];

    // ______________________________________

    public function comments() {

        return $this->hasMany(Comment::class);
    }

    // ______________________________________

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

    public static function boot() {

        parent::boot();

        static::deleting(function (NewsPost $newsPost) {
            $newsPost->comments()->delete();
        });

        static::restored(function (NewsPost $newsPost) {
            $newsPost->comments()->restore();
        });

        // static::restoring(function (NewsPost $newsPost) {
        //     $newsPost->comments()->restore();
        // });
    }
    
}
