<?php

use App\Http\Controllers\Api\BookableAvailabilityController;
use App\Http\Controllers\Api\BookableController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

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