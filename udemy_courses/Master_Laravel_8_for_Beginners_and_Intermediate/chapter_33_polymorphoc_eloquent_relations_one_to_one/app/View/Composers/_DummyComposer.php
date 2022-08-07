<?php

namespace App\View\Composers;

// $ php artisan make:model App/View/Composers/_DummyComposer

use Illuminate\View\View;

class _DummyComposer                // <~~ Update Class Name Accordingly
{
    public function compose(View $view) 
    {
        // $dummyData = 'some dummy data!';
        // $view->with('dummyData', $dummyData);
    }
}

// ~~> ADD TO: register this view composer class to
//             app/Providers/AppSericeProvider::boot

// Illuminate\Support\Facades\View::composer([view.name], _DummyComposer::class)