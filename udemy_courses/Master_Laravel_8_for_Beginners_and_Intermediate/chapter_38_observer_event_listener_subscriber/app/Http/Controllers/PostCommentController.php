<?php

namespace App\Http\Controllers;

use App\Events\CommentPostedEvent;
use App\Http\Requests\StoreCommentRequest;
use App\Jobs\NotifyUsersWhenPostWasCommented;
use App\Jobs\ThrottleMailJob;
use App\Mail\CommentPostedMail;
use App\Mail\CommentPostedMarkdownMail;
use App\Models\BlogPost;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class PostCommentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->only(['store']);
    }    
    
    
    // ~~> NOTE: Route Model Binding (index is just for testing RMB)

    // When injecting a model ID to a route or controller action, you will often query the database
    // to retrieve the model that corresponds to that ID. 
    
    // If you provide an argument that is Type Hinted and its name Matches also the Route parameter,
    // Laravel will automatically inject the model instances directly into your routes this is
    // called route model binding. 
    
    public function index(BlogPost $post) {
        dd($post->title);
    }

    
    public function store(BlogPost $post,  StoreCommentRequest $request) 
    {
        $validated = $request->validated();

        $comment = $post->comments()->create([
            'content' => $validated['content'],
            'user_id' => auth()->user()->id
        ]);

        $request->session()->flash('status', 'Comment was created!');

        // -------------------------------------------------------------
        // ----- Sending an Email to user - someone comment  on his post

        // ~~> UPDATED: (from send using 'implements ShouldQueue'):
        // Mail::to($post->user)->send(
        //     // new CommentPostedMail($comment)
        //     new CommentPostedMarkdownMail($comment)
        // );

        // ~~> TO: (using queue method):
        // Mail::to($post->user)->queue(
        //     new CommentPostedMarkdownMail($comment)
        // );

        // ~~> ALSO: (using later method):
        // $when = now()->addSecond(4);
        // Mail::to($post->user)->later(
        //     $when,
        //     new CommentPostedMarkdownMail($comment)
        // );

        // ~~> ALSO: (using a job):
        
            // ~~> MOVED TO: ( Event / Listener )
            // ThrottleMailJob::dispatch(
            //     new CommentPostedMarkdownMail($comment), 
            //     $post->user
            // )->onQueue('low');

        // ~~> END


        // -------------------------------------------------------------
        // ----- Sending an Email to all user - someone comment on after
        // ----- there comment

            // ~~> MOVED TO: ( Event / Listener )
            // NotifyUsersWhenPostWasCommented::dispatch($comment)
            //     ->onQueue('high');

        // -------------------------------------------------------------

        event(new CommentPostedEvent($comment));

        return redirect()->back();
    }
}
