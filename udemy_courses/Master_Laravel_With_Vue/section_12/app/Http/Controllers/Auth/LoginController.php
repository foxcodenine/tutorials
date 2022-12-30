<?php

namespace App\Http\Controllers\Auth;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }


    // --- overwrite method --------------------------------------------
    //     (vedio 298, Master Larave with Vue, about 10:00)
    protected function authenticated(Request $request, $user)
    {
        // - Check whether the request is made through an AJAX call.
        //   If it is, just return a 204 response, with no redirection
        if ($request->isXmlHttpRequest()) {
            return response(null, 204);
        }

        // The HTTP 204 No Content success status response code
        // indicates that a request has succeeded, but that the client
        // doesn't need to navigate away from its current page.
    }



    //  - Similar to Login - we are removing the default redirection.
    protected function loggedOut(Request $request)
    {
        
        if ($request->isXmlHttpRequest()) {
            
             return response(null, 204);
        }
    }
    // -----------------------------------------------------------------
}
