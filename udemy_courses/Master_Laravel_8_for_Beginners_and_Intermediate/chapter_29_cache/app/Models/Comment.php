<?php

namespace App\Models;

use App\Scopes\LatestScope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    protected $fillable = ['content', 'blog_post_id'];
    use HasFactory;
    use SoftDeletes;

    // Laravel by default will look for blog_post_id
    public function blogPost() {
        return $this->belongsTo(BlogPost::class, 'blog_post_id', 'id');
    }

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

    public function scopeLatestComments(Builder $query) {
        // --- This scope will order comments by created_at date
        return $query->orderBy('created_at', 'desc');
    }

    

    public static function boot () {

        // --- This is calling the original parent boot method
        parent::boot();

        // --- Adding a global
        // static::addGlobalScope( new LatestScope); // <- using local scope 'scopeLatest' instead
    }
}
