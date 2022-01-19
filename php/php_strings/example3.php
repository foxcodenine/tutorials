<?php 
header('Content-Type: application/json');

$var = 'ABCDEFGH:/MNRPQR/';

echo "Origenal:  $var" . PHP_EOL;

echo substr_replace($var, 'bob', 0) . PHP_EOL;
echo substr_replace($var, 'bob', 0 , strlen($var)) . PHP_EOL;

echo substr_replace($var, 'bob', 0, 3) . PHP_EOL;
echo substr_replace($var, 'bob ', 0, 0) . PHP_EOL;

echo substr_replace($var, 'bob', 10, -1) . PHP_EOL;
echo substr_replace($var, 'bob', -7, -1) . PHP_EOL;

echo substr_replace($var, '', 10, -1) . PHP_EOL;