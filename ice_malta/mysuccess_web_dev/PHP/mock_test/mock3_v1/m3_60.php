<?php 
function test1() {
    $parameters = func_get_args();
    var_export($parameters);
}

function test2(...$parameters) {
    var_export($parameters);
}

test1('a', 5, 'yabloko');

echo '<br><br>';

test2('Z', 7, 'Man United');



