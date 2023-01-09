<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel App - @yield('title')</title>
    <style>
            * {box-sizing:border-box;}
            body{display:flex;min-height:100vh;flex-direction:column;margin:0;}
            #main{display:flex;flex:1;}
            #main>article{flex:1;}
            #main>nav,#main>aside{flex:0 0 10vw;background:beige;}
            #main>nav{order:-1;}
            header,footer{background:yellowgreen;height:20vh;}
            header,footer,article,nav,aside{padding:1em;}
    </style>
</head>
<body>

    <header>@yield('header')</header>

    <div id="main">
        <nav>@yield('nav')</nav>
        <article> @yield('article') </article>
        <aside>@yield('aside')</aside>
    </div>

    <footer>@yield('footer')</footer>
    
</body>
</html>