<?php

function foo() {
    yield 1;
    yield 2;
    yield 3;
    return 'bar';
}

$gen = foo();


// foreach ($gen as $i) {
//     echo $i;
// }
echo $gen->getReturn();
?> 