<?php

var_export(range(50, 100, 10));
echo '<br><br>';
var_export(range(50, 50, 10));
echo '<br><br>';
var_export(range(4, -4));
echo '<br><br>';
var_export(range('ab', 'mb', 2));
echo '<br><br>';
var_export(range(1, 1.5, 0.25));

echo '<br><br>';

session_start();

var_dump(session_status());

echo '<br><br>';


$a = array_fill(5, 6, 'banana');
$b = array_fill(-2, 4, 'pear');
$c = array_fill(0, 0, 'dragonfruit');
print_r($a);
echo '<br><br>';
print_r($b);
echo '<br><br>';
print_r($c);

echo '<br><br>';


?>