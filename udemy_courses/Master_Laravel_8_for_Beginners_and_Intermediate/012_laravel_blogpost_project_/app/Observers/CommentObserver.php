<?php

namespace App\Observers;

use App\Models\BlogPost;
use App\Models\Comment;
use Illuminate\Support\Facades\Cache;

class CommentObserver
{

    public function created(Comment $comment)
    {
     
        if ($comment->commentable_type === BlogPost::class) { 

            Cache::tags(['blog-post'])->forget("blog-post-{$comment->commentable_id}"); 
            Cache::tags(['blog-post'])->forget("blog-post-{$comment->commentable_id}-comments"); 
            Cache::tags(['blog-post'])->forget("most-commented-blog-posts"); 
            Cache::tags('blog-post')->flush();
        }  
    }


    public function deleted(Comment $comment)
    {
        //
    }


    public function restored(Comment $comment)
    {
        //
    }


    public function forceDeleted(Comment $comment)
    {
        //
    }
}
