<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Models\BlogPost;
use Illuminate\Http\Request;

class PostController extends Controller
{
    

    public function index()
    {
        return view('posts.index', ['posts' => BlogPost::orderBy('created_at', 'desc')->get()]);
    }


    public function create()
    {
        return view('posts.create');
    }

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
        $post->save();
       
        
        $request->session()->flash('status', 'The blog post was created');

        return redirect()->route('posts.show', ['post' => $post->id]);
        
    }


    public function show($id)  {
        return view('posts.show', ['post' => BlogPost::findOrFail($id)]);
    }


    public function edit($id)  {
        //
    }


    public function update(Request $request, $id)  {
        //
    }


    public function destroy($id)  {
        //
    }
}
