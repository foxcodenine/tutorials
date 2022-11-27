<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookableAvailabilityRequest;
use App\Models\Bookable;
use Illuminate\Http\Request;

class BookableAvailabilityController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke($id, BookableAvailabilityRequest $request)
    {
        $bookable = Bookable::findOrFail($id); 
        
        return $bookable->availableFor( $request->from, $request->to) 
                ? response()->json([], 200) 
                : response()->json([], 404);
    }
}
