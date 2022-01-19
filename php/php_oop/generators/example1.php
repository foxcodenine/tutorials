<?php
function gen_one_to_three() {
    for ($i = 1; $i <= 3; $i++) {
        // Note that $i is preserved between yields.
        yield $i;
    }
}

$generator = gen_one_to_three();

var_export( $generator->current());

$generator->next();                     
var_export( $generator->current());

$generator->next();                     
var_export( $generator->current());
var_export( $generator->key());
$generator->next();                     
var_export( $generator->current());
?>