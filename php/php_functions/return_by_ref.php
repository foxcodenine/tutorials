<?php

function &collector() {
    static $collection = array();
    return $collection;
}

$myCollection = collector();
$myCollection[] = 'silver britannia';

$yourCollection = &collector();
array_push($yourCollection, 'golden eagles');

array_push(collector(), 'krugerrand');

var_export($myCollection);

?>

