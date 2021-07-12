<?php

use Person as GlobalPerson;

include '../my_print_functions.php';
ppp('A'); //____________________________________________________________


class Person {
    private $firstname = 'Jane';
    private $lastname = 'Doe';
    private $phone = 12345678;

    static $hello = "...hello  nice to meet you!";

    function __get($name)
    {        
        $properties = array_keys(get_object_vars($this)); 

        if ($name === 'phone') {
            return 'It is private.';
        }

        if (in_array($name, $properties)){
            return $this->$name;
        } else {
            return "'{$name}' property does not exits.";
        }
    }
}

$p = new Person();

// _____________________________________________________________________

echo $p->firstname;                                                     qqq();

echo $p->surname;                                                       qqq();

echo $p->phone;                                                         qqq();

echo $p->hello;                                                         qqq();

echo Person::$hello;