
    <!-- Simplicity is an acquired taste. - Katharine Gerould -->

<div class="meta mb-2">
    <span class="date">Published {{ $post->created_at->diffForHumans() }}</span>
    <span class="time mb-4">&nbsp; &nbsp; by {{$post->user->name}}</span>

    @if (isset($comments) && $comments)   
    <span class="comment"> &nbsp; &nbsp;
        @if ($post->comments_count && $post->comments_count === 1)                             
            <a class="text-link" href="#">1 comment</a>                            
        @elseif ($post->comments_count)
            <a class="text-link" href="#">{{ $post->comments_count }} comments</a>                            
        @else 
        No comments yet!
        @endif
    </span> 
    @endif 
    <br>

    @if ($post->updated_at && $post->updated_at != $post->created_at)
    <span class="date">Updated {{ $post->updated_at->diffForHumans() }}</span>
    @endif
    

</div>