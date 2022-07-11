@extends('layouts.app')

@section('title', $post['title'])

@section('content')
    <h2>{{ $post->title }}</h2>
    <p>{{ $post->content }}</p>

    @if(!isset(($post['is_new'])))

    @elseif($post['is_new'])
        <p>Blog post is new</p>
    @else
        <p>Blog post is old</p>
    @endif

    <div>
        <form action="{{ route('posts.destroy', ['post' => $post->id]) }}" method="POST">
            @csrf
            @method('DELETE')
            <button type="submit">Delete</button>
        </form>
    </div>

@endsection