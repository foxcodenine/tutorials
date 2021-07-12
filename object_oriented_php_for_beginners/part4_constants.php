<?php
include './my_print_functions.php';


class Car {
    public $color;
    public $manufacturer;

    const MANUFACTURER_BMW ='BMW';
    const MANUFACTURER_TESLA ='tesla';
    const MANUFACTURER_MERCEDES ='mercedes';

    const COLOR_RED = 'red';
    const COLOR_GREEN = 'green';

    public function __construct($manufacturer, $color){
        $this->color = $color;
        $this->manufacturer = $manufacturer;
    }
}

ppp('A'); //____________________________________________________________

$myCar = new Car(Car::MANUFACTURER_MERCEDES, Car::COLOR_RED);

print_r($myCar);

ppp('B'); //____________________________________________________________