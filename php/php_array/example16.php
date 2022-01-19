<?php 
header('Content-Type: application/json');

$german  = ['eins', 'zvie', 'drie'];
$italian = ['uno', 'due', 'tre'];

$numbers = ['one', 'two', 'three', ...$german, ...$italian];

var_export($numbers);



[, , , $oneIT] = $numbers;

echo $oneIT;

list(, , , , , ,$oneDE) = $numbers;
echo $oneDE;