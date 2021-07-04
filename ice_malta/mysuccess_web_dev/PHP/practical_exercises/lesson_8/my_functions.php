<?php
namespace testing_namespace;


function date_US_to_UK($date) {
    preg_match("/(^\d\d?)\/(\d\d?)\/(\d{2}$|\d{4}$)/", $date, $a);
    $mm   = strlen($a[1]) === 2 ? $a[1] : '0' . $a[1];
    $dd   = strlen($a[2]) === 2 ? $a[2] : '0' . $a[2];
    $yyyy = strlen($a[3]) === 4 ? $a[3] : ( 21 >= (int)$a[3] ? '20' . $a[3] : '19' . $a[3]);
    
    return "{$dd}/{$mm}/{$yyyy}";
}