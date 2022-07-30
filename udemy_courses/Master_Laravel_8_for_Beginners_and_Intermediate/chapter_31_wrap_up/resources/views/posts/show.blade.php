@extends('layouts.app')

@section('title', $post['title'])

@section('content')

<!--Section: Post-->
<section class="mt-4">

<!--Grid row-->
<div class="row">
    

    {{-----  MAIN ----------------------------------------------------}}
    <div class="col-md-9 mt-4">
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

                <p>Currently read by {{ $counter }} {{ $counter === '1' ? 'user' : 'users' }}</p>
        
                
                {{-- comments --}}
                <div class="card mb-4 wow fadeIn">    
                    <div class="card-body">
                        <p class="h5 my-4">Comments</p>

                        @include('posts.partials.forms.comments_form')

                        @forelse ( $comments as $comment)
                            <p>{{ $comment->content }} </p>
                            <p class=" text-muted mb-5">
                                Added {{ $comment->created_at->diffForHumans() }} 
                                &nbsp;
                                by {{ $comment->user->name }}
                            </p>
                        @empty
                            <p class="my-4">No comments yet!</p>
                        @endforelse

                    </div>         
                </div>
                {{-- end comments --}}



            </div>
        </div>   
    </div>
    {{-----  MAIN END ------------------------------------------------}}

    {{-----  SIDE ----------------------------------------------------}}
    @include('posts.partials.activity')
    {{-----  SIDEEND -------------------------------------------------}}

</div>
<!--Grid row-->

</section>
<!--Section: Post-->

  @endsection