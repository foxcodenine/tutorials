@component('mail::message')
# Someone has sent a message  from the Contact Page!

{{ $name }} from {{ $email }} has sent you the following message:

@component('mail::panel')
{{ $message }}
@endcomponent

Thanks, {{ config('app.name') }}


@endcomponent
