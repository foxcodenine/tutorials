<?php

namespace App\Exceptions;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }



    // * Note. On laravel 8 this method did not exists.
    // * I overwrite have over written parent method by doing so:
    
    public function render($request, Throwable $e) 
    {
        if ( $request->expectsJson() && $e instanceof ModelNotFoundException ) {
            return Route::respondWithRoute('api.fallback');
        }

        if ($request->expectsJson()) {

            $array = [
                'message' => $e->getMessage(), 
                'exception_name' => substr(strrchr(get_class($e), '\\'), 1 )
            ];


            if (method_exists($e, 'getStatusCode')) {

                $status_code = $array['status_code'] = $e->getStatusCode(); 

                return response()->json([ $array ], $status_code);   
            } 
      
            return response()->json([ $array ]);
      

        }

        return parent::render($request, $e);
    }

    // * Also on laravel 9 you need to use:
    // * Illuminate\Routing\Router::respondWithRoute                    and not:
    // * Illuminate\Support\Facades\Route::respondWithRoute

}

