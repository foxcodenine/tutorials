<?php


include '../my_print_functions.php';
ppp('A'); //____________________________________________________________


class Person {
    private $firstname;
    private $lastname;
    private $phone = 12345678;

    static $hello = "...hello  nice to meet you!";

    function __set($name, $value)
    {
        if ($name === 'first') {
            $this->firstname = $value;

        } else if ($name === 'phone') {
            throw new Exception(message:"You are not allowed.");

        } else {
            $this->$name = $value;
        }
    }

    // _________________________________________________________________

    function __get($name)
    {        
        $properties = array_keys(get_object_vars($this)); 

        if (in_array($name, $properties)){
            return $this->$name;
        } 
    }

}

// _____________________________________________________________________

$p = new Person;

$p->first = 'Dorothy';
$p->lastname = 'Cassar';

echo $p->firstname, ' ', $p->lastname, '<br>';

$p->phone = 79310145; // <- Difined Error

// _____________________________________________________________________