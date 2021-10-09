<?php
header('Content-Type: application/json');
$input = ['a', 'b', 'c'];
$replace = [3 => 'd', '1' => 'q'];
$replaceTwo = [2 => 1, 1.3 => 'Z'];

$output = array_replace($input, $replace, $replaceTwo);
echo implode(", ", $output), PHP_EOL;
?>

<?php
$base = array('citrus' => array( "orange") , 'berries' => array("blackberry", "raspberry"), );
$replacements = array('citrus' => array('pineapple'), 'berries' => array('blueberry'));

$basket = array_replace_recursive($base, $replacements);
var_export($basket);

$basket = array_replace($base, $replacements);
var_export($basket);

echo PHP_EOL, PHP_EOL;
?>


<?php
$array1 = array("color" => "red", 2 => 2, 4);
$array2 = array("a", "b", "color" => "green", "shape" => "trapezoid", 4);
$result = array_merge($array1, $array2);
var_export($result);

echo PHP_EOL, PHP_EOL;

var_export($array1 + $array2);
?>


<?php

echo PHP_EOL, PHP_EOL;

$arrOne = [
 // integer
 0 => 'One 0',
 // string
 'a' => 'One a',
 // non-empty in One, but empty in Two
 'Overwrite1' => 'Not empty',
 'Overwrite2' => null,
];
$arrTwo = [
 0 => 'Two 0',
 1 => 'Two 1',
 'b' => 'Two b',
 'Overwrite1' => null,
 'Overwrite2' => 'Not empty',
];

print_r(array_merge($arrOne, $arrTwo));
echo PHP_EOL, PHP_EOL;
print_r($arrOne + $arrTwo);

