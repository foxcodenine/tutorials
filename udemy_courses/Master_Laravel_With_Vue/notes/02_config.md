
<!-- --------------------------------------------------------------- -->
### index fields can only have a max of 191 characters in mySQL

    AppServiceProvider.php:

        use Illuminate\Support\Facades\Schema

        boot() {
            Schema::defaultStringLength(191);
            
        }

<!-- --------------------------------------------------------------- -->

### in model you can specify the table name as a protected property

    class Bookable {
        
        protected $table = 'bookables';
        protected $fillable = ['title', 'description'];

        ...
    }

<!-- --------------------------------------------------------------- -->

### Apache Alias (subdirectory) with Laravel Issue

if you are using a subdirectory for your site, and alias with apache like:

        www.foxcode.io/subdir

        Alias /subdir /var/www/projects/Master_Laravel_With_Vue/014_laravelbnb/public

you need to fix the Route::middleware('api')->prefix('api') in your
RouteServiceProvider.php and add the subdirectory to the prefix method:

            Route::middleware('api')
                ->prefix('subdir/api')                                <~~
                ->group(base_path('routes/api.php')

then you can access your api as:

        www.foxcode.io/subdir/api/api_route_name

<!-- --------------------------------------------------------------- -->

### Sanctun config

the 'config/sanctum.php' is the sanctun config file. If you are using your 
own server as apache and domane you need to added to 'stateful' by setting 
the envierment variable 'SANCTUM_STATEFUL_DOMAINS' in the .env file as:

    SANCTUM_STATEFUL_DOMAINS="laravel-vue.local,other-domaine"

<!-- --------------------------------------------------------------- -->

### CORS support for SPA

in 'config/cors.php' file if you are using your own server as apache and your
domane, you need to set the  'supports_credentials' to 'true':

    'supports_credentials' => true,

### And in Axios

also in 'resources/js/bootstrap.js' you need to add

    window.axios.defaults.withCredentials = true;



<!-- --------------------------------------------------------------- -->

### Laravel redirect on login (and Vue spa)

In the LoginController.php laravel define the auto redirect route on in:

    protected $redirectTo = RouteServiceProvider::HOME;

However if you look in the 'AuthenticatesUsers' Trait in the 'sendLoginResponse' 
method you'll find that it will redirect only if the 'authenticated' returns false.

Since this method is empty in the Trait it will always return false, however if
you are using Vue with Laravel you need to overwrite it in the controller and
redirect to your vue page accordingly. (look in the LoginController.php)


<!-- --------------------------------------------------------------- -->

### Data Wrapping

By default, your outermost resource is wrapped in a data key when the 
resource response is converted to JSON. 

    {
        "data": [
            {
                "id": 1,
                "name": "Eladio Schroeder Sr.",
                "email": "therese28@example.com"
            },
        ]
    }            

If you would like to use a custom key instead of data, you may define a $wrap 
attribute on the resource class:

    class UserResource extends JsonResource
        {
            public static $wrap = 'user';
        }

If you would like to disable the wrapping of the outermost resource, you 
should invoke the "withoutWrapping" method on the base
"Illuminate\Http\Resources\Json\JsonResource" class.

    class AppServiceProvider extends ServiceProvider
    {
        public function boot()
        {
            JsonResource::withoutWrapping();
        }
    }

<!-- --------------------------------------------------------------- -->
### Axios Interceptors 

You can intercept requests or responses before they are handled
by then or catch.

The below example, is in the 'app.js' file where we are using an  
interceptors to log the user out if he is not authenticated.


```js
    window.axios.interceptors.response.use (
        response => {
            return response;
        },
        error => {
            if (401 === error.response.status) {
                store.dispatch("logout");
                // Note - we have access to the store because we are  
                //        importing it above.
            }
            return Promise.reject(error);
            // Here we are making sure that the promis is being rejected
            // after intercepting it 
        }
    )
```

https://axios-http.com/docs/interceptors
