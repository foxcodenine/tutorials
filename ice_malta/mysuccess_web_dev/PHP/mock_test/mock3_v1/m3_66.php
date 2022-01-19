<?php
header('Content-Type: application/json');

$a = array(0, 1, 2 => array(3, 4));
$a[3] = array(4, 5);
echo count($a, 1) . PHP_EOL;

var_export($a);


