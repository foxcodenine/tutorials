<!-- Knowing is not enough; we must apply. Being willing is not enough; we must do. - Leonardo da Vinci -->


<p class="text-muted">

    {{ empty(trim($slot)) ? 'Added ' : $slot }} {{ $date->diffForHumans() }}
    
    

    @if (isset($name))
        by {{ $name }}
    @endif   

</p>