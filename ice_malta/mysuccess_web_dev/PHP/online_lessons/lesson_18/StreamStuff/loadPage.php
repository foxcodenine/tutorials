<?php 

$f = fopen('http://icemalta.com/', 'r');
$page = '';

if ($f) {
    while ($s = fread($f, 1000)) {
        $page .= $s;
    }
}

echo $page;