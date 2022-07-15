<!-- Laavel docs: https://laravel.com/docs/9.x/routing -->

<!-- Check the larave api docs for Illuminate\Support\Facades\Route; -->
<!-- https://laravel.com/api/9.x/Illuminate/Support/Facades/Route.html -->

```php
            @guest
                @if (Route::has('register') && !Route::is('register'))
                    <a class="p-2 text-dark" href="{{ route('register') }}">Register</a>                    
                @endif
                @if (Route::has('login') && !Route::is('login'))
                    <a class="p-2 text-dark" href="{{ route('login') }}">Login</a>                    
                @endif                
            @else
```

    Route::has('register')
    Route::is('register')