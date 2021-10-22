<?php

function printArraySting(array | string $arr) {
 echo "<pre>" . print_r($arr, true) . "</pre>";
}

printArraySting('hello');





function nullExample(?int $msg = null) {
    echo $msg;
}

nullExample(1);
?>