<?php

namespace App\Http\Controllers\Api\V1;

use App\Events\CommentPostedEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Resources\CommentResource;
use App\Models\BlogPost;
use App\Models\Comment;
use Illuminate\Http\Request;

class PostCommentController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api')->only(['store', 'update', 'destroy']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(BlogPost $post, Request $request)
    {
        //// $this->authorize('viewAny', Comment::class); 

        //// To use authorize in index, you need to add index to:
        //// $this->middleware('auth:api')->only(['store']);

        // return response()->json(['comments' => '']);
        

        $perPage = $request->input('per_page') ?? 15;

        return CommentResource::collection(
            // $post->comments()->with('user')->get()
            $post->comments()->with('user')->paginate($perPage)->appends(
                [
                    'per_page' => $perPage
                ]
            )
        );
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BlogPost $post, StoreCommentRequest $request)
    {
        $this->authorize('create', Comment::class);

        $comment = $post->comments()->create([
            'content' => $request->input('content'),
            'user_id' => $request->user()->id
        ]);

        event(new CommentPostedEvent($comment));

        return new CommentResource($comment);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(BlogPost $post, Comment $comment)
    {
        //// $this->authorize('view', Comment::class);

        //// To use authorize in show, you need to add show to:
        //// $this->middleware('auth:api')->only(['store']);

        return new CommentResource($comment);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(BlogPost $post, Comment $comment, StoreCommentRequest $request)
    {
        $this->authorize('update', $comment);

        $comment->content = $request->input('content');
        $comment->save();

        return new CommentResource($comment);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(BlogPost $post, Comment $comment)
    {
        $this->authorize('delete', $comment);

        $comment->delete();

        return response()->noContent();
    }

}
