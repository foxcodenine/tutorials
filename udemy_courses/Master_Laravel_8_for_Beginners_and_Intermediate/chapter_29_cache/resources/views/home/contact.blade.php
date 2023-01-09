@extends('layouts.app')

@section('title', 'Contact')

@section('content')
    <h1>Contact Page</h1>
    <p>Hello this is contact</p>
    
    @can('home.secret')
        <a href="{{ route('home.secret') }}">Go to special contact detail page!</a>
    @endcan

@endsection


