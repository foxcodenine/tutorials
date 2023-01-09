@extends('layout.app2')



@section('title', 'news.show')
@section('article')

<div class="row">

    {{-- SIDE ----------------------------------------------------- --}}

    <div class="col-8">
    
    <h2 style="font-family: Arial, Helvetica, sans-serif">
        {{ $news->title }}
        <x-badge :show="$news->users->is_admin" type="warning">By Admin</x-badge>
    </h2>
    
    <p style="font-family: Arial, Helvetica, sans-serif">Author {{ $news->author }}</p>
    <img src="{{ $news->urlToImage }}" alt="" width="300px">

    <x-updated :name="$news->users->name" :date="$news->created_at"></x-updated>
    <x-tags  :newstags="$news->tags"></x-tags>
    
    <p>Currently read by {{ $counter }}</p> people.
    
    <p style="font-family: Arial, Helvetica, sans-serif">{{ $news->content }}</p>

    


    @include('news.partials._delete_form')



    @if ($news->comments) <h3><br>Comments</h3> @endif
    @forelse ( $news->comments as $comment )
        <p>{{$comment->created_at->diffForHumans()}} - {{$comment->content}}</p>
    @empty
        <h3>No Comments</h3>
    @endforelse

    </div>

    {{-- END MAIN ------------------------------------------------- --}}

    {{-- SIDE ----------------------------------------------------- --}}

    <div class="col-4">
        @include('news.partials._activity')
    </div>

    {{-- END SIDE ------------------------------------------------- --}}

</div>
    
@endsection