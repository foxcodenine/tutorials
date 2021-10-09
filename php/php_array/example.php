<?php

$arr = ['coffee', 'brown', 'caffeine'];

list($var) = $arr;
echo $var;

echo '<br><br><br>';

$keys = ['one', 2, 0.5, 0x11, 0123, [1, 2]];
$vals = ['one', 2, 0.5, 0x11, 0123, [1, 2]];

var_export(array_combine($keys, $vals));


// Warning: Array to string conversion
// Fatal error: Uncaught Error: Object of class stdClass could not be converted to string