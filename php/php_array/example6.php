<?php 
$birds = ['duck', 'chicken', 'goose'];
$pets  = ['Dog', 'Cat', 'Chicken', 'Goose', 'Hamster'];

var_export(array_diff($pets, $birds));


$diff = array_udiff($pets, $birds, function($a, $b) {

    $a = strtolower($a); $b = strtolower($b);

    if ($a > $b) {
        return 1;
    } else if ($a < $b) {
        return -1;
    } else {
        return 0;
    }
    
});

echo '<br><br>';

var_export($diff);