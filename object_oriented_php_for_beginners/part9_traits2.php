<?php
include './my_print_functions.php';
// _____________________________________________________________________

/*
 * A trait can have:
 * Static properties; Static methods; Abstract methods and Normal properties.
 * 
 * But it can't have constant;
*/

ppp('A'); //____________________________________________________________

trait MyTrait {

    public $propertyA = 'AAA';
    
    static $propertyS = 'SSS';

    abstract public function speed(): int;
    
}


class MyClass {

    use MyTrait;

    protected function speed(): int {
        return 800;
    }
    public function getSpeed() {
        return $this->speed();
    }
}

// _________________________________

$i1 = new MyClass;

echo $i1->propertyA;                                                    qqq();

echo MyTrait::$propertyS;                                               qqq();

echo $i1->getSpeed();                                                   qqq();



ppp('B'); //____________________________________________________________




