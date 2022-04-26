<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

    

    <header>
        @if(session('status')) {{ session('status') }} @endif
        @yield('header')
    </header>

    <div id="main">
        <nav>@yield('nav')</nav>
        <article> @yield('article') </article>
        <aside>@yield('aside')</aside>
    </div>

    <footer>@yield('footer')</footer>
    
</body>
</html>