<?php

use App\Http\Controllers\Api\BookableAvailabilityController;
use App\Http\Controllers\Api\BookableController;
use App\Http\Controllers\Api\BookablePriceController;
use App\Http\Controllers\Api\BookableReviewController;
use App\Http\Controllers\Api\BookingByReviewController;
use App\Http\Controllers\Api\CheckoutCountroller;
use App\Http\Controllers\Api\ReviewController;
use App\Models\Bookable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Spatie\FlareClient\Api;

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

// ~~> MOVED TO: routes/web.php ----------------------------------------

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// ---------------------------------------------------------------------

// Route::get('bookables', function (Request $request) {
//     return Bookable::all();    
// });

// Route::get('bookables/{id}/{optional?}', function(Request $request, $id, $opt=null) {
//     return Bookable::findOrFail($id);
// });



Route::apiResource('bookables', BookableController::class)
    // ->only('show')
    // ->except('show')
    ;

Route::get('bookables/{id}/availability', BookableAvailabilityController::class)
    ->name('bookables.availablility.show');

Route::get('bookables/{id}/reviews', BookableReviewController::class)
    ->name('bookables.reviews.index');

Route::get('/booking-by-review/{reviewKey}', BookingByReviewController::class)
    ->name('booking.by-review.show');
    
Route::apiResource('reviews', ReviewController::class)->only(['show', 'store']);

Route::get('bookables/{id}/price', BookablePriceController::class)->name('bookables.price.show');

Route::post('checkout', CheckoutCountroller::class)->name('checkout');

