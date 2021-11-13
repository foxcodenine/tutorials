<?php

function check ($i) {
    static $counter = 0;
    $counter++;
    echo 'counter ' . $counter . '<br>';
    echo '$i ' . $i . '<br>';



    if ($i < 10 ) {
        check(++$i);
    }

}

check(1);