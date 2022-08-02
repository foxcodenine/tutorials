@extends('layouts.app')

@section('title', $post['title'])

@section('content')

<!--Section: Post-->
<section class="mt-4">

<!--Grid row-->
<div class="row show__row">
    

    {{-----  MAIN ----------------------------------------------------}}
    
    <div class="col-md-9 mt-4">
        <div class="row">  
 
            <div style="background-image: url('{{ $post?->image?->url() ?? App\Models\Image::default() }}');" 
                class="show__background class="card  wow fadeIn">
                <p class="h2 my-4">{{ $post->title }} </p>
            </div>

            <div class="card mb-4 wow fadeIn show__card">    
                <div class="card-body">
                   
                    <p class="flex-1 my-4">{{ $post->content }}</p>

                    <x-updated :post="$post" :counter="$counter"/>

                    <div class="col-4 mb-4"> @include('posts.partials.buttons')</div>
                        
                    <x-alert :show="now()->diffInMinutes($post->created_at)  <=  5">
                        <h4 >Brand new News!</h4>
                    </x-alert>
                </div>
                    
                {{-- comments --}}                                                                              
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