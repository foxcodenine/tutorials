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
    <!-- @php
    try {
    \DB::connection()->getPDO();
        dump('Database connected: ' . \DB::connection()->getDatabaseName());
    }

    catch (\Exception $e) {
        dump('Database connected: ' . 'None');
    }
    @endphp -->


    <div id="dashboard" class="flex min-h-screen text-2xl">

        <aside id="side-bar" class="flex flex-col w-[300px] ">
            <div id="top-side-bar"class="flex space-x-[40px] items-center justify-center bg-mgablue h-[60px] ">
                <img src="{{asset('images/logo2x.png')}}" alt="" class="w-[150px]">
                <div class="flex items-center justify-center w-[36px] h-[34px] bg-mgadark">
                    <svg viewBox="0 0 100 100" class="fill-white w-4">
                        <use xlink:href="{{asset('svg/sprite.svg')}}#home"></use>
                    </svg>
                </div>
            </div>
            <div id="bottom-side-bar"class="flex items-center justify-center flex-1 bg-mgadark text-slate-200">
                Sidebar
            </div>
        </aside>

        <div class="flex flex-col w-[100%] border">
            <div id="top-side-bar"class="flex items-center justify-center bg-white h-[60px]">Navbar</div>
            <div id="bottom-side-bar"class="flex items-center justify-center flex-1 bg-slate-200 bg-opacity-95">Main</div>
        </div>

    </div>
     
    <!-- <div id="app"></div>

    </body> -->
</html>
