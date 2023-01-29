<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

        {{-- css & js build --------------------------------------- --}}
        @php 
            $path = public_path('build/assets');
            $files = (array)  \File::allFiles($path);
            
            if (strstr($files[0], '.') === '.css') {
                $cssFile = $files[0]; $jsFile = $files[1];        
            } else {
                $cssFile = $files[1]; $jsFile = $files[0];                
            }
            $cssFile = strrchr($cssFile, '/'); $jsFile = strrchr($jsFile, '/');
        @endphp
        {{-- <link rel="stylesheet" href="{{asset('build/assets'. $cssFile)}}">
        <script src="{{asset('build/assets'. $jsFile)}}" defer></script> --}}

        {{-- css & js dev ----------------------------------------- --}}
        <script type="module" src="http://kubernetes.docker.internal:5173/@vite/client"></script>
        <link rel="stylesheet" href="http://kubernetes.docker.internal:5173/resources/sass/app.scss" />
        <script type="module" src="http://kubernetes.docker.internal:5173/resources/js/app.js"></script>

    </head>
    <body>



     @php
        try {
        \DB::connection()->getPDO();
            dump('Database connected: ' . \DB::connection()->getDatabaseName());
        }
        
        catch (\Exception $e) {
            dump('Database connected: ' . 'None');
        }
     @endphp



        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Login</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Register</a>
                        @endif
                    @endauth
                </div>
                
            @endif
            {{env('DB_HOST')}}

            <div class="content">
                <div class="title m-b-md">
                    MGA Health Check App
                </div>

                <div class="links">
                    <a href="https://laravel.com/docs">Docs</a>
                    <a href="https://laracasts.com">Laracasts</a>
                    <a href="https://laravel-news.com">News</a>
                    <a href="https://blog.laravel.com">Blog</a>
                    <a href="https://nova.laravel.com">Nova</a>
                    <a href="https://forge.laravel.com">Forge</a>
                    <a href="https://vapor.laravel.com">Vapor</a>
                    <a href="https://github.com/laravel/laravel">GitHub</a>
                </div>
            </div>
        </div>

        <div id="app"></div>

    </body>
</html>
