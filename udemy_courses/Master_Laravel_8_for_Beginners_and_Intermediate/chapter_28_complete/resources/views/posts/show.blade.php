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
                @include('posts.partials.buttons')
                <!--Buttons-->
            </div>
   
            <div class="col-md-9 col " >
                <div class="card mb-3 wow fadeIn">
                    <!--Card content-->
                    <div class="card-body">
                        <p class="h5 my-4">{{ $post->title }} </p>
                        <p class="flex-1">{{ $post->content }}</p>

                        <x-updated :post="$post"/>
                    </div>
                    <!--Card content-->
                    

                </div>

             
                <x-alert :show="now()->diffInMinutes($post->created_at)  <=  5">
                    <h4 >Brand new News!</h4>
                </x-alert>
        


                
                <div class="card mb-4 wow fadeIn">
                    <!--Card content-->
                    <div class="card-body">
                        <p class="h5 my-4">Comments</p>
                        @forelse ( $comments as $comment)
                            <p>{{ $comment->content }} </p>
                            <p class=" text-muted mb-5">added {{ $comment->created_at->diffForHumans() }}</p>
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