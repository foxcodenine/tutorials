<?php

class Vehicle {
    var $wheels = 4;
    var $door   = 5;

    function set_mark($i) {
        $this -> mark = $i;
    }
}

// ___________________________________

if (class_exists('Vehicle')) {
    echo 'Class exists! <br>';
} else {
    echo 'Class does not exists <br>';
}

// ___________________________________

// Inherit Class
class Car extends Vehicle {

}

// ___________________________________

$myCar = new Car();

$myCar->set_mark('Toyota');


echo $myCar->wheels . '<br>';
echo $myCar->mark . '<br>';
