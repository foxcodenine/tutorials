<?php

/** Whan createing an class that extends from an  abstract you need:
 * 
 * Redeclare all abstract methods.
 * 
 * The arguments must be the same.
 * 
 * Methods in child class can have additional default arguments.
 * 
 * Methods' signature musr be the same.
 * 
 * Visibility of the methods must be the same or less restricted.
 * 
 * And Object can not be created from the abstract class.
 * 
*/
// _____________________________________________________________________

include './my_print_functions.php';
// _____________________________________________________________________

abstract class Shape {

    private $color;

    abstract public function getArea(): float;

    public function __construct($color) {
        $this->color = $color;
    }    

    public function getColor() {
        return $this->color;
    }    
}
// ____________________________________________

class Rectangle extends Shape {

    private $length;
    private $width;

    public function __construct($color, $length, $width) {
        parent::__construct($color);
        $this->length = $length;
        $this->width = $width;
    }

    public function getArea(): float {
        return $this->width * $this->length;
    }
}

// ____________________________________________

class Circle extends Shape {

    private $radius;

    public function __construct($color, $radius) {
        parent::__construct($color);
        $this->radius = $radius;        
    }

    public function getArea(): float{
        return round($this->radius**2 * 3.14 * pi(), 2);
    }
}

// ____________________________________________

class Triangle extends Shape {

    private $base;
    private $height;

    public function __construct($color, $base, $height) {

        parent::__construct($color);
        $this->base = $base;
        $this->height = $height;
    }

    public function getArea(): float {
        return $this->base * $this->height * 0.5;
    }
}

ppp('A'); //____________________________________________________________

$t = new Triangle(color: 'red', base: 12, height: 6);

echo '$t color: ' . $t->getColor();                                     qqq();
echo '$t area: '  . $t->getArea();

ppp('B'); //____________________________________________________________

$c = new Circle(color:'blue', radius: 7);

echo '$c color: ' . $c->getColor();                                     qqq();
echo '$c area: '  . $c->getArea();

ppp('C'); //____________________________________________________________

$r = new Rectangle(color: 'white', length: 12, width: 4);

echo '$r color: ' . $r->getColor();                                     qqq();
echo '$r area: '  . $r->getArea();

?>