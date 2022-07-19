<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Models\BlogPost;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class PostController extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth')
            ->except(['index', 'show'])
            // ->only('destroy')
            ;
    }

    // _________________________________________________________________

    public function index() {


        // return view('posts.index', ['posts' => BlogPost::orderBy('created_at', 'desc')->get()]);

        $posts = BlogPost::with('comments')
                    ->withCount('comments')
                    ->orderBy('id', 'desc')
                    ->get();

        // --- Adding user's trashed Post if user is loged in
        if (Auth::check()) {

            $trashedByUser = BlogPost::onlyTrashed()
                        ->with('comments')
                        ->withCount('comments')                   
                        ->where('user_id', Auth::user()->id)
                        ->get();
            
            $posts = $posts->merge($trashedByUser)->sortByDesc('id');

        }

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
        $currentUser = Auth::user();
        // --- OR:
        // $currentUser = $request->user();

        $post = new BlogPost();
        $post->title = $validated['title'];
        $post->content = $validated['content'];
        $post->image_url = $validated['image_url'];
        $post->user_id = $currentUser->id;
        $post->save();
       
        
        $request->session()->flash('status', 'The blog post was created');

        return redirect()->route('posts.show', ['post' => $post->id]);
        
    }

    // _________________________________________________________________

    public function show($id)  {
        // $testDate = Carbon::tomorrow();

        return view('posts.show', [
            'post' => BlogPost::withTrashed()->with('comments')->findOrFail($id), 
            // 'testDate' => $testDate
        ]);
    }

    // _________________________________________________________________

    public function edit($id)  {

        $currentPost = BlogPost::findOrFail($id);

        // ~~> UPDATED: 

        // if (Gate::denies('posts.update', $currentPost)) {
        //     abort(403, 'You can\'t edit this blog post');
        // }

        // ~~> TO:  ( Because we are using registerPolicies() & protected property '$policies')

        if (Gate::denies('update', $currentPost)) {
            abort(403, 'You can\'t edit this blog post');
        }

        // ~~> END

        return view('posts.edit', ['post' => $currentPost] );
    }

    // _________________________________________________________________

    public function update(StorePostRequest $request, $id)  
    {        
        // dd($request->input());

        $currentPost = BlogPost::findOrFail($id);

        // ~~> UPDATED: 

        // if (Gate::denies('posts.update', $currentPost)) {
        //     abort(403, 'You can\'t edit this blog post');
        // }

        // ~~> TO:  ( Because we are using registerPolicies() & protected property '$policies')

        if (Gate::denies('update', $currentPost)) {
            abort(403, 'You can\'t edit this blog post');
        }

        // ~~> END

        $validated = $request->validated();

        $currentPost->fill($validated);

        $currentPost->save();

        $request->session()->flash('status', 'Post has been updated');

        return redirect()->route('posts.show', ['post' => $currentPost->id]);

    }

    // _________________________________________________________________
    
    public function destroy($id)  {


        $currentPost = BlogPost::findOrFail($id);

        // ~~> UPDATED:

        // if (Gate::denies('blogpost.delete', $currentPost)) {
        //     abort(403, 'You can\'t delete this blog post!' );
        // }
        
        // ~~> TO:

        // $this->authorize('posts.delete', $currentPost);

        // ~~> TO:  ( Because we are using registerPolicies() & protected property '$policies')

        $this->authorize('delete', $currentPost);

        // ~~> END

        $currentPost->delete();

        session()->flash('status', 'Blog post was delete');

        return redirect('/posts#post-' . $id);
    }

    // ___________________________________________


    public function restore($id) {

        $Post = BlogPost::withTrashed()->get();
        $currentPost = $Post->find($id);

        // ~~> UPDATED:

        // $this->authorize('posts.restore', $currentPost);
        
        // ~~> TO:  ( Because we are using registerPolicies() & protected property '$policies')

        $this->authorize('restore', $currentPost);

        // ~~> END

        if ($currentPost->trashed()) {
            $currentPost->restore();
            session()->flash('status', 'Blog post was restored');
        }
        
        return redirect('/posts#post-' . $id);
    }
}
