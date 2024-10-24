<?php

use App\Http\Controllers\Api\V1\PostCommentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::prefix('v1')
    ->name('api.vi.')
    ->namespace('App\Http\Controllers\Api\V1')
    ->group(function () {

        Route::get('status', function () {
            return response()->json(['status' => 'OK']);
        })->name('status');

        Route::resource('posts.comments', 'PostCommentController');

} );

Route::prefix('v2')
    ->group(function () {

        Route::get('/status', function () {
            return response()->json(['status' => true]);
        });

} );

Route::fallback(function () {
    return response()->json([
        'message' => 'Page Not found'
    ], 404);
} )->name('api.fallback');
