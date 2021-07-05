<?php


include '../my_print_functions.php';
ppp('A'); //____________________________________________________________


class Person {
    private $firstname;
    private $lastname;
    private $phone = 12345678;

    static $hello = "...hello  nice to meet you!";

    // _________________________________________________________________
    public static function getHello() {
        return self::$hello;
    }

    public static function __callStatic($name, $arguments)
    {   
        if ($name === 'fetchHello') {
            return self::getHello();

        } else if (count($arguments) === 0) {
            return "{$name} static method was called";

        } else if(count($arguments) === 1){
            return "{$name} static method was called with {$arguments[0]} as arg.";

        } else {
            $last = array_pop($arguments);
            $remaining = implode(', ', $arguments);
            return "{$name} static method was called with {$remaining} and {$last} as args.";
        }
        
    }

}

// _____________________________________________________________________

$p = new Person;

echo Person::fetchHello();  

qqq();

echo Person::time(12, 8);

qqq();
// _____________________________________________________________________