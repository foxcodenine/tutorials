@extends('layouts.app')

@section('title', 'Blog Post')

@section('content')
    @forelse ($posts as  $post )

        <div class="item mb-5" id="post-{{$post->id}}">
            <div class="row g-3 g-xl-0">

    
                <div class="col-2 col-xl-3 me-4">
                    <!--Card image-->
                    <div class="rounded img-thumbnail">
                        <img src="{{ $post->image_url ?: URL::asset('/images/fox.jpg')}}" class="img-fluid" alt="">
                    </div>
                    <!--Card image-->
                    
                    <!--Buttons--> 
                    @include('posts.partials.buttons')
                    <!--Buttons-->
                </div>

                <div class="col d-flex flex-column">
                    <h3 class="title mb-1">
                        <a class="text-link" href="{{route('posts.show', ['post' => $post->id])}}">
                            {{ $post->id }} ). {{ $post->title }}
                        </a>
                    </h3>

                    <div class="meta mb-1">
                        <span class="date">Published {{ $post->created_at->diffForHumans() }}</span>
                        <span class="time">&nbsp; &nbsp; by {{$post->user->name}}</span>
                        <span class="comment"> &nbsp; &nbsp;
                            @if ($post->comments_count && $post->comments_count === 1)                             
                                    <a class="text-link" href="#">1 comment</a>                            
                            @elseif ($post->comments_count)
                                <a class="text-link" href="#">{{ $post->comments_count }} comments</a>                            
                            @else 
                                No comments yet!
                            @endif
                        </span>                        
                    </div>

                    <div class="intro my-4">
                        @if (strlen($post->content) < 1000)
                            {{ $post->content }}
                        @else
                            {{ substr($post->content, 0, 1000) }}...
                        @endif
                    </div>

                    <a class="text-link mb-4" href="{{ route('posts.show', ['post' => $post->id]) }}">Read more &rarr;</a>

                    
                </div><!--//col-->

            </div><!--//row-->
            <hr class="my-4"/>
        </div><!--//item-->

    @empty
        <p>No blog post yet!</p>
    @endforelse

@endsection