<?php

// public - the property or method can be accessed from everywhere. This
// is default

// protected - the property or method can be accessed within the class
// and by classes derived from that class

// private - the property or method can ONLY be accessed within the
// class

class Person {
    public $name = 'Christopher';
    protected $surname = 'Farrugia';
    private $nickname = 'El Cuko';  
    
    function show_surname() {
        return $this->surname;
    }

    function show_nickname() {
        return $this->nickname;
    }
}

$me = new Person();

echo $me->name . "<br>";
// echo $me->surname . "<br>"; // <- this will give an error

echo $me->show_surname() . "<br>";
echo $me->show_nickname() . "<br>";

// ________________________________________

class Human extends Person {
    
}

echo "<br>";

function check_class_prop($class, $property) {    
    $check = property_exists($class, $property);

    if ($check) {
        echo "Class {$class} has property {$property}." . "<br>";
    } else
        echo "Class {$class} does NOT has property {$property}." . "<br>";
}

check_class_prop('Human', 'name');
check_class_prop('Human', 'surname');
check_class_prop('Human', 'nickname');


?>