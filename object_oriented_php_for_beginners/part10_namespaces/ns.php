<?php

namespace foxcodenine;


// _____________________________________________________________________

class FoxClass {

    public $color;

    public function __construct($color)
    {
        $this->color = $color;
    }

    public function __toString()
    {
        return 'I am a ' . $this->color . 'fox!';
    }
}

// _____________________________________________________________________

function jack($n) {
    return implode(', ', range(1, $n)) . ' jack';
}


// _____________________________________________________________________

const RABIT = 'She put the rabbit back in the cage and closed the door securely';

// _____________________________________________________________________


// use DateTime; // <- If you are using a namesspace you need to
//                     imported from global namespace or use a backslash

$currentDate = new \DateTime();
echo $currentDate->format('d-m-Y');

// _____________________________________________________________________

function strlen($s) {
    return 'There are ' . \strlen($s) . ' in string';
}

// _____________________________________________________________________


