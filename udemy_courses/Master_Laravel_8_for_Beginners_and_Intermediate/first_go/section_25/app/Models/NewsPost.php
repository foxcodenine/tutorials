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
