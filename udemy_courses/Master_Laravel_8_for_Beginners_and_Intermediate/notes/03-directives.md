https://laravel.com/docs/9.x/blade#blade-directives

```php

@yield('content');

@section('title', 'my title')

@section('content') <p>My content</p> @endsection

@csrf

@method('PUT')

// ----- Conditional ---------------------------------------------------

@if()
@elseif()
@else
@endif

@unless(false)
@endunless

@isset($post)
@endisset

@empty($post)
@endempty 

// ----- Includes ------------------------------------------------------

@include('shared.errors')
@include('view.name', ['status' => 'complete'])
@includeIf('view.name', ['status' => 'complete'])
@includeWhen($boolean, 'view.name', ['status' => 'complete']) 
@includeUnless($boolean, 'view.name', ['status' => 'complete'])


// ----- Loops ---------------------------------------------------------

@for ($i = 0; $i < 10; $i++)
    The current value is {{ $i }}
@endfor
 

@foreach ($users as $user)
    <p>This is user {{ $user->id }}</p>
@endforeach
 

@forelse ($users as $user)
    <li>{{ $user->name }}</li>
@empty
    <p>No users</p>
@endforelse
 

@while (true)
    <p>I am looping forever</p>
@endwhile

// ----- Continue And Break --------------------------------------------

@foreach ($users as $user)
    @continue($user->type == 1)
 
    <li>{{ $user->name }}</li>
 
    @break($user->number == 5)
@endforeach

// --- or:

@foreach ($users as $user)
    @if ($user->type == 1)
        @continue
    @endif
 
    <li>{{ $user->name }}</li>
 
    @if ($user->number == 5)
        @break
    @endif
@endforeach


// ----- Loop Variables ------------------------------------------------

// While iterating through a foreach loop, 
// a $loop variable will be available inside of your loop. 

@foreach ($users as $user)
    @if ($loop->first)
        This is the first iteration.
    @endif
 
    @if ($loop->last)
        This is the last iteration.
    @endif
 
    <p>This is user {{ $user->id }}</p>
@endforeach

// If you are in a nested loop, 
// you may access the parent loop's $loop variable via the parent property:

@foreach ($users as $user)
    @foreach ($user->posts as $post)
        @if ($loop->parent->first)
            This is the first iteration of the parent loop.
        @endif
    @endforeach
@endforeach


// ----- Errors --------------------------------------------------------

    @error('title')
        <div>{{ $message }}</div>
    @enderror