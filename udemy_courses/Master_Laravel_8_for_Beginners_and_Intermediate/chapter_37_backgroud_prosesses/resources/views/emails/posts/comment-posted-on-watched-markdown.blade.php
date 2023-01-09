@component('mail::message')
# A Comment was posted on a post you have previously commented on!

Hi {{ $user->name }}

{{$comment->user->name}} has added a this comment after you commented.

@component('mail::button', ['url' => route('posts.show', [ 'post' => $comment->commentable->id ]) ])
View Blog Post
@endcomponent

@component('mail::button', ['url' => route('users.show', [ 'user' => $comment->user->id ]) ])
Visit {{$comment->user->name}} profile
@endcomponent

@component('mail::panel')
{{$comment->content}}
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
