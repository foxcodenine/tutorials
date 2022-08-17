<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <title>Laravel App - @yield('title')</title>

    <link rel="icon" href="{{ asset('css/favicon.png') }}">
    <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">
    <script src="{{ asset(mix('js/app.js')) }}" defer></script>
    
</head>
<body>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm mb-3">
        <h5 class="my-0  me-md-auto font-weight-normal">Laravel App</h5>
        <nav class="my-2 my-md-0 mr-md-3">
            <a class="p-2 text-dark" href="{{ route('home.index') }}">{{ __('Home') }}</a>
            <a class="p-2 text-dark" href="{{ route('home.contact') }}">{{__('Contact')}}</a>
            <a class="p-2 text-dark" href="{{ route('posts.index') }}">{{__('Blog Posts')}}</a>
            <a class="p-2 text-dark" href="{{ route('posts.create') }}">{{__('Add')}}</a>

            @guest
                @if (Route::has('register') && !Route::is('register'))
                    <a class="p-2 text-dark" href="{{ route('register') }}">{{__('Register')}}</a>                    
                @endif
                @if (Route::has('login') && !Route::is('login'))
                    <a class="p-2 text-dark" href="{{ route('login') }}">{{__('Login')}}</a>                    
                @endif                
            @else
                <a class="p-2 text-dark" href="{{ route('users.show', ['user' => auth()->user()]) }}">
                    {{__('Profile')}}
                </a>
                <a class="p-2 text-dark" href="{{ route('users.edit', ['user' => auth()->user()]) }}">
                    {{__('Edit Profile')}}
                </a>
                <a class="p-2 text-dark" href="#"
                    onclick="
                        event.preventDefault(); 
                        document.getElementById('logout-form').submit();
                    "
                >
                    {{__('Logout')}} ({{ Auth::user()->name }})</a>
                <form action="{{ route('logout') }}" method="POST" id="logout-form" class="d-none">
                    @csrf
                </form>
            @endguest


        </nav>
    </div>
    <div class="container">
        @if(session('status'))

            <div class="alert alert-success">
                {{ session('status') }}
            </div>

     
    
        @endif

        @yield('content')
    </div>
</body>
</html>