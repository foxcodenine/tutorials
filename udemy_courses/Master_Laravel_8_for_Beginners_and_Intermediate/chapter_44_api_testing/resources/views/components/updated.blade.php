
    <!-- Simplicity is an acquired taste. - Katharine Gerould -->

<div class="meta mb-2">

    @if ($post->updated_at && $post->updated_at != $post->created_at)
        <span class="date">Updated {{ $post->updated_at->diffForHumans() }}</span>
    @else
        <span class="date">Published {{ $post->created_at->diffForHumans() }}</span>
    @endif

    <span class="time mb-4">&nbsp; &nbsp; by
        @auth()
            <a href="{{ route('users.show', ['user' => $post->user_id]) }}">{{$post->user->name}}</a>
        @else
            {{$post->user->name}}
        @endauth
    </span>
    

    @if (isset($counter) && $counter)
        <span> &nbsp; &nbsp; {{ trans_choice('messages.people.reading', $counter)}}</span>
    @endif
    



    @if (isset($comments) && $comments)   
    
        <span class="comment"> &nbsp; &nbsp;
            {{ trans_choice('messages.comments', $post->comments_count)}}
        </span> 

    @endif  


    

</div>