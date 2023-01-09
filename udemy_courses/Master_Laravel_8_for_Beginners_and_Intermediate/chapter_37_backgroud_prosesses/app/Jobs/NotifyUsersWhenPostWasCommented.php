<?php

namespace App\Jobs;

use App\Mail\CommentPostedOnPostWatchedMarkdownMail;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class NotifyUsersWhenPostWasCommented implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $comment;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Comment $comment)
    {
        $this->comment = $comment;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // We are fetching all users that have previously also commented
        // on this post

        $users_collection = User::thatHasUserCommentedOnPost($this->comment->commentable)
            ->get()
            ->filter(function (User $user) {
                return $user->id !== $this->comment->user_id;
                // We are removing the user who did the last comment
            });


        $users_collection->each(function (User $user) {
            // ~~> UPDATED:
            // Mail::to($user)->send(
            //     new CommentPostedOnPostWatchedMarkdownMail(
            //         $this->comment,
            //         $user
            //     )
            // );

            // ~~> TO:  (using ThrottleMailJoh):
            ThrottleMailJob::dispatch(
                new CommentPostedOnPostWatchedMarkdownMail($this->comment, $user),
                $user
            );
        });
    }
}
