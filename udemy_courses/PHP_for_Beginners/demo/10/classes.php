<?php

class Car {

    // properties:
    var $wheels = 4;
    var $engine = 1.2;
    var $fuel = 'unleaded';
    var $doors = 5;
    var $color = 'white';

    // methodes:
    public static function turnOnCar($i=false,) {
        if ($i) {
            echo 'Car is moving! <br>';
        } else {
            echo 'Car is parked! <br>';
        }
    }

    function changeColor($c) {       

        $this->color = $c;
        
        echo  get_class($this) . ' - color changed with method! <br>';
    }
}

// _____________________________________________________________________

echo '<br> 1. Check if class exists: <br>';

if(class_exists("Car")) {
    echo "YEayyyy this Class exists!" . "<br>";
} else {
    echo "no No no!" . "<br>";
}


// _____________________________________________________________________
echo '<br> 2. Check if method in class exists: <br>';

if (method_exists("Car", "turnOnCar")) {
    echo "...yesss, it does has this method! <br>";
} else {
    echo "...nope it doesn't got this method! <br>";
}

// _____________________________________________________________________
echo '<br> 3. Initiate an instance and calling methods: <br>';

$bmw = new Car();

$bmw->turnOnCar(true);
Car::turnOnCar(0);

// _____________________________________________________________________
echo '<br> 4. Adding properties: <br>';

echo $bmw->color . '<br>';

$bmw->changeColor('red');

echo $bmw->color . '<br>';
echo $bmw->color = 'silver'. '<br>';

?>