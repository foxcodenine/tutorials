<?php

header('Content-Type: application/json');



$s = 'ab ab ac ac ac';

echo preg_match_all('/a(b)/', 'ab ab a ac ac', $a), PHP_EOL;
var_export($a);

echo PHP_EOL, PHP_EOL;

echo preg_match_all('/a(?:b)/', 'ab ab a ac ac', $a), PHP_EOL;
var_export($a);

echo PHP_EOL, PHP_EOL;

echo preg_match_all('/a(?=b)/', 'ab ab a ac ac', $a), PHP_EOL;
var_export($a);

echo PHP_EOL, PHP_EOL;

echo preg_match_all('/a(?!b)/', 'ab ab a ac ac', $a), PHP_EOL;
var_export($a);

echo PHP_EOL, PHP_EOL;


echo preg_match_all('/foo(?=b)(.*)/', 'foobar', $a), PHP_EOL;
var_export($a);

echo PHP_EOL, PHP_EOL;


// $s = 'ab acac adadab ';

// echo preg_match_all('/a(?![bc])/', $s, $a), PHP_EOL;

// var_export($a);













// $s = '   ';

// $n = preg_match_all('/\h/', $s, $a);

// echo $n, PHP_EOL;

// var_export($a);









// $s = 'oo xoox xoooox xoox oo';

// $n = preg_match_all('/\boo\b/', $s, $a);

// echo $n, PHP_EOL;

// var_export($a);



