<?php 

// Classes which have a constructor method call this method on each
// newly-created object


class Robot {
    var $type = 'robot';

    function __construct($arms, $legs, $color)
    {
        $this->arms = $arms;
        $this->legs = $legs;
        $this->color = $color;

        echo "Hi, I am a {$this->type}. I am {$color} and I have {$arms} arms and {$legs} legs." . "<br>";
    }
}

$james = new Robot(2, 4, 'red');
