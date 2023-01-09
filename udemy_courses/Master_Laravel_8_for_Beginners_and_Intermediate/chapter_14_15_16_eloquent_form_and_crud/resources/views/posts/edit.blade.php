@extends('layouts.app')

@section('title', 'Update the post')

@method('PUT')

@section('content')
    
    <form action="{{ route('posts.update', ['post' => $post->id]) }}" method="POST">
        @csrf
        @method('PUT')
        @include('posts.partials.form')
        <div><button type="submit">Update</button></div>
    </form>

@endsection