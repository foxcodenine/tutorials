@extends('layouts.app')

@section('title', 'Create the post')

@section('content')
    
    <form action="{{ route('posts.store') }}" method="POST">
        @csrf        
        @include('posts.partials.form')
        <div><button type="submit">Create</button></div>
    </form>

@endsection