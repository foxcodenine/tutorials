<?php

namespace App\Providers;

use App\Events\BlogPostPostedEvent;
use App\Events\CommentPostedEvent;
use App\Listeners\CacheSubscriber;
use App\Listeners\NotifyAdminWhenBlogPostCreatedListener;
use App\Listeners\NotifyUserAboutCommentListener;
use App\Models\BlogPost;
use App\Models\Comment;
use App\Observers\BlogPostObserver;
use App\Observers\CommentObserver;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],

        CommentPostedEvent::class => [
            NotifyUserAboutCommentListener::class
        ],
        BlogPostPostedEvent::class => [
            NotifyAdminWhenBlogPostCreatedListener::class
        ]
    ];



    /**
     * The subscriber classes to register.
     *
     * @var array
     */
    protected $subscribe = [
        CacheSubscriber::class
    ];



    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        // ---- Observers (events observes) ----------------------------

        BlogPost::observe(BlogPostObserver::class);
        Comment::observe(CommentObserver::class);

        // -------------------------------------------------------------
    }
}
