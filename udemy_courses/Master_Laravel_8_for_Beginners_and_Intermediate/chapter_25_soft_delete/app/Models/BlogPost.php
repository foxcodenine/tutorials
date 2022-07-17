<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BlogPost extends Model
{
    protected $fillable = ['title', 'content', 'image_url'];
    use HasFactory;
    use SoftDeletes;

    // ----- Relationship Methods --------------------------------------

    public function comments() {
        return $this->hasMany(Comment::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

    // ----- On Model Boot ---------------------------------------------

    public static function boot () {

        // --- This is calling the original parent boot method
        parent::boot();


        /// --- Eloquent Events

        static::deleting(function(BlogPost $blogPost) {
            $blogPost->comments()->delete();
        });

        static::restored(function(BlogPost $blogPost) {
            $blogPost->comments()->restore();
        });

    }



    // -----------------------------------------------------------------
}
