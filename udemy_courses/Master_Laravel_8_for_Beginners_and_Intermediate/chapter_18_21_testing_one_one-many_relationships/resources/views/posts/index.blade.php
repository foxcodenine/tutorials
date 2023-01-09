@extends('layouts.app')

@section('title', 'Blog Post')

@section('content')
    @forelse ($posts as  $post )

        <div class="item mb-5">
            <div class="row g-3 g-xl-0">

                <div class="col-2 col-xl-3 me-4">
                    <img class="rounded float-start img-thumbnail" 
                    src="{{ $post->image_url ?: URL::asset('/images/fox.jpg')}}"
                    alt="image">
                </div>

                <div class="col d-flex flex-column">
                    <h3 class="title mb-1">
                        <a class="text-link" href="{{route('posts.show', ['post' => $post->id])}}">
                            {{ $post->id }} ). {{ $post->title }}
                        </a>
                    </h3>

                    <div class="meta mb-1">
                        <span class="date">Published {{ $post->created_at->diffForHumans() }}</span>
                        {{-- <span class="time">3 min read</span> --}}
                        @if ($post->comments_count)
                            <span class="comment"> &nbsp; &nbsp; <a class="text-link" href="#">{{ $post->comments_count }} comments</a></span>
                        @else 
                            <span class="comment"> &nbsp; &nbsp; No comments yet!</span>
                        @endif
                        
                    </div>

                    <div class="intro my-4">
                        @if (strlen($post->content) < 1000)
                            {{ $post->content }}
                        @else
                            {{ substr($post->content, 0, 1000) }}...
                        @endif
                    </div>

                    <a class="text-link" href="{{ route('posts.show', ['post' => $post->id]) }}">Read more &rarr;</a>

                    <div class="mt-auto">
                        <a href="{{route('posts.edit', ['post' => $post->id])}}" class="btn btn-primary">Edit</a>
                        <form action="{{ route('posts.destroy', ['post' => $post->id]) }}" method="POST" class="d-inline">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-primary">Delete</button>
                        </form>
                    </div>
                </div><!--//col-->

            </div><!--//row-->
            <hr class="my-4"/>
        </div><!--//item-->

    @empty
        <p>No blog post yet!</p>
    @endforelse

@endsection