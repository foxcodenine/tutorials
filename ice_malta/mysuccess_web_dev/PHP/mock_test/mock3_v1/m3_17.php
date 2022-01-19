<?php 

$key = ['zero', 'one', 'two', 'three'];
$values = [0, '1', 2, '3'];

$arr = array_combine($key, $values);

var_export($arr);

echo '<br><br><br>';
?>


<?php
$array1 = array("a" => "green", "red", "blue", 1);
$array2 = array("b" => "green", "yellow", "red", '1');
$result = array_intersect($array1, $array2);
print_r($result);

echo '<br><br><br>';

?>

<?php
$array = array(1, "hello", 1.1, "world", "hello");
print_r(array_count_values($array));
?>