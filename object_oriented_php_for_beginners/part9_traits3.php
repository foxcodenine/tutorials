<?php
include './my_print_functions.php';
// _____________________________________________________________________

// --- Conflict Traits

ppp('A'); //____________________________________________________________

trait Hi {

    public function greeting() {
        echo 'Hi there!';
    } 
    
}

// ________________________________________

trait Hello {

    public function greeting() {
        echo 'Hello how are you!';
    }     
}

// ________________________________________

class MyClass {

    // use Hi, Hello;  // <- this will produce an error;

    use Hi, Hello {
        Hi::greeting insteadOf Hello;
        Hello::greeting as helloGreeting;
    }
}

$i = new MyClass();

$i->greeting();                                                         qqq();
$i->helloGreeting();



ppp('B'); //____________________________________________________________

// ---  Traits use each other



trait MyTrait1 {

    public function method1() {
        echo 'This is method_1 from trait_1!<br>';
    }
}

trait MyTrait2 {

    public function method2() {
        echo 'This is method_2 from trait_2!<br>';
    }
}
trait MyTrait3 {

    use MyTrait1, MyTrait2;

    public function method3() {
        echo 'This is method_3 from trait_3!<br>';
    }
}

class TestingClass {
    use MyTrait3;
}

$t = new TestingClass();

$t->method1();
$t->method2();
$t->method3();

ppp('C'); //____________________________________________________________


// Traids and class inheritance


class ClassA {
    public $varA = 'And This is varA from ClassA';

    public function sayA() {
        echo 'AAA from Class_A';
    }
}


trait TraitA {
    // public $varA = 'And This is varA from TraitA';
    public function sayA() {
        echo ' | AAA from Trait_A! || ' . $this->varA  . parent::sayA() . '';
    }
}

class ChildA extends ClassA {

    // public $varA = 'And This is varA from ChildA';
    use TraitA;
}

// _____________________________________

// TraitA sayA method overwrite ClassA sayA method
// Traits can call methods or properties from perant function!

$aa = new ChildA();
$aa->sayA();