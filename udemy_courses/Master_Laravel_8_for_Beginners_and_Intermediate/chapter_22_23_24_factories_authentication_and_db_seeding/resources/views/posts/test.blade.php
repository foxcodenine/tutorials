@extends('layouts.app')

@section('title', $post['title'])

@section('content')

<!--Section: Post-->
<section class="mt-4">

<!--Grid row-->
<div class="row">

    <!--Grid column-->
    <div class="col-md-12 mb-4">
        <div class="row">
 
            <div class="col-md-3">
                <!--Card image-->
                <div class="card  wow fadeIn">
                    <img src="{{ $post->image_url ?: URL::asset('/images/fox.jpg')}}" class="img-fluid" alt="">
                </div>
                <!--Card image-->
                <!--Buttons-->
                <div class="mt-4 ">
                    <a href="{{route('posts.edit', ['post' => $post->id])}}" class="btn btn-primary w-100">Edit</a>
                    <form action="{{ route('posts.destroy', ['post' => $post->id]) }}" method="POST" class="d-inline">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-primary w-100 mt-2">Delete</button>
                    </form>
                </div>
                <!--Buttons-->
            </div>
   
            <div class="col-md-9 col " >
                <div class="card mb-4 wow fadeIn">
                    <!--Card content-->
                    <div class="card-body">
                        <p class="h5 my-4">{{ $post->title }} </p>
                        <p class="flex-1">{{ $post->content }}</p>

                        <p>Added {{ $post->created_at->diffForHumans() }}</p>
                    </div>
                    <!--Card content-->
                    

                </div>

                @if ( now()->diffInMinutes($post->created_at)  <  5)
                    <div class="alert alert-info">New!</div>
                @endif

                
                <div class="card mb-4 wow fadeIn">
                    <!--Card content-->
                    <div class="card-body">
                        <p class="h5 my-4">Comments</p>
                        @forelse ( $post->comments as $comments)
                            <p>{{ $comments->content }} </p>
                            <p class=" text-muted mb-5">added {{ $comments->created_at->diffForHumans() }}</p>
                        @empty
                            <p class="my-4">No comments yet!</p>
                        @endforelse
                    </div>
                    <!--Card content-->
                </div>
            </div>
        </div>   
    </div>
</div>
<!--Grid row-->

</section>
<!--Section: Post-->

  @endsection