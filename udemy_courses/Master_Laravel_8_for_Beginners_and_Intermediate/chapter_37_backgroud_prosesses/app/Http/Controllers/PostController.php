<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use App\Http\Requests\StorePostRequest;
use App\Models\BlogPost;
use App\Models\Comment;
use App\Models\Image;
use App\Models\User;
use Carbon\Carbon;
use COM;
use Illuminate\Contracts\Session\Session as SessionSession;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;

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

        // DB::connection()->enableQueryLog();
        $posts = BlogPost::withAllRelations()    // <~~ withAllRelations is a local scope
                    ->withCount('comments')
                    // ->orderBy('created_at', 'desc') // <~~ We are using a global scope instead                    
                    ->get();

                    // dd($posts->count());


        // dd(DB::getQueryLog());

        // --- Adding user's trashed Post if user is loged in
        if (Auth::check()) {

            $trashedByUser = BlogPost::onlyTrashed()
                        ->withAllRelations()      // <~~ this is a local scope
                        ->withCount('comments')                   
                        ->where('user_id', Auth::user()->id)
                        ->get();
            
            $posts = $posts->merge($trashedByUser)
                           ->sortByDesc('id')   // <~~ Notice here we are overwriting the global scope
                           ;
        }

        // ---- Side bar Data ------------------------------------------

        // ~~> NOTICE: This is not required anymore, useing a view composer instead

        // $mostCommented = Cache::tags(['blog-post'])->remember('most-commented-blog-posts', Carbon::now()->addSecond(env('CACHE_TIMEOUT')), function() {
        //     return BlogPost::mostCommented()->take(5)->get();
        // }); 

        // $mostActive = Cache::tags(['blog-post'])->remember('most-active-users', Carbon::now()->addSecond(env('CACHE_TIMEOUT')), function() {
        //     return User::withMostBlogPosts()->take(5)->get();
        // });

        // $mostActiveLastMonth = Cache::tags(['blog-post'])->remember('most-active-users-last-month', Carbon::now()->addSecond(env('CACHE_TIMEOUT')), function() {
        //     return User::mostActiveLastMonth()->take(5)->get();
        // });

        // -------------------------------------------------------------

        return view('posts.index', [
            'posts' => $posts,
            // 'mostCommented' => $mostCommented,
            // 'mostActive' => $mostActive,
            // 'mostActiveLastMonth' => $mostActiveLastMonth,
        ]);
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

        $new_post = BlogPost::create([
            'title' => $validated['title'],
            'content' => $validated['content'],
            'user_id' => $currentUser->id,
            // 'image_url' => ''
        ]);


        // ~~> NOTE: Adding an image to blog post ----------------------

        $hasFile = $request->hasFile('image_file');        

        // Saving image file and updating the $new_post->image_url        
        if ($hasFile) {

            $file               = $request->file('image_file');
            $fileName           = $new_post->id . '-blogpost.' . $file->guessExtension();
            $fileRelativePath   =  $file->storeAs('thumbnails', $fileName);

            // $fileAbsolutPath    =  Storage::url($fileRelativePath);

            $newImage = Image::make([ 'path' => $fileRelativePath]);
            $new_post->image()->save($newImage);

            // https://laravel.com/docs/9.x/filesystem#storing-files
        }
 
        // ~~> END: Adding an image to blog post -----------------------

       
        $request->session()->flash('status', 'The blog post was created');

        return redirect()->route('posts.show', ['post' => $new_post->id]);
        
    }

    // _________________________________________________________________

    public function show($id)  {
        // $testDate = Carbon::tomorrow();
        
        // _____________________________________________________________
        // $post = BlogPost::withTrashed()->with('comments')->findOrFail($id);
        
        // DB::connection()->enableQueryLog();
        // $post = BlogPost::withTrashed()->with(['comments' => function(HasMany $query) {

        //     return $query->latestComments();    // <~~ latest() is defined in local scope scopeLatesed 

        // } ])->findOrFail($id);
        // dd(DB::getQueryLog());
        // _____________________________________________________________

        // $post = BlogPost::withTrashed()->findOrFail($id);
        $post = Cache::tags(['blog-post'])->remember("blog-post-{$id}", Carbon::now()->addSecond(env('CACHE_TIMEOUT')), function() use ($id) {
            return BlogPost::withTrashed()->withAllRelations()->findOrFail($id);
        });

        $comments = Cache::tags(['blog-post'])->remember("blog-post-{$id}-comments", Carbon::now()->addSecond(env('CACHE_TIMEOUT')), function() use ($id) {
            return Comment::where('commentable_id', $id)->where('commentable_type', BlogPost::class)
                            ->latestComments()->with('user')->with('tags')->get();
        });


        // _____________________________________________________________

        // ~~~ Cache Counter Functionality
        // ~~~ Follow the image cache-counter in note file
        
        // This are the keys we use in cashe
        $cachePostCounterKey = "blog-post-{$id}-counter";
        $cachePostUsersKey = "blog-post-{$id}-users";

        // The users current in cache that are visiting this blog post 
        $blogPostUsers = Cache::tags(['blog-post'])->get($cachePostUsersKey, []);

        // The users that are not expiered and will be save in cache for this blog post 
        $blogPostUsersUpdate = [];

        // This will be used to update the counter
        $difference = 0;

        // current datetime
        $now = now();


        // ~~~ part 1
        // Current user session Id
        $currentUserSessionId = session()->getId();

        // ~~~ part 2
        foreach($blogPostUsers as $sessionId => $lastVisted) {

            if($now->diffInMinutes($lastVisted) >= 1) {
                --$difference;

            } else {
                $blogPostUsersUpdate[$sessionId] = $lastVisted;
            }
        }

        // ~~~ part 3

        if (!array_key_exists($currentUserSessionId, $blogPostUsers)) {
            ++$difference;
            
        } elseif( $now->diffInMinutes($blogPostUsers[$currentUserSessionId]) >= 1 ) {
            ++$difference;
        }

        // ~~~ part 4
        $blogPostUsersUpdate[$currentUserSessionId] = $now;


        // ~~~ part 5
        Cache::tags(['blog-post'])->forever($cachePostUsersKey, $blogPostUsersUpdate);


        // ~~~ part 6 and 7
        if (Cache::tags(['blog-post'])->has($cachePostCounterKey)) {
            Cache::tags(['blog-post'])->increment($cachePostCounterKey, $difference);

        } else {
            Cache::tags(['blog-post'])->forever($cachePostCounterKey, 1);
        }
        

        $counter = Cache::tags(['blog-post'])->get($cachePostCounterKey);


        // _____________________________________________________________
        
 
        
        return view('posts.show', [
            'post' => $post,
            'comments' => $comments,
            'counter' => $counter
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

       
        
        // ~~> NOTE: Updating or adding an image to blog post ----------

        $hasFile = $request->hasFile('image_file');

        if ($hasFile) {    
            
            if ($currentPost->image && !in_array(substr($currentPost->image, 0, 7) , ['http://', 'https:/'])) {
                Storage::delete($currentPost->image->path);
            }

            $file               = $request->file('image_file');
            $fileName           = $currentPost ->id . '-blogpost.' . $file->guessExtension();
            $fileRelativePath   =  $file->storeAs('thumbnails', $fileName);

            $image =  Image::where('blog_post_id', $currentPost ->id)->first();

            if ($image) {
                $image->path = $fileRelativePath; 
                $image->save(); 
                
            } else {   
                $newImage = Image::make([ 'path' => $fileRelativePath]);
                $currentPost->image()->save($newImage);
            }

            // https://laravel.com/docs/9.x/filesystem#storing-files
        }
        // ~~> END Updating or adding an image to blog post ------------


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


    // ___________________________________________


    public function scopeMostCommented(Builder $query)  {
        return $query->with('comments')->order_by('comments_count', 'desc');
    }
}
