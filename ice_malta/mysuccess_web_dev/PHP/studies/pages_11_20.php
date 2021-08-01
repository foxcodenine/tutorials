<?php

include './my_print_functions.php';

ppp('A'); //____________________________________________________________


// ----- define, defined and constant

define('CONST1', 'This is my 1st constant'); // not to be use in namespace

const CONST2 = 2;

echo CONST2 . '<br>';
echo CONST1 . '<br>';

var_dump(defined('CONST2')); // true

echo '<br>';

var_dump(defined(CONST2)); // false

echo '<br>';

echo constant('CONST1') . '<br>';
echo constant('CONST2') . '<br>';
// echo constant(CONST1);  // <- not


ppp('B'); //____________________________________________________________

//  ----- get_defined_constants()

$allConstants = get_defined_constants();

print_r(array_slice($allConstants, 0, 10));
 
echo '<br>';
echo '<br>';

$categorize = true;
$allConstants = get_defined_constants($categorize);

print_r(array_slice($allConstants, 0, 1));
 
echo '<br>';
echo '<br>';


//  ----- get_defined_vars()

$allVariables = get_defined_vars();

print_r(array_slice($allVariables, 0, 3));

echo '<br>';
echo '<br>';


//  ----- get_defined_vars()

$allFunction = get_defined_functions();

print_r(array_slice($allFunction, 1, 1));

echo '<br>';
echo '<br>';

ppp('C'); //____________________________________________________________

// ----- function_exists()


var_dump(function_exists('ppp'));

ppp('D'); //____________________________________________________________


// ----- PHP_INT_SIZE, PHP_INT_MAX  and  PHP_INT_MIN

echo PHP_INT_SIZE . '<br>';
echo PHP_INT_MAX . '<br>' . ~(2<<62) . '<br>';
echo PHP_INT_MIN . '<br>' .   2<<62 . '<br>';

ppp('E'); //____________________________________________________________

