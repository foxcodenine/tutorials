<?php

// Array - Variable that holds multiple values

/**
 * Indexed
 * Associative
 * Multi-dimensional
 */

// _____________________________________________________________________

//  Indexed

$people = array('Kevin', 'Jeremy', 'Sara');
$ids = array(23, 55, 12);
$cars = ['Honda', 'Toyota', 'Ford'];
$cars[3] = 'Chevy'; 
$cars[] = 'BMW'; # <-- add to last postion

// echo $cars[4];

// echo count($cars); # <-- print lenght of array

// print_r($cars); # <-- print the whole array

// var_dump($cars); # <-- dump the var data, value and type


// _____________________________________________________________________

// Associative arrays 

$people = array('Brad' => 35, 'Jose' => 32, 'William' => 37 );

$ids = [35 => 'Brad', 32 => 'Jose', 37 => 'William'];

$people['Jill'] = 42;

// echo $ids[32];
// echo $people['Jill'];
// print_r($people);
// var_dump($people);

// _____________________________________________________________________

// Multi dimentional


$cars =array(
    array('Honda', 20, 10),
    array('Toyota', 30, 17),
    array('Ford', 23, 12)
);

// echo $cars[1][0];
print_r($cars);

?>