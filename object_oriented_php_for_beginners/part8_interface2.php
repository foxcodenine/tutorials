<?php

include './my_print_functions.php';

// _____________________________________________________________________

/*
* A class can implement from different interfaces;
*
* The interfaces can have the sae method as long as they have the same signiture;
*
*/

// _____________________________________________________________________


ppp('A'); //____________________________________________________________

## A Class implement from different  Interfaces: 

interface MyInterface_A {

    public function method_A();
}

interface MyInterface_B {

    public function method_B();
    public function method_C(): string;
}

interface MyInterface_C {

    public function method_C(): string;
}

class MyClass_ABC implements MyInterface_A, MyInterface_B, MyInterface_C {

    function method_A() {
        return '...this is method A';
    }

    function method_B() {
        return '...this is method B';
    }

    function method_C(): string {
        return '...this is method C';
    }
}

// _____________________________________________________________________

## An interface extends each other

interface Animal {
    public function breathe();
    public function consume();
    public function move();
}

interface Mammal extends Animal {        
    public function haveHairOrFur();
}

interface Carnivore {
    public function eatMeat();
}

interface Cat extends Mammal, Carnivore {
    public function meowing(); 
    public function purring(); 
    public function hissing();
}



Class  CatPet implements Cat {
    
    public function breathe() {
        echo 'breathe!<br>';
    }

    public function consume() {
        echo 'consume<br>';
    }

    public function move() {
        echo 'move<br>';
    }

    public function haveHairOrFur() {
        echo 'fur<br>';
    }

    public function eatMeat() {
        echo 'eatMeat<br>';
    }

    public function meowing() {
        echo 'meowing<br>';
    }

    public function purring() {
        echo 'purring<br>';
    }

    public function hissing() {
        echo 'hissing<br>';
    }

}

$c = new CatPet();

$c->move();
$c->meowing();
$c->breathe();
$c->purring();
// _____________________________________________________________________