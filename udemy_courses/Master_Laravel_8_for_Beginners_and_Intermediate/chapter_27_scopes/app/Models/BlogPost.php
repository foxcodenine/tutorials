<?php

namespace App\Models;

use App\Scopes\DeletedAdminScope;
use App\Scopes\LatestScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Builder;

class BlogPost extends Model
{
    protected $fillable = ['title', 'content', 'image_url', 'user_id'];
    use HasFactory;
    use SoftDeletes;

    // ----- Relationship Methods --------------------------------------

    public function comments() {
        return $this->hasMany(Comment::class)->latest();
        // return $this->hasMany(Comment::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

    // ----- Local Scope -----------------------------------------------

    public function scopeMostCommented(Builder $query) {
        return $query->withCount('comments')->orderBy('comments_count', 'desc');
    }

    // ----- On Model Boot ---------------------------------------------

    public static function boot () {
             
        // ~~> NOTICE: this is global Scope , should be before the boot();
        static::addGlobalScope( new DeletedAdminScope);
        
        // --- This is calling the original parent boot method
        parent::boot();

        // --- Eloquent Events
        
        static::deleting(function(BlogPost $blogPost) {
            $blogPost->comments()->delete();
        });
        
        static::restored(function(BlogPost $blogPost) {
            $blogPost->comments()->restore();
        });
        
        // --- Adding a global                
        static::addGlobalScope( new LatestScope);

    }

    // -----------------------------------------------------------------


}
