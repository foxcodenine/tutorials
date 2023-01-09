<?php

namespace App\Mail;

use App\Models\Comment;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;

class CommentPostedMail extends Mailable
{
    use Queueable, SerializesModels;

    public $comment;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Comment $comment)
    {
        $this->comment = $comment;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
        ->subject('Comment was posted on your ' . $this->comment->commentable->title . ' blog post')
        // ->from('admin@laravel.test', 'Admin')
        ->attach(
            storage_path('app/public/attachments/') . 'plane_ticket.pdf',
            ['as' => 'Plane Ticket.pdf', 'mine' => 'application/pdf']
        )
        // ->attachFromStorage('.path.')
        // ->attachFromStorageDisk('diskname','path')
        // ->attachData( public_path($this->comment->user->image->path), 'User Profile Picture.jpg')
        ->view('emails.posts.commented', []);
    }
}
