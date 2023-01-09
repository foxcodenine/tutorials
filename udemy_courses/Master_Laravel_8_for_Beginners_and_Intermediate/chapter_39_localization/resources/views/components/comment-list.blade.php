<!-- No surplus words or unnecessary actions. - Marcus Aurelius -->
@forelse ( $comments as $comment)
<p>{{ $comment->content }} <x-tags :tags="$comment->tags"></x-tags> </p>

<p class=" text-muted mb-5">
    Added {{ $comment->created_at->diffForHumans() }} 
    &nbsp;
    by {{ $comment->user->name }}
    
</p>
@empty
<p class="my-4">No comments yet!</p>
@endforelse

