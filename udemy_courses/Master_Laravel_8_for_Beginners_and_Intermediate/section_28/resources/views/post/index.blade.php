@extends('layout.app')

@section('title', 'Blog Posts')

@section('article')

    {{-- foreach loop, if, elseif and else --}}
    @foreach ($posts as $key => $value)
        @if ($loop->odd)
            <div style="background: lightgreen">{{ $key }}.{{ $value['title'] }}</div>
        @else
            <div>{{ $key }}.{{ $value['title'] }}</div>
        @endif        
    @endforeach

    <br>
    
    {{-- forelse loop, continue and break --}}
    @forelse ($blogs as $key => $blog)

        @continue($key === 1)
        @break($key > 4)
        <div>{{ $blog }}</div>

    @empty
        <div>No blog found</div>
    @endforelse

    <br>

    {{-- for loop --}}
    @for ($i = 0; $i < 5; $i++)
        <div>The current value is {{ $i }}</div>
    @endfor

    <br>

    {{-- while loop and php directive--}}
    @php $done = 0 @endphp

    @while ($done !== 1)
        <div>While loop not done. {{$done}}</div>
        @php $done = rand(0, 3);  @endphp
    @endwhile

    
@endsection

