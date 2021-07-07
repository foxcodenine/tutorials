<?php

include './my_print_functions.php';

// _____________________________________________________________________

/*
An INTERFACE is provided so you can describe a set of functions and then hide
the final implementation of those functions in an implementing class. This
allows you to change the IMPLEMENTATION of those functions without changing how
you use it.

* Interfaces allow you to specify what methods a class should implement.
*
* Interfaces are declared with the interface keyword
*
* To implement an interface, a class must use the implements keyword.
*
* A class that implements an interface must implement all of the interface's
* methods.
*
* Interfaces cannot have properties, while abstract classes can
*
* All interface methods must be public, while abstract class methods is public
* or protected
*
* All methods in an interface are abstract, so they cannot be implemented in
* code and the abstract keyword is not necessary
* 
* Classes can implement an interface while inheriting from another class at the
* same time

*/

// _____________________________________________________________________


interface MyInterface {

    const MY_CONSTANT = 'this_is_constant_value';

    public function __construct();
    public function method1();
    public function method2();
}


abstract class MyAbsClass implements MyInterface {
    
    public function method1() {
        echo '...this is method one!';
    }
}


class MyClass extends MyAbsClass {

    public function __construct() {
        echo 'An object has been created!';
    }

    public function method2() {
        echo '...this is method two!!';
    }
}

ppp('A'); //____________________________________________________________

$m = new MyClass();                                                     qqq();

echo $m->method2();                                                     qqq();

echo MyInterface::MY_CONSTANT;                                          qqq();

echo MyAbsClass::MY_CONSTANT;                                           qqq();

echo MyClass::MY_CONSTANT;                                              qqq();

ppp('B'); //____________________________________________________________