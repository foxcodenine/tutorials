<?php

$myCheck = 0;                       //  <- (A)

function counter($start, &$stop) {
    $GLOBALS['myCheck'] += 1;       //  <- (A)
    if($stop > $start) {
        return;
    } 

    counter($start--, ++$stop);
}

$start = 5;
$stop = 2;

counter($start, $stop);
echo $myCheck;                      //  <- (A)

// Lines marked by (A) has been added to check result.
?>

