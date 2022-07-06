@extends('layout.app2')

@section('title', 'Home')
    
@section('article')
    <h2 class="h1">Welcome to Laravel!</h2>
    <h4 class="testclass">A home page (or homepage) is the main web page of a website. 
        The term may also refer to the start page shown in a web browser 
        when the application first opens.
    </h4>

    @can('home.secret')
        <a href="{{ route('secret') }}">
            <p>Go to special contact details</p>
        </a>        
    @endcan
@endsection