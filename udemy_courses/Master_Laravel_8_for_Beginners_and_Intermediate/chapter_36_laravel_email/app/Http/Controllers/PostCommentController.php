<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCommentRequest;
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

        Mail::to($post->user)->send(
            // new CommentPostedMail($comment)
            new CommentPostedMarkdownMail($comment)
        );

        return redirect()->back();
    }
}
