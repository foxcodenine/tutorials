<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width= , initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel App - @yield('title')</title>

    {{-- // --- UPDATED: --}}
    {{-- <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <script src="{{ asset('js/app.js') }}" defer ></script> --}}

    {{-- // --- TO: --}}
    <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">
    <script src="{{ asset(mix('js/app.js')) }}" defer ></script>

</head>
<body>

    <div  class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm mb-3 " >
        <h5  class="my-0  me-md-auto font-weight-normal">Laravel App</h5>
   
        <nav class="my-2 my-md-0 mr-md-3">
            <a class="p-2 text-dark" href="{{ route('home.index') }}">Home</a>
            <a class="p-2 text-dark" href="{{ route('home.contacts') }}">Contact</a>
            <a class="p-2 text-dark" href="{{ route('news.index') }}">News Post</a>
            <a class="p-2 text-dark" href="{{ route('news.create') }}">Add News Post</a>

            @guest
                @if (Route::has('register'))
                <a class="p-2 text-dark"  href="{{ route('register') }}">Register</a>
                @endif
                <a class="p-2 text-dark"  href="{{ route('login') }}">Login</a>
            @else
                <a  class="p-2 text-dark" href="{{ route('logout') }}"                    
                    onclick="event.preventDefault(); document.getElementById('logout-form').submit();" >
                    Logout {{ Auth::user()->name }}
                </a>

                <form   id="logout-form" action="{{ route('logout') }}" 
                        method="POST"    style="display: none" >
                    @csrf 
                </form>
            @endguest
            {{-- you can also use @auth and @endauth --}}
        </nav>
    </div>

    <div class="container">

        @if(session('status'))
        <div class="alert alert-success">
            {{session('status')}}
        </div>
        @endif

        @yield('content')
        @yield('article')
    </div>

</body>
</html>