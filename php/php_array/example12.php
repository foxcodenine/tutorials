<?php
function evenNum($var){
    return !($var % 2);
}

$array1 = ['a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5, 'f' => 6];

var_export(array_filter($array1, "evenNum"));

echo '<br><br>';
?>

<?php

$entry = [
    0 => 'foo',
    1 => false,
    2 => -1,
    3 => null,
    4 => '',
    5 => '0',
    6 => 0,
    7 => 'false',
];

print_r(array_filter($entry));

echo '<br><br>';
?>



<?php

$arr = ['a' => 1, 'b' => 2, 'c' => 3, 'd' => 4];

var_export(array_filter($arr, function($k) {
    return $k == 'b';
}, ARRAY_FILTER_USE_KEY));

echo '<br><br>';

var_export(array_filter($arr, function($v, $k) {
    return $k == 'b' || $v == 4;
}, ARRAY_FILTER_USE_BOTH));
?>



<?php
echo '<br><br><br>';
function sum($carry, $item){
 $carry += $item;
 return $carry;
}

function product($carry, $item){
 $carry *= $item;
 return $carry;
}

$a = array(1, 2, 3, 4, 5);
$x = array();

var_export(array_reduce($a, "sum")); 
var_export(array_reduce($a, "product")); 
var_export(array_reduce($x, "sum", "No data to reduce")); 
?>