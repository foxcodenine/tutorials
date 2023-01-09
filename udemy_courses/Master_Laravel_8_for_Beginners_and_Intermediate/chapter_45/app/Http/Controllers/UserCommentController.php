<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCommentRequest;
use App\Models\Comment;
use App\Models\User;


class UserCommentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->only(['store']);
    }

    public function store(User $user, StoreCommentRequest $request) 
    {
        $comment = Comment::make([
            'content' => $request->input('content'),
            'user_id' => auth()->id()
        ]);
        
        $user->commentsOn()->save($comment);

        // $request->session()->flash('status', 'Comment was created');

        return redirect()->back()->withStatus('Comment was created');
    }
}
