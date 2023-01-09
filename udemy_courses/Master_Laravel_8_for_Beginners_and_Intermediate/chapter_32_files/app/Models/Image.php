<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;

class Image extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = ['path', 'blog_post_id'];

    static protected $default = '/images/fox.jpg';
    
    // _________________________________________________________________


    public static function default() {
        return URL::asset(static::$default);
    }
    

    // ----- Relationship Methods --------------------------------------

    public function blogPost() {
        return $this->belongsTo(BlogPost::class);
        
    }

    // _________________________________________________________________

    public function url () {
        $path = $this->path;

        if (in_array(substr($path, 0, 7), ['http://', 'https:/'], true) ) {
            return $path;
        }

        return Storage::url($path);       
    }
}
