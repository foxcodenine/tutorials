<?php

namespace App\Http\Controllers;

use App\Events\CommentPostedEvent;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Resources\CommentResource;
use App\Jobs\NotifyUsersWhenPostWasCommented;
use App\Jobs\ThrottleMailJob;
use App\Mail\CommentPostedMail;
use App\Mail\CommentPostedMarkdownMail;
use App\Models\BlogPost;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Gate;

class PostCommentController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth')->only(['store']);
    }    
    
    
    // ~~> NOTE: Route Model Binding 

    // When injecting a model ID to a route or controller action, you will often query the database
    // to retrieve the model that corresponds to that ID. 
    
    // If you provide an argument that is Type Hinted and its name Matches also the Route parameter,
    // Laravel will automatically inject the model instances directly into your routes this is
    // called route model binding. 

    
    public function index(BlogPost $post) {

        // $this->authorize('viewAny', Comment::class);
        // dd($post->title);       

        // ~~> UPDATED: 
        // ( we are hidding some properties using $hidden on the Comment model )

        // return $post->comments;
        // return $post->comments()->with('user')->get();

        // ~~> TO: ( useing CommentRescource ) (returning a single comment)
        // return new CommentResource($post->comments()->first());
        // return new CommentResource($post->comments()->with('user')->first());

        // ~~> TO: ( useing the collection method ) (returning a multiple comments

        return CommentResource::collection( $post->comments()->with('user')->get() );
    }

    // _________________________________________________________________

    
    public function store(BlogPost $post,  StoreCommentRequest $request) 
    {
        $this->authorize('create', Comment::class);

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
