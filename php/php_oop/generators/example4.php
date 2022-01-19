<?php
header('Content-Type: application/json');
function inner() {
    yield 1; // key 0
    yield 2; // key 1
    yield 3; // key 2
}
function gen() {
    yield 0; // key 0
    yield from inner(); // keys 0-2
    yield 4; // key 1
}

var_export(iterator_to_array(gen()));
?>

<?php
// pass false as second parameter to get an array [0, 1, 2, 3, 4]
echo PHP_EOL;
var_export(iterator_to_array(gen(), false));
?>