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

Route::get('/', function () {
    // return view('welcome');
    return view('home.index', []);
})->name('home.index');


Route::get('/contact', function() {
    return view('home.contact', []);
    // return 'Contacts Page';
})->name('home.contact');


Route::get('/posts/{id}', function($id){
    return 'Post number ' . $id;
});

Route::get('/recent-posts/{days_ago?}', function ($daysAgo=0) {
    $date = new DateTime('now');
    $days = new DateInterval("P{$daysAgo}D");
    $date->sub($days);
    return 'Post from ' . $date->format('l, d M Y');
})->name('post.resent.index');