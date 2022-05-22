<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNews;
use App\Models\NewsPost;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
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

        // ____________________________

        // DB::enableQueryLog();
        // $news = NewsPost::all();
        // // $news = NewsPost::with('coMments')->get();

        // foreach ($news as $n) {
        //     foreach ($n->comments as $c) {
        //         echo $c->content;
        //     }
        // }
        // dd(DB::getQueryLog());

        // ____________________________

        // --- NOTE: (we are useing View Composer/ActivityComposer to fetch data)
        
        // $mostCommented = Cache::tags(['news-post'])->remember('newspost-most-commented', now()->addSeconds(60), function() {
        //     return  NewsPost::mostCommented()->take(5)->get();
        // });
        // $mostActive = Cache::tags(['news-post'])->remember('users-most-active', now()->addSeconds(60), function() {
        //     return  User::withMostNewsPosts()->take(5)->get();
        // });
        // $mostActiveLastMonth = Cache::tags(['news-post'])->remember('users-most-active-last-month', now()->addSeconds(60), function() {
        //     return  User::withMostNewsPostsLastMonth()->take(5)->get();
        // });


        // ____________________________


        // return view('news.index', ['news' => NewsPost::withCount('comments')->get()]);

        // --- NOTE: we added the latest and mostCommented which are local scope methods:
        return view('news.index', [
            'news'          => NewsPost::latestWithRelations()->get(),  // <-using a local scope
            // 'mostCommented' => $mostCommented,
            // 'mostActive'    => $mostActive , 
            // 'mostActiveLastMonth'  => $mostActiveLastMonth, 
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

        // ________________________________________________

        // --- UPDATED: (added)
        // $newsPost = Cache::remember("news-post-{$id}", 60, function() use ($id) {
        
        // --- TO:
        $newsPost = Cache::tags(['news-post'])
                    ->remember(
                        
                        "news-post-{$id}", 60, function() use ($id) { 

                            return NewsPost::with( ['comments' => function( HasMany $query){ 

                                return $query->latest();

                            } ] )
                            // ->with('users')
                            // ->with('tags')
                            // ->with('comments.user')
                            ->with('users', 'tags', 'comments.user')
                            ->findOrFail($id);
                        });

        // ________________________________________________
        // --- number of user on page

        $counter = static::numberOfUsersOnPage($id);

        // ________________________________________________

        // --- UPDATED: (1)
        // return view('news.show', ['news' => NewsPost::findOrFail($id)]);

        // --- TO: (2) (Adding a relation field )

        // return view('news.show', ['news' => NewsPost::with('comments')->findOrFail($id)]);

        // --- TO: (3) (Adding a local scope to the relation field)

        return view('news.show', [
            'news' => $newsPost,
            'counter' => $counter
        ]);

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


    // ________________________________________________

    protected function numberOfUsersOnPage ($id) {
        $sessionId  = session()->getId();

        // --- We are saving to set of data in cache. 
        // (1) count of user on the page
        // (2) user that has visited this page, with time last visited.

        // --- These are their cache keys:
        $counterKey = "news-post-{$id}-counter";   // <- key of (1)     
        $usersKey   = "news-post-{$id}-users";     // <- key of (2)  
       
        // --- value of (2) --- we will fill it from existing (2) cache 
        $usersUpdate = [];

        // --- existing (2) (users that had visited this page => last time visit)
        $users = Cache::tags(['news-post'])->get($usersKey, []);

        // --- we will increment add this to value of cashe (1)
        $difference = 0;

        $now = now();

        // --- Check (2) if user visited this page more than 1 min, decrement difference 
        // --- Else add user to new (2) value that is Array $usersUpdate with last viset time
        foreach($users as $userSessionId => $lastVisites) {

            if ($now->diffInMinutes($lastVisites) >= 1) {
                $difference--;

            } else {
                $usersUpdate[$userSessionId] = $lastVisites;
            }
        }

        // If this is a new User visiting         or      this is a return user visiting this page
        if (!array_key_exists($sessionId, $users) || $now->diffInMinutes($users[$sessionId]) >= 1) {
            
            $difference++;
            // Add him to difference.
            // However if this user has visited this page less than a minute ago he is already added.
        }

        // Update (2) by adding or updating this user to (2) with current time.
        $usersUpdate[$sessionId] = $now;

        // Setting (2) in cache
        Cache::tags(['news-post'])->forever($usersKey, $usersUpdate);

        // Updating page counter (1)  to cache by adding the difference to it
        if (!Cache::tags(['news-post'])->has($counterKey)) {
            Cache::tags(['news-post'])->forever($counterKey, 1);     // <- if this is 1st user visiting this page,  
                                                //    init pageCounter by set it to 1.
        } else {
            Cache::tags(['news-post'])->increment($counterKey, $difference);
        }

        return Cache::tags(['news-post'])->get($counterKey);

    }
    // ________________________________________________
}
