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
            
            <div style="background-image: url('{{ $post?->image?->url()}}'),
                                          url( {{ App\Models\Image::default() }});" 
                onerror="this.onerror=null; this.src='{{  App\Models\Image::default() }}'"
                class="show__background class="card  wow fadeIn">
                <p class="h2 my-4">{{ $post->title }} </p>
                <br class="my-4"> <x-tags :tags="$post->tags"></x-tags>
            </div>

            <div class="card mb-4 wow fadeIn show__card">    
                <div class="card-body">
                   
                    <p class="flex-1 my-4">{{ $post->content }} </p>
                    

                    <x-updated :post="$post" :counter="$counter"/>

                    <div class="col-4 mb-4"> @include('posts.partials.buttons')</div>
                        
                    <x-alert :show="now()->diffInMinutes($post->created_at)  <=  5">
                        <h4 >Brand new News!</h4>
                    </x-alert>
                </div>
                    
                {{-- comments --}}                                                                              
                <div class="card-body">
                    <p class="h5 my-4">Comments</p>

                    {{-- @include('posts.partials.forms.comments_form') --}}
                    <x-comment-form>
                        <x-slot name='route'>
                        {{ route('posts.comments.store', ['post' => $post->id]) }}
                        </x-slot>
                    </x-comment-form>

                    <x-comment-list :comments="$comments"></x-comment-list>
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