@extends('layouts.app')

@section('title', 'Blog Post')

@section('content')
    @forelse ($posts as $key => $post )
        <div>{{ $post->id }} {{ $post->title }}</div>
        <div>
            <form action="{{ route('posts.destroy', ['post' => $post->id]) }}" method="POST">
                @csrf
                @method('DELETE')
                <button type="submit">Delete</button>
            </form>
        </div>
    @empty
        No post found
    @endforelse
@endsection