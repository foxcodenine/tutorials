<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsPost extends Model {   

    use HasFactory;

    // --- to use NewsPost::create()  &  NewPost::make()
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
    }
    
}
