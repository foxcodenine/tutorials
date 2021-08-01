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

$a = "new string";
$c = $b = &$a;
xdebug_debug_zval( 'a' );
$c =  &$a;
xdebug_debug_zval( 'a' );
$b = 42;
xdebug_debug_zval( 'a' );
unset( $c );
xdebug_debug_zval( 'a' );