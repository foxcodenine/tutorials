
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