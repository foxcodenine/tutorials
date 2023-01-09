<?php
// $ php artisan  make:controller NewsCommentContorller  --resource

namespace App\Http\Controllers;

use App\Http\Requests\StoreComment;
use App\Models\NewsPost;
use Illuminate\Http\Request;

class NewsCommentContorller extends Controller
{   
    

    // _________________________________________________________________

    public function __construct()
    {
        $this->middleware('auth')->only(['store']);
    }


    // _________________________________________________________________


    // --- NOTE: if:
        // in web.php we specify that comments is a subrout of new by 'news.comments'
        // so in route:list,  news.comments.store has a url of news/{news}/comments
        // and we specify fist params as NewsPost $news
            // then Laravel will call automatically findOrFail on the NewsPost modal
                // this is called Route Model Binding
    public function store(NewsPost $news , StoreComment $request)
    {
        $news->comments()->create([
            'content' => $request->input('content'),
            'user_id' => $request->user()->id
        ]);

        $request->session()->flash('status', 'Comment was created!');

        return redirect()->back();
    }

    // _________________________________________________________________

}
