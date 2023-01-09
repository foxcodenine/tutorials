@extends('layouts.app')

@section('title', 'Blog Post')

@section('content')
    @forelse ($posts as  $post )
        <h3>
            <a href="{{route('posts.show', ['post' => $post->id])}}">
                {{ $post->id }} {{ $post->title }}
            </a>
        </h3>
        
        <div class="mb-3">
            <a href="{{route('posts.edit', ['post' => $post->id])}}" class="btn btn-primary">Edit</a>
            <form action="{{ route('posts.destroy', ['post' => $post->id]) }}" method="POST" class="d-inline">
                @csrf
                @method('DELETE')
                <button type="submit" class="btn btn-primary">Delete</button>
            </form>
        </div>
    @empty
        No post found
    @endforelse
@endsection