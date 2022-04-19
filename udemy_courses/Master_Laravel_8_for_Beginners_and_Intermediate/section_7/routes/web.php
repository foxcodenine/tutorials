<?php

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

// Route::get('/', function () {
//     return view('welcome');
// })->name('home.index');


// Route::get('/', function () {
//     return view('home.index');
// })->name('home.index');


Route::view('/', 'home.index');

// -----------------------------------

Route::get('/contacts', function () {
    
    return view('home.contacts', []);
})->name('home.contacts');

// -----------------------------------
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

// -----------------------------------

Route::get('/recent-post/{days_ago?}', function ($days=20) {
    
    $d = $days == 1 ? 'day' : 'days';

    return "Post from {$days} {$d} ago";

})->where([
    'days_ago' => '\d+'
])->name('home.recent.index');

// -----------------------------------
