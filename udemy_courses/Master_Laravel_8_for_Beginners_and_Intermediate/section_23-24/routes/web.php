<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use phpDocumentor\Reflection\Types\Null_;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// --- UPDATED:
// Route::get('/', function () {
//     return view('welcome');
// })->name('home.index');

// --- TO:
// Route::get('/', function () {
//     return view('home.index');
// })->name('home.index');

// --- TO:
Route::view('/', 'home.index')->name('home.index');
// Route::view('/', 'home.index')->name('home.index')->middleware('auth');

// --- TO:
// Route::get('/', [HomeController::class, 'home'])->name('home.index')
    //  ->middleware('auth')
    //  ;


// ---------------------------------------------------------------------


// Route::get('/contacts', function () {

//     $myContacts = [
//         'Dorothy Cassar' => 99887744,
//         'Danine Bartolo' => 88774455,
//         'Hanna Demicoli' => 77665544,
//         'Steph Abela'    => 66554433
//     ];
    
//     return view('home.contacts', ['myContacts' => $myContacts]);
// })->name('home.contacts');


Route::get('/contacts', [HomeController::class, 'contacts'])->name('home.contacts');

Route::get('/about', AboutController::class);

// ---------------------------------------------------------------------

// Route::resource('/news', NewsController::class);
// Route::resource('/news', NewsController::class)->except('index', 'show');
Route::resource('/news', NewsController::class)
        ->only('index', 'show', 'create', 'store', 'edit', 'update', 'destroy');


// ---------------------------------------------------------------------


$posts = [
    1 => [
        'title' => 'Intro to Laravel',
        'content' => 'This is a short intro to Laravel',
        'is_new' => True,
        'has_comments' => True
    ],
    2 => [
        'title' => 'Intro to PHP',
        'content' => 'This is a short intro to PHP',
        'is_new' => False
    ],
    3 => [
        'title' => 'I like Laravel',
        'content' => 'The PHP Framework For Web Artisans',
        'is_new' => Null
    ]
];

// ---------------------------------------------------------------------

Route::get('/posts', function () use ($posts) {

    $name = [];

    $blogs = [
        1 => '1st blog',
        2 => '2nd blog',
        3 => '3rd blog',
        4 => '4th blog',
        3 => '5th blog',
    ];
    
    return view('post.index', ['posts' => $posts, 'name' =>$name, 'blogs' =>$blogs]);

})->name('post.index');


Route::get('/post/{id}', function ($id) use ($posts) {

    abort_if(!isset($posts[$id]), 404);

    return view('post.show', ['post' => $posts[$id], 'noContent' => '']);

})->name('post.show');


// ---------------------------------------------------------------------


Route::get('/recent-post/{days_ago?}', function ($days=20) {
    
    $d = $days == 1 ? 'day' : 'days';

    return "Post from {$days} {$d} ago";

})->where([
    'days_ago' => '\d+'
])->name('home.recent.index');


// ---------------------------------------------------------------------

// Response, Redirect, Back, Named route and Away 


Route::get('/fun/responses', function() use($posts) {
    return response($posts, 201)
            // ->view()
            ->header('Content-Typr', 'application/json')
            ->cookie('MY_COOKIE', 'Laravel Course', 3600);
});


Route::get('/fun/redirect', function() {
    return redirect('/contacts');
});


Route::get('/fun/back', function() {
    return back();
});


Route::get('/fun/named-route', function() {
    return redirect()->route('post.show', ['id'=>1]);
});


Route::get('/fun/away', function() {
    return redirect()->away('https://www.google.com/');
});


// ---------------------------------------------------------------------
// Json


Route::get('/fun/json', function() use ($posts) {
    return response()->json($posts);

});


// ---------------------------------------------------------------------
// Download files


Route::get('/fun/download', function() {
    return response()->download(public_path('/rabbit.jpg'), 'cute.jpg', []);
});


// ---------------------------------------------------------------------
// Grouping Routes


Route::prefix('/more')->name('more.')->group( function() {

    Route::get('/home', function() {
        return view('more.index');
    })->name('index');

    Route::get('/download', function() {
        return response()->download('more.webp');
    })->name('download');
});


// ---------------------------------------------------------------------
// Request Input (Request Method as GET and POST)

// test data: http://127.0.0.1:8000/request-boolean?number=123&age=37&page=20&first=chris&last=farrugia&remember=on

Route::get('/request-all', function() {

    dd(request()->all());

    return '...request all!';
});


Route::get('/request-input', function() {

    dd((int) request()->input('page', 1));   
});


Route::get('/request-query', function() {

    dd((int) request()->only('age', null));
});

Route::get('/request-only', function() {

    dd( request()->only(['first', 'last']));   
});


Route::get('/request-except', function() {
    dd( request()->except(['age']));
});


Route::get('/request-boolean', function() {
    dd( request()->boolean('remember'));
});


/** Others: 
 * 
 *  if ($request->has(['name'])) {
 *      //
 *  }
 * 
 *  if ($request->missing(['name'])) {
 *      //
 *  }
 * 
 *  $request->whenHas('name', function($input) {
 *      //
 *  });
 * 
 * and check https://laravel.com/docs/9.x/requests#retrieving-input
 * 
 */

//  ____________________________________________________________________

Auth::routes();






