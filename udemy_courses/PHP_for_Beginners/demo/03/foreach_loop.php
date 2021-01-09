<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP While Loops</title>
</head>
<body>

<?php
echo '<br><br> ---- foreach loop ---- <br>';
echo '<br><br> ---- example 1 ---- <br>';

$arr = [1, 2, 3, 4, 5];

foreach ($arr as &$value) {
    $value = $value * 2 ;
}
print_r($arr);

echo '<br><br> In order to be able to directly modify array elements 
        within the loop precede $value with &.';

echo '<br><br> $value: ' . $value;

// Reference of a $value and the last array element remain even after
// the foreach loop. It is recommended to destroy it by unset().

unset($value);
echo '<br><br> $value after unset(): ' . $value;

// _____________________________________________________________________

echo '<br><br> ---- example 2 ---- <br>';

$arr = [1, 2, 3, 4, 5];

foreach ($arr as $key => $value) {
    echo '$key: ' . $key . '=> $value: ' . $value . '<br>'; 
}

// _____________________________________________________________________

echo '<br><br> ---- example 3 ---- <br>';

$arr = [2, 4, 6, 8];
foreach ($arr as $key => $value) {
    // $arr[3] will be updated with each value from $arr...
    echo "<br>{$key} => {$value} -- ";
    print_r($arr);
}
// _____________________________________________________________________
?>

</body>
</html>