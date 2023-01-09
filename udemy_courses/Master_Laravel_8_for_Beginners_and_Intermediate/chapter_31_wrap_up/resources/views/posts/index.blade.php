@extends('layouts.app')

@section('title', 'Blog Post')

@section('content')
<div class="row">
    <div class="col-9 mt-4">
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
                    @if ($post->trashed()) <del> @endif
                    <h3 class="title mb-1 ">
                        <a  class="text-link {{ $post->trashed() ? 'text-muted' : '' }}" 
                            href="{{route('posts.show', ['post' => $post->id])}}">
                            {{ $post->id }} ). {{ $post->title }}
                        </a>
            
                    </h3>
                    
                    
                    <x-updated :post="$post" :comments='true' />
                    <x-tags :tags="$post->tags" />

          
                    <x-alert type="success" :show="now()->diffInMinutes($post->created_at)  <=  5" >
                        Brand new post!
                    </x-alert>
                 
                    
                    <div class="intro my-4">
                        @if (strlen($post->content) < 1000)
                        {{ $post->content }}
                        @else
                        {{ substr($post->content, 0, 500) }}...
                        @endif
                    </div>
                    @if ($post->trashed()) </del> @endif
                    
                    <a class="text-link mb-4" href="{{ route('posts.show', ['post' => $post->id]) }}">Read more &rarr;</a>

                    
                </div><!--//col-->

            </div><!--//row-->
            <hr class="my-4"/>
        </div><!--//item-->

    @empty
        <p>No blog post yet!</p>
    
    @endforelse
    </div>

    @include('posts.partials.activity')

</div>
@endsection