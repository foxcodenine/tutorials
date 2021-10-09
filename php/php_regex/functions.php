<?php

// preg_match('/(a)(b)*(c)/','ac', $matches);
// var_export($matches);

// print '<br><br>';

// preg_match('/(a)(b)*(c)/','ac', $matches, PREG_OFFSET_CAPTURE);
// var_export($matches);

// print '<br><br>';

// preg_match('/(a)(b)*(c)/','ac', $matches, PREG_UNMATCHED_AS_NULL);
// var_export($matches);

// print '<br><br>';

// preg_match('/def/', 'defaaa', $matches, PREG_OFFSET_CAPTURE, 3);
// print_r($matches);

// preg_match('/(foo) (bar)/', 'foo bar foo', $matches);
// var_export($matches);

// print '<br><br>';

// preg_match_all('/(foo) (bar)/', 'foo bar foo', $matches);
// var_export($matches);
// print '<br><br>';

// preg_match_all('/(foo)(bar)/', 'foo bar foo', $matches);
// var_export($matches);

header('Content-Type: application/json');

$s = 'This island is beautiful';

$n = preg_match_all('/\bis\b/', $s, $a);

echo $n, PHP_EOL;
var_export($a);


echo PHP_EOL, PHP_EOL;

$n = preg_match_all('/\Bis\B/', $s, $a);

echo $n, PHP_EOL, PHP_EOL;
var_export($a);

$s = 'Thisislandisbeautiful';
$n = preg_match_all('/\Bis\B/', $s, $a);

echo $n, PHP_EOL, PHP_EOL;
var_export($a);
?>