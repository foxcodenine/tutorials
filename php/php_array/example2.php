<?php

// $arr = array('lastname', 'email', 'phone');


// var_dump(implode($arr)); 	// string(18) "lastnameemailphone"


// echo '<br><br><br>';

// $str = "Hello Friend";

// $arr1 = str_split($str);
// $arr2 = str_split($str, 3);

// var_export($arr1);
// var_export($arr2);

// echo '<br><br><br>';

$a = ['a', 'b', '1'];
$b = ['a', 'b', 1];
$c = ['1', 'b', 'a'];
$d = [2 => 1, 0 => 'a', 1 => 'b'];

header('Content-Type: application/json');

var_export($a == $b);
var_export($a === $b);
var_export($a == $c);
var_export($a == $d);
var_export($a === $d);
