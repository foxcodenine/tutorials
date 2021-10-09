<?php



header('Content-Type: application/json');

echo preg_match_all('/(?<=x)y/', 'xyz xxy yyy yyz yzz', $a), PHP_EOL;
var_export($a);

echo PHP_EOL, PHP_EOL;

echo preg_match_all('/(?<!x)y/', 'xyz xxy yyy yyz yzz', $a), PHP_EOL;
var_export($a);

/*

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
*/