<?php
function z($x) {
    return function ($y) use ($x) {
        return str_repeat($y, $x);
    };
}
$a = z(2);
$b = z(3);

echo $a(3) . $b(2);