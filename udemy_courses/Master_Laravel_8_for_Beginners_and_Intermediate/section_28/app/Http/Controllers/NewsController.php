<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNews;
use App\Models\NewsPost;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;

class NewsController extends Controller {

    private $news = [
        1 => [
            "author" => "Andrew Raine, CNN",
            "title"  => "Russia invades Ukraine: Live updates",
            "urlToImage" => "https://cdn.cnn.com/cnnnext/dam/assets/220420195929-mariupol-azovstal-plant-0420-super-tease.jpg",
            "publishedAt" => "2022-04-21T06:20:00Z",
            "content" => 'Maksym Zhorin, co-commander of Ukraine\'s Azov regiment, said in televised remarks that Russian forces "have not stopped shelling areas of Mariupol" amid negotiations on so-called "green corridors" for evacuation from the city, limiting the number of people who can be evacuated. '
        ],
        2 => [
            "author" => "Kelly Gilmore",
            "title"  => "Scott Disick Seemingly Reacts to Ex Sofia Richie's Engagement",
            "urlToImage" => "https://akns-images.eonline.com/eol_images/Entire_Site/20201111/rs_1200x1200-201211103540-1200-Scott_Disick_and_Sofia_Richie-gj.jpg?fit=around%7C1080:566&output-quality=90&crop=1080:566;center,top",
            "publishedAt" => "2022-04-21T06:05:43Z",
            "content" => 'Scott shared a photo of himself on a boat with the caption, "In the 305 just call me good luck chuck." The cheeky message seems to make reference at the movie Good Luck Chuck, a film in which all the women who get romantically involved with the character Charlie Kagan (played by Dane Cook) end up marrying the first person they date after Charlie.'

        ],
        3 => [
            "author" => "Jen Christensen",
            "title"  => "Bulls vs. Bucks - Game Recap",
            "urlToImage" => "https://s.espncdn.com/stitcher/sports/basketball/nba/events/401430246.png?templateId=espn.com.share.1",
            "publishedAt" => "2022-04-21T04:44:35Z",
            "content" => '“No matter what you did in the regular season, this is a brand new start and new mindset," DeRozan said. "You could see it in all the guys. It doesn\'t matter if we\'d lost 20 times to those guys. This is an opportunity for us to compete. We\'ve got to take advantage of it.”'

        ],
    ];

    // _________________________________________________________________

    public function __construct() {
        
        // $this->middleware('auth');
        // $this->middleware('auth')->only(['create', 'edit', 'store', 'edit', 'distroy']);
        $this->middleware('auth')->except(['index', 'show']);
    }


    // _________________________________________________________________


    public function index() {

        // DB::enableQueryLog();
        // $news = NewsPost::all();
        // // $news = NewsPost::with('coMments')->get();

        // foreach ($news as $n) {
        //     foreach ($n->comments as $c) {
        //         echo $c->content;
        //     }
        // }
        // dd(DB::getQueryLog());

        // return view('news.index', ['news' => NewsPost::withCount('comments')->get()]);

        // --- NOTE: we added the latest and mostCommented which are local scope methods:
        return view('news.index', [
            'news'          => NewsPost::latest()->withCount('comments')->get(),
            'mostCommented' => NewsPost::mostCommented()->take(5)->get(),
            'mostActive'    => User::withMostNewsPosts()->take(5)->get(), 
            'mostActiveLastMonth'  => User::withMostNewsPostsLastMonth()->take(5)->get(), 
        ]);

        // --- Commented out to use the scope inside the modal boot method to orderBy (which is a global scope)
        // return view('news.index', ['news' => NewsPost::withCount('comments')->orderBy('created_at', 'desc')->get()]);

        // return view('news.index', ['news' => NewsPost::all()]);
        // return view('news.index', ['news' => NewsPost::orderBy('created_at', 'desc')->take(3)->get()]);
    }

    // _________________________________________________________________


    public function create() {
        // $this->authorize('newspost.create');
        return view('news.create');
    }

    // _________________________________________________________________

    // --- UPDATED: 
    // public function store(Request $request) {
    // --- TO:
    public function store(StoreNews $request) {

        // dd($request);

        // --- Validateing Form input ----------------------------------
        
        // --- UPDATED:       
        // $request->validate([
        //     'title'         => 'required|min:5',
        //     'author'        => ['bail', 'required', 'min:5', 'max:100'],
        //     'publishedAt'   => ['required'],
        //     'urlToImage'    => ['required', 'min:10'],
        //     'content'       => ['required', 'min:10'],
        // ]);

        // --- TO:
        $validated = $request->validated();
        

        // ----- Fetching form input and save them to db ---------------
        
        // --- UPDATED:
        // $newNews = new NewsPost();
        // $newNews->title = $request->input('title');
        // $newNews->author = $request->input('author');
        // $newNews->publishedAt = $request->input('publishedAt');
        // $newNews->urlToImage = $request->input('urlToImage');
        // $newNews->content = $request->input('content');

        // --- TO:

        $newNews = new NewsPost();
        $newNews->title         = $validated['title'];
        $newNews->author        = $validated['author'];
        $newNews->publishedAt   = $validated['publishedAt'];
        $newNews->urlToImage    = $validated['urlToImage'];
        $newNews->content       = $validated['content'];
        
        // $newNews->user_id       = auth()->user()->id;
        $newNews->user_id       = $request->user()->id;
        

        $newNews->save();
     
        // --- ALSO:
        
        // $validated['user_id'] = $request->user()->id;
        // $newNews = NewsPost::create($validated);
        // --- OR:
                
        // $newNews = NewsPost::create([
        //     'title' => $validated['title'], 
        //     'author' => $validated['author'], 
        //     'publishedAt' => $validated['publishedAt'], 
        //     'urlToImage' => $validated['urlToImage'],
        //     'content' => $validated['content'],
        //     'user_id' => $request->user()->id
        // ]);

        // --- ALSO:
        // $validated['user_id'] = $request->user()->id;
        // $newNews = NewsPost::make($validated);
        // $newNews->save();

        
        // --- Create a flash message ----------------------------------

        $request->session()->flash('status', 'The News post was created!');

        // --- Redirecting ---------------------------------------------      

        return redirect()->route('news.show', ['news' => $newNews->id]);
    }

    // _________________________________________________________________

    public function show($id) {
        
        // abort_if(!isset($this->news[$id]), 404);
        // return view('news.show', ['news' => $this->news[$id]]);


        // --- UPDATED: (1)
        // return view('news.show', ['news' => NewsPost::findOrFail($id)]);

        // --- TO: (2) (Adding a relation field )

        // return view('news.show', ['news' => NewsPost::with('comments')->findOrFail($id)]);

        // --- TO: (3) (Adding a local scope to the relation field)

        return view('news.show', ['news' => NewsPost::with([

            'comments' => function($query){ return $query->latest(); } 

        ])->findOrFail($id)]);

        // --- ALSO: (4) (NewsPost Model in comments method you can also do)

        // public function comments() {

        //     return $this->hasMany(Comment::class)->latest();
        // }
    }

    // _________________________________________________________________
    
    public function edit($id) {
        
        // --- UPDATED:
        // $currentNews = NewsPost::findOrFail($id);

        // --- TO:
        $currentNews = NewsPost::with('comments')->findOrFail($id);

        // --------------------------------------

        // Set a denies gate to verify that user owns the newspost
        // Using Gate (Method 1)

        // if (Gate::denies($currentNews)) {
        if (Gate::denies('update', $currentNews)) {
            abort(403, 'You can\'t edit this newspost!');
        }
        // --------------------------------------
        
        return view('news.edit', ['currentNews' => $currentNews]);
    }

    // _________________________________________________________________

    // --- UPDATED:
    // public function update(Request $request, $id) {
    // --- TO:
    public function update(StoreNews $request, $id) {

        // Fetching news to be updated
        $currentNews = NewsPost::findOrFail($id);

        
        // --------------------------------------

        // Set a denies gate to verify that user owns the newspost
        // Using Gate (Method 2)

        $res = Gate::inspect('update', $currentNews);
        // $res = Gate::inspect('newspost.update', $currentNews);
        if (!$res->allowed()) abort($res->code(), $res->message());
        // --------------------------------------

       
        // Validating new inputs
        $validated   = $request->validated();


        // Populating feched news with validated inputs
        $currentNews->fill($validated);


        // Saving to db
        $currentNews->save();


        // Ceateing a flash message
        $request->session()->flash('status', 'News was updated!');
        

        // redirecting to updated news
        return redirect()->route('news.show', ['news' => $currentNews->id]);

    }

    // _________________________________________________________________

    public function destroy($id) {
        // dd($id);

        $currentNews = NewsPost::findOrFail($id);

        // --------------------------------------
        // --- Auth to delete only if user is owner  of newspost 
        // --- Using 'delete-newspost' Gate (Method 3)

        $this->authorize($currentNews);
        // --- OR:
        // $this->authorize('delete', $currentNews);
        // --- OR:
        // $this->authorize('newspost.delete', $currentNews);

        /* How it works / maps
         
         [
             'show'      => 'view',
             'create'    => 'create',
             'store'     => 'create',
             'edit'      => 'update',
             'update'    => 'update',
             'destroy'   => 'delete',
             ]
        */
        // --------------------------------------

        $currentNews->delete();

        session()->flash('status', 'News was deleted!!');
        // --- ALSO: you con use the request() function, ex:
        // request()->session()->flash('status', 'News was deleted!');

        return redirect()->route('news.index');
        
    }

    // --- ALSO: You can pass second parameter to fetch current request
    // public function destroy($id, Request $request) {
    //     // dd($id);

    //     $currentNews = NewsPost::findOrFail($id);
    //     $currentNews->delete();

    //     $request->session()->flash('status', 'News was updated!');
    // }
        // ___________________________________________


        public function restore($id) {
            $News = NewsPost::withTrashed()->get();
            $currentNews = $News->find($id);


            if ($currentNews->trashed()) $currentNews->restore();

            return redirect()->route('news.index');
        }
}