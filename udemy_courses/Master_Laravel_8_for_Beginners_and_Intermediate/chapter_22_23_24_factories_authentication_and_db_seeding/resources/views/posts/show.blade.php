@extends('layouts.app')

@section('title', $post['title'])

@section('content')
    <h2>{{ $post->title }}</h2>
    <p>{{ $post->content }}</p>

    <p>Added {{ $post->created_at->diffForHumans() }}</p>

    @if ( now()->diffInMinutes($post->created_at)  <  5)
        <div class="alert alert-info">New!</div>
    @endif
    
    <div>
        <form action="{{ route('posts.destroy', ['post' => $post->id]) }}" method="POST">
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-primary">Delete</button>
        </form>
    </div>

@endsection