<?php


include '../my_print_functions.php';
ppp('A'); //____________________________________________________________


class Person {
    private $firstname = 'Jane';
    private $lastname = 'Doe';
    private $phone = 12345678;

    static $hello = "...hello  nice to meet you!";

    function __toString()
    {
        return 'fullname: ' . $this->firstname . ' ' . $this->lastname;
    }

}

$p = new Person();

echo $p;