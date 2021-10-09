<?php
$arr = array(1, 2, 3, 4);
foreach ($arr as &$value) {
    $value = $value * 2;
}

var_export($arr);
echo($value);
unset($value); 
echo($value);

echo '<br><br><br>';


$arr = array(1, 2, 3, 4);
foreach ($arr as $key=>$value) {
    $sum = $key + $value;
}

var_dump($key, $value, $sum);


// Key element cannot be a reference, it will produce a Fatal error
?>