<?php


include '../my_print_functions.php';
ppp('A'); //____________________________________________________________


class Person {
    private $firstname;
    private $lastname;
    private $phone = 12345678;

    function __invoke(...$args)
    {   
        print_r($args);

        return "Object was called as a function. " .
               " This is the __invoke magic method";
        
    }

    function __toString()
    {
        return 'This is the __toString magic method';
    }

}

// _____________________________________________________________________

$p = new Person();

echo $p;

qqq();

echo $p('a', 'b');

qqq();

var_dump(is_callable($p));

// _____________________________________________________________________