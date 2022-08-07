<!-- Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi -->

@if (!isset($show) || $show)
    <div class="alert alert-{{ $type }}" >
        {{ $slot ?? '' }}
    </div>
@endif   
