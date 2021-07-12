<?php
include './my_print_functions.php';
// _____________________________________________________________________

/*
If you can copy and paste the code from one class to another then you
have a candidate for a trait.


  
*/



ppp('A'); //____________________________________________________________


trait FlyTrait {

    public $wings = 2;

    public function fly() {
        echo "I am flying!";
    }
}

trait EngineTrait {

    public function hello() {
        echo "I have an engine!";
    }
}

// _______________________________

class Plain {
    
    use FlyTrait;
    use EngineTrait;
}

// _______________________________

class Helicopter {  

    use FlyTrait, EngineTrait;
   
}

// _______________________________

class Vehicle {    

    use EngineTrait;
}

// _______________________________

$plan1 = new Plain();
$helicopter1 = new Helicopter();
$car1 = new Vehicle();

$plan1->fly();                                                          qqq();
$helicopter1->fly();                                                    qqq();

$plan1->hello();                                                        qqq();
$helicopter1->hello();                                                  qqq();

$car1->hello();                                                         qqq();

echo $plan1->wings;                                                     qqq();


ppp('B'); //____________________________________________________________