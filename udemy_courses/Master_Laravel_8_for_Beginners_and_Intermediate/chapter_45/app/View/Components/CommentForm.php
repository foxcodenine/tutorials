<?php

namespace App\View\Components;

use Illuminate\View\Component;

class CommentForm extends Component
{
    // public $route;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->route = $route;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.comment-form');
    }
}
