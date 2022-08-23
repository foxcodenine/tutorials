<?php

namespace App\Observers;

use App\Models\BlogPost;
use Illuminate\Support\Facades\Cache;

class BlogPostObserver
{

    public function created(BlogPost $blogPost)
    {
        Cache::tags('blog-post')->flush();
    }


    public function updated(BlogPost $blogPost)
    {
        Cache::tags(['blog-post'])->forget("blog-post-{$blogPost->id}");        
    }


    public function updating(BlogPost $blogPost)
    {
        //
    }

  

    public function deleted(BlogPost $blogPost)
    {
        Cache::tags('blog-post')->flush();
    }


    public function deleting(BlogPost $blogPost)
    {
        $blogPost->comments()->delete();
        $blogPost->image()->delete();
        
        Cache::tags(['blog-post'])->forget("blog-post-{$blogPost->id}");

    }


    public function restored(BlogPost $blogPost)
    {
        $blogPost->comments()->restore();
        $blogPost->image()->restore();

        Cache::tags(['blog-post'])->forget("blog-post-{$blogPost->id}");
        Cache::tags('blog-post')->flush();
    }


    public function restoring(BlogPost $blogPost)
    {
        //
    }


    public function forceDeleted(BlogPost $blogPost)
    {
        //
    }
}
