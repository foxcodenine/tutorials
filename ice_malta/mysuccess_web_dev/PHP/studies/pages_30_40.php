<?php

include './my_print_functions.php';

ppp('A'); //____________________________________________________________

// $a = "new string";
// $b = &$a;
// // the variable b points to the variable a
// xdebug_debug_zval( 'a' );
// xdebug_debug_zval( 'b' );
// // change the string and see that the refcount is reset
// $b = 'changed string';
// xdebug_debug_zval( 'a' );
// xdebug_debug_zval( 'b' );


ppp('B'); //____________________________________________________________

// $a = "new string";
// $c = $b = &$a;
// xdebug_debug_zval( 'a' );
// $c =  &$a;
// xdebug_debug_zval( 'a' );
// $b = 42;
// xdebug_debug_zval( 'a' );
// unset( $c );
// xdebug_debug_zval( 'a' );

ppp('C'); //____________________________________________________________

// $array1 = array('a'=>1, 'b'=>2, 'c'=>3);

// $array2 = $array1;
// $array2['a'] = 8;
// $array2[] = 8;

// print_r($array1);

// echo '<br>';

// print_r($array2);

ppp('D'); //____________________________________________________________

function aaa () {
    echo __CLASS__ . '<br>';
}

AAA();


ppp('E'); //____________________________________________________________


// if (!extension_loaded('gd')) {
//     echo 'Not loaded (1)';
//     if (!dl('gd.so')) {
//         echo 'Not loaded (2)';
//     } else {
//         echo 'Loaded (2)';
//     }
// } else {
//     echo 'Loaded (1)';
// }

ppp('F'); //____________________________________________________________

$a = null;

var_dump(isset($a));
echo '<br>';

$a = false;

var_dump(isset($a));
echo '<br>';

$a = 0;

var_dump(isset($a));
echo '<br>';

$a = '';

var_dump(isset($a));
echo '<br>';

$a = [];

var_dump(isset($a));
echo '<br>';

$a = new stdClass();

var_dump(isset($a));
echo '<br>';

$a = '0';

var_dump(isset($a));
echo '<br>';

ppp('F'); //____________________________________________________________


function isTrue($i) {
    if ($i) {
        echo 'true<br><br>';
    } else {
        echo 'false<br><br>';
    }
}


$a = null;
isTrue($a);

$a = false;
isTrue($a);

$a = 0;
isTrue($a);

$a = '';
isTrue($a);

$a = [];
isTrue($a);

$a = new stdClass();
isTrue($a);

$a = '0';
isTrue($a);

ppp('G'); //____________________________________________________________


$a = null;
var_dump(empty($a)); echo '<br>';

$a = false;
var_dump(empty($a)); echo '<br>';

$a = 0;
var_dump(empty($a)); echo '<br>';

$a = '';
var_dump(empty($a)); echo '<br>';

$a = [];
var_dump(empty($a)); echo '<br>';

$a = new stdClass();
var_dump(empty($a)); echo '<br>';

$a = '0';
var_dump(empty($a)); echo '<br>';

ppp('H'); //____________________________________________________________

$c = 1;

$d = (array) $c;

print_r($c);

echo '<br>';

print_r($d);

