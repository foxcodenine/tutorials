
<?php
header('Content-Type: application/json; charset=utf-8');

// ----- preg_match ----------------------------------------------------

$string = "My name is Daniel, Daniel is my name";
$condition = preg_match('/Daniel/', $string, $array);

if ($condition) {
    print_r($array);
}


// ------ preg_match_all -----------------------------------------------

$string = "My name is Daniel, Daniel is my name";
$condition2 = preg_match_all('/Da(ni)(el)/', $string, $array);

echo PHP_EOL, PHP_EOL, PHP_EOL;

if ($condition2) {

    print_r($array);
}

// ------ preg_replace -----------------------------------------------

$string = "My name is Daniel, Daniel is my name";
$string2 = preg_replace('/daniel/i', 'Joelle', $string);

echo PHP_EOL, PHP_EOL, PHP_EOL;

echo $string2;
?>
