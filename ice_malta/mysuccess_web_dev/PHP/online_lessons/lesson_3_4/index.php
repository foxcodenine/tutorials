<?php



function add($num1, $num2) {

    return $num1 + $num2;
}

[$a, $b] = [9, 8];

$total = add($a, $b);

echo "<br>The total is {$total}.</br>";

function square2(&$num) {
    $num *= $num;
}
// square2(10);
echo $a . '<br>';

// ---------------------------------------------------------------------
// Named Arguments in PHP 8

function sample($num = 1, $value = 5){
    echo "Number: ", $num;
    echo " ";
    echo "Value: ", $value;
 }
 sample(value: 5, num: 30); 



