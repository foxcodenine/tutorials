<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    protected $fillable = ['title', 'content', 'image_url'];
    use HasFactory;

    public function comments() {
        return $this->hasMany(Comment::class);
    }
}
