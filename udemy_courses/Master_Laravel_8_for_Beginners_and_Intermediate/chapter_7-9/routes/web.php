<?php

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

$posts = [
    1 => [
        'title' => 'Intro to Laravel',
        'content' => 'This is a short intro to Laravel',
        'is_new' => true,
    ],
    2 => [
        'title' => 'Intro to PHP',
        'content' => 'This is a short intro to PHP',
        'is_new' => false,
    ],
    3 => [
        'title' => 'Vue is Cool',
        'content' => 'This is a short intro to Vue',
    ],
];

// _____________________________________________________________________


Route::get('/', function () {
    // return view('welcome');
    return view('home.index', []);
})->name('home.index');



Route::get('/contact', function() {
    return view('home.contact', []);
    // return 'Contacts Page';
})->name('home.contact');



Route::get('/posts/{id}', function($id) use ($posts) {

    abort_if(!isset($posts[$id]), 404);
    return view('posts.show', ['post' => $posts[$id]]);
})->name('posts.show');


Route::get('/posts', function() use ($posts) {
    return view('posts.index', ['posts' => $posts]);
})->name('posts.index');



Route::get('/recent-posts/{days_ago?}', function ($daysAgo=0) {
    $date = new DateTime('now');
    $days = new DateInterval("P{$daysAgo}D");
    $date->sub($days);
    return 'Post from ' . $date->format('l, d M Y');
})->name('post.resent.index');


Route::view('/welcome', 'welcome', ['name' => 'Chris']);