<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = ['name'];
    use HasFactory;

    // ----- Relationship Methods --------------------------------------



    public function blogPosts() {        

        // ~~> UPDATED: (this has been updated from belongsToMany to morphedByMany)
        return $this->morphedByMany(BlogPost::class, 'taggable')->withTimestamps();
    }

    public function comments() {
        return $this->morphedByMany(Comment::class, 'taggable')->withTimestamps();
    }
}
