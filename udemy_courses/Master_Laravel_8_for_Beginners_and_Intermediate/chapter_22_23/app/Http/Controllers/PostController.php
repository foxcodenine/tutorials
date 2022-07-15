<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Models\BlogPost;
use Carbon\Carbon;
use Illuminate\Http\Request;


class PostController extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth')
            ->except(['index', 'show'])
            // ->only('destroy')
            ;
    }

    public function index() {


        // return view('posts.index', ['posts' => BlogPost::orderBy('created_at', 'desc')->get()]);

        $posts = BlogPost::with('comments')
                    ->withCount('comments')
                    ->orderBy('id', 'desc')
                    ->get();

        return view('posts.index', ['posts' => $posts]);
    }

    // _________________________________________________________________

    public function create() {
        return view('posts.create');
    }

    // _________________________________________________________________

    // --- UPDATED:
    // public function store(Request $request)

    // --- TO:
    public function store(StorePostRequest $request)  {  


        // --- MOVED TO StorePostRequest:

        // $validated = $request->validate([
        //     'title' => 'bail|required|min:5|max:255',
        //     'content' => 'required|min:10',   
        // ]);

        // $post = new BlogPost();
        // $post->title = $request->input('title');
        // $post->content = $request->input('content');
        // $post->save();

        $validated = $request->validated();

        $post = new BlogPost();
        $post->title = $validated['title'];
        $post->content = $validated['content'];
        $post->image_url = $validated['image_url'];
        $post->save();
       
        
        $request->session()->flash('status', 'The blog post was created');

        return redirect()->route('posts.show', ['post' => $post->id]);
        
    }

    // _________________________________________________________________

    public function show($id)  {
        // $testDate = Carbon::tomorrow();

        return view('posts.test', [
            'post' => BlogPost::with('comments')->findOrFail($id), 
            // 'testDate' => $testDate
        ]);
    }

    // _________________________________________________________________

    public function edit($id)  {

        $currentPost = BlogPost::findOrFail($id);

        return view('posts.edit', ['post' => $currentPost] );
    }

    // _________________________________________________________________

    public function update(StorePostRequest $request, $id)  {


        // dd($request->input());
        $currentPost = BlogPost::findOrFail($id);

        $validated = $request->validated();

        $currentPost->fill($validated);

        $currentPost->save();

        $request->session()->flash('status', 'Post has been updated');

        return redirect()->route('posts.show', ['post' => $currentPost->id]);

    }

    // _________________________________________________________________
    
    public function destroy($id)  {

        $currentPost = BlogPost::findOrFail($id);
        $currentPost->delete();

        session()->flash('status', 'Blog post was delete');

        return redirect()->route('posts.index');
    }
}
