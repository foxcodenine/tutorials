<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Alert extends Component
{
    public $type;
    public $show;
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct($type='info', $show=1)

    {   
        $this->type = $type;
        $this->show = (bool) $show;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.alert');
    }
}
