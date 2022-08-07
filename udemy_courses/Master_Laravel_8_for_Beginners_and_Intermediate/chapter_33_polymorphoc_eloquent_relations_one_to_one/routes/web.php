<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostCommentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostTagController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

// _____________________________________________________________________

Route::get('/{home?}', [HomeController::class, 'home'])
    ->name('home.index')
    ->where('home', '^(home)$')
    // ->middleware('auth')
    ;

Route::get('/contact', [HomeController::class, 'contact'])->name('home.contact');

Route::get('/secret',  [HomeController::class, 'secret'])
    ->name('home.secret')
    ->middleware('can:home.secret');

Route::get('/single', AboutController::class)->name('single');

Route::view('/welcome', 'welcome', ['name' => 'Chris'])->name('welcome');

Route::get('/posts/restore/{id}', [PostController::class, 'restore'])
    ->name('posts.restore')
    ->middleware('can:restore,id')
    ;

Route::resource('/posts', PostController::class)->only(
    ['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']
);
// Route::resource('posts', PostController::class)->except(['index', 'show']);

Auth::routes();

Route::get('/posts/tag/{tag}', [PostTagController::class, 'index'])->name('posts.tag.index');

Route::resource('posts.comments', PostCommentController::class)->only(['store', 'index']);

Route::resource('users', UserController::class)->only(['show', 'edit', 'update']);

// _____________________________________________________________________

// $posts = [
//     1 => [
//         'title' => 'Intro to Laravel',
//         'content' => 'This is a short intro to Laravel',
//         'is_new' => true,
//     ],
//     2 => [
//         'title' => 'Intro to PHP',
//         'content' => 'This is a short intro to PHP',
//         'is_new' => false,
//     ],
//     3 => [
//         'title' => 'Vue is Cool',
//         'content' => 'This is a short intro to Vue',
//     ],
// ];

// _____________________________________________________________________


// Route::get('/posts/{id}', function($id) use ($posts) {

//     abort_if(!isset($posts[$id]), 404);
//     return view('posts.show', ['post' => $posts[$id]]);
// })->name('posts.show');


// Route::get('/posts', function() use ($posts) {
//     return view('posts.index', ['posts' => $posts]);
// })->name('posts.index');



// Route::get('/recent-posts/{days_ago?}', function ($daysAgo=0) {
//     $date = new DateTime('now');
//     $days = new DateInterval("P{$daysAgo}D");
//     $date->sub($days);
//     return 'Post from ' . $date->format('l, d M Y');
// })->name('post.resent.index');


// Route::get('/', [HomeController::class, 'home'])->name('home.index');
// Route::get('/contact', [HomeController::class, 'contact'])->name('home.contact');

// Route::get('/single', AboutController::class)->name('single');

// Route::view('/welcome', 'welcome', ['name' => 'Chris'])->name('welcome');

// Route::get('/fun/responses', function() use ($posts) {

//     return response($posts, 201)
//         ->header('Content-Type', 'application/json')
//         ->cookie('MyLaravelCookie', 'Piotr Jura', 3600);
// })->name('fun.responses');


// Route::get('/fun/redirect', function() {
//     return redirect('/contact');
// })->name('fun.redirect');


// Route::get('/fun/named-route', function() {
//     return redirect()->route('posts.show', ['id' => 1]);
// })->name('fun.named-route');



// Route::get('/fun/back', function() {
//     return back();
// })->name('fun.back');


// Route::get('/fun/away', function() {
//     return redirect()->away('https://foxcode.io/');
// })->name('fun.away');


// Route::prefix('/fun')->name('fun.')->group(function() use ($posts)  {

//     Route::get('/json', function() use ($posts) {
//         return response()->json($posts);
//     })->name('json');
        
//     Route::get('/download', function() {
//         return response()->download(public_path('/images/fox.jpg'));
//     })->name('download');
// });

// Route::match(['GET', 'POST'], '/fun/request', function() {

//     if(request()->isMethod('POST')) {
//         // dd(request()->post());
//         // dd(request()->input());
//         // dd(request()->get('name'));
//         // dd(request()->all());
//         dd(request()->query());
//     }

//     if(request()->isMethod('GET')) {
//         echo request()->url();
//     }

//     return view('fun.request');
// })->name('fun.request');


