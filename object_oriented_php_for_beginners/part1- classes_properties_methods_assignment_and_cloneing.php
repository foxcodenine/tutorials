<?php
include './my_print_functions.php';

ppp('A'); //____________________________________________________________

class Car {
    
    public $weight;

    private $color = 'default color';
    private $year;
    private $availableColors = [
        'red', 'blue', 'black', 'white'
    ];


    public function setYear($year) {
        $this->year =$year;
    }
    public function getYear() {
        return $this->year;
    }
    

    public function setColor($color) {
        if (in_array($color, $this->availableColors)) {
            $this->color = $color;
        }
    }
    public function getColor() {
        return $this->color;
    }
}

ppp('B'); //____________________________________________________________

$myCar = new Car();

$myCar->weight = '3T';

$myCar->setYear(2006);
$myCar->setColor('black');

print_r($myCar);


ppp('C'); //____________________________________________________________

// ----- Variables assign by value;
$a = 1;
$b = $a;

echo $a, ' ', $b, '<br><br>';

$b = 2;

echo $a, ' ', $b, '<br><br>';

// ----- Instances assign by reference and by object;

// -- by reference:
$sisterCar = $myCar;
$sisterCar->setColor('white');

echo $sisterCar->getColor() . ' ' . $myCar->getColor() . '<br><br>';

# $myCar and $sisterCar point to the same object
echo $myCar === $sisterCar;       

ppp('D'); //____________________________________________________________

// -- by object:
$brotherCar = & $sisterCar;
$sisterCar->setColor('black');

echo    $sisterCar->getColor() . ' ' . 
        $brotherCar->getColor() .  ' ' . 
        $myCar->getColor() .'<br><br>';

# sisterCar and $brotherCar are same object
echo $sisterCar === $brotherCar;    echo '<br><br>';


// ----------------------------

// -- differance:

$sisterCar = null;
var_dump($sisterCar);          echo '<br>';
var_dump($brotherCar);         echo '<br>';
var_dump($myCar);              echo '<br>';

ppp('E'); //____________________________________________________________

// ----- clone inctances

$fatherCar = clone($myCar);
$fatherCar->setColor('blue');

echo    $myCar->getColor() . ' ' . 
        $fatherCar->getColor() .  '<br><br>';

echo $sisterCar === $brotherCar;   

ppp('F'); //____________________________________________________________