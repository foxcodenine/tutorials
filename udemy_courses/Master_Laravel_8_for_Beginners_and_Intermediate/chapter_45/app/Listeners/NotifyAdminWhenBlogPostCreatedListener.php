<?php

namespace App\Listeners;

use App\Events\BlogPostPostedEvent;
use App\Jobs\ThrottleMailJob;
use App\Mail\BlogPostAddedMarkdownMail;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class NotifyAdminWhenBlogPostCreatedListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(BlogPostPostedEvent $event)
    {
        User::filterAdminUsers()->get()     
            ->map(function(User $admin) {
                ThrottleMailJob::dispatch(
                    // --- mail
                        new BlogPostAddedMarkdownMail(),               
                    // --- user
                        $admin
                )->onQueue('default');;
            });

    }
}
