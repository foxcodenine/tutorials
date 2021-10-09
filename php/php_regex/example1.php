<?php 
// header('Content-Type: application/json');

// preg_match('/(a)(b)*(b)*(c)/', 'ac', $matches ,PREG_OFFSET_CAPTURE);
// // var_export($matches);

echo PHP_EOL, PHP_EOL;

// preg_match('/(foo)/', 'foo bar foo', $matches);
// var_export($matches);

// echo PHP_EOL, PHP_EOL;

preg_match_all('/(foo) (bar) foo/', 'foo bar foo', $matches);
var_export($matches);