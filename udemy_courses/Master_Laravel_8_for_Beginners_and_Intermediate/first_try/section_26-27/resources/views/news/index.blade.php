@extends('layout.app2')



@section('content')

<div class="row">

    <div class="col-8">
    @forelse ($news as $n)

        @if ($n->trashed())  <del >  @endif
        <h2 > 
            <a  class="{{$n->trashed() ? 'text-muted': ''}}" 
                href="{{ route('news.show', ['news' => $n->id]) }}"
            >   {{ $n->title }}  </a>
        </h2>
        @if ($n->trashed()) </del>  @endif
        
        <p>{{ $n->author }} - {{ $n->users->email }}</p>
        <img src="{{ $n->urlToImage }}" alt="" width="300px">

        <p class="text-muted">
            Added {{ $n->created_at->diffForHumans() }}
            by {{ $n->users->name }}
        </p>
       

        @if ($n->comments_count)  
            <p>{{ $n->comments_count }} comment{{ $n->comments_count === 1 ? '' : 's' }} </p> 
        @else
            <p>No comments </p> 
        @endif

        @if(now()->diffInMinutes($n->created_at) < 5)
            <div class="alert alert-info" >New!</div>
        @endif

        @include('news.partials.delete_form', ['news' => $n])
        <br><hr><br>
    @empty
        <h2>No news yet!</h2>
    @endforelse
    </div>

    <div class="col-4">
    <div class="container">

        <div class="row">
        <div class="card" >

            <div class="card-body">
                <h5 class="card-title">Most Commented</h5>
                <h6 class="card-subtitle mb-2 text-muted">What people are currently talking about!</h6>
            </div>

            <ul class="list-group list-group-flush">

                @foreach ($mostCommented as $news) 
                <li class="list-group-item">
                    <a href="{{ route('news.show', ['news' => $news->id]) }}">{{$news->title}}</a>
                </li>
                @endforeach
                
            </ul>
        </div>
        </div>

        <div class="row mt-4" >
        <div class="card" >

            <div class="card-body">
                <h5 class="card-title">Most Active</h5>
                <h6 class="card-subtitle mb-2 text-muted">Users with most news written</h6>
            </div>

            <ul class="list-group list-group-flush">

                @foreach ($mostActive as $user) 
                <li class="list-group-item">
                    {{$user->name}}
                </li>
                @endforeach
                
            </ul>
        </div>
        </div>

        <div class="row mt-4" >
        <div class="card" >

            <div class="card-body">
                <h5 class="card-title">Most Active Last Month</h5>
                <h6 class="card-subtitle mb-2 text-muted">Users with most news written last month</h6>
            </div>

            <ul class="list-group list-group-flush">

                @foreach ($mostActiveLastMonth as $user) 
                <li class="list-group-item">
                    {{$user->name}}
                </li>
                @endforeach
                
            </ul>
        </div>
        </div>

    </div>
    </div>

</div>

@endsection