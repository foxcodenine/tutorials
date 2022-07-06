<!-- I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison -->
<div class="alert alert-{{ $type ?? 'success' }}" >
    {{ $slot ?? '' }}
    {{ $testMessage ?? '' }}
</div>