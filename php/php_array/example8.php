<?php
// header('Content-Type: application/json');
// $input_array = array('a', 'b', 'c', 'd', 'e');
// var_export(array_chunk($input_array, 2));

// echo PHP_EOL,PHP_EOL;

// var_export(array_chunk($input_array, 2, true));
// echo PHP_EOL,PHP_EOL;
?>



<?php
// $arr = array('a'=>'apple', 'b'=>'banana', '42'=>'pear', 'd'=>'orange');
// print_r(array_slice($arr, 0, 3));
// print_r(array_slice($arr, 0, 3, true));
// ?>


<?php
// $input = array("red", "green", "blue", "yellow");
// array_splice($input, 2);
// var_export($input);


// $input = array("red", "green", "blue", "yellow");
// array_splice($input, 1, -1);
// var_export($input);


// $input = array("red", "green", "blue", "yellow");
// array_splice($input, 1, count($input), "orange");
// var_export($input);


// $input = array("red", "green", "blue", "yellow");
// array_splice($input, -1, 1, array("black", "maroon"));
// var_export($input);


// $size = "large";
// $wddx = array("color" => "blue", "size" => "medium", "shape" => "sphere");

// extract($wddx, EXTR_PREFIX_SAME, "wddx");

// echo "$color, $shape, $wddx_size, $size";


// $input = array("Neo", "Morpheus", "Trinity", "Cypher", "Tank");
// var_export(array_rand($input, 2));
// echo '<br><br>';
// var_export(array_rand($input));

// $city = "San Francisco";
// $state = "CA";
// $event = "SIGGRAPH";

// $location_vars = array("city", "state");

// $result = compact("event", $location_vars);
// print_r($result);



?>

<?php
// $numbers = ['0'=>'000', ...range(1, 5), 'a'=>'A'];

// var_export($numbers);
// echo '<br>';
// shuffle($numbers);
// var_export($numbers);



?>

<?php

$arr = ['one', 'two', 'three'];
list($indexArr[0], $indexArr[1], $indexArr[2]) = $arr;
var_export($indexArr);

echo '<br><br>';
?>

<?php

$arr = array(2, 4, 6, 8);
var_export(array_product($arr));
echo PHP_EOL, PHP_EOL;
var_export(array_product([]));
echo PHP_EOL, PHP_EOL;
var_export(array_product([0]));
echo PHP_EOL, PHP_EOL;
var_export(array_product([true, true]));
echo PHP_EOL, PHP_EOL;
var_export(array_product([true, true, false]));
echo PHP_EOL, PHP_EOL;
var_export(array_product([false, false]));
echo PHP_EOL, PHP_EOL;
var_export(array_product([5, 'hello', 2]));
echo PHP_EOL, PHP_EOL;
var_export(array_product(['true', '5hh']));
?>