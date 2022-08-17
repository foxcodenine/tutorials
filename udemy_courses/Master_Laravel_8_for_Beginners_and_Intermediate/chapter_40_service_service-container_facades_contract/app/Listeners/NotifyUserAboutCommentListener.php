<?php

namespace App\Listeners;

use App\Events\CommentPostedEvent;
use App\Jobs\NotifyUsersWhenPostWasCommented;
use App\Jobs\ThrottleMailJob;
use App\Mail\CommentPostedMarkdownMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class NotifyUserAboutCommentListener
{
    public function __construct()
    {
        //
    }

    public function handle(CommentPostedEvent $event)
    {

        // ----- Sending an Email to user - someone comment  on his post

        ThrottleMailJob::dispatch(
            new CommentPostedMarkdownMail($event->comment), 
            $event->comment->commentable->user
        )->onQueue('low');

        // ----- Sending an Email to all user - someone comment on after
        // ----- there comment

        NotifyUsersWhenPostWasCommented::dispatch($event->comment)
            ->onQueue('high');
        
        // -------------------------------------------------------------
    }
    
}
