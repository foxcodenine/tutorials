<?php 
header('Content-Type: application/json');

$arr = [
    'key' => 'value', 
    'nested_array' => ['nested_key' => 'nested_value']
];

$obj = (object) $arr;

var_export($obj);

echo PHP_EOL, PHP_EOL;

var_export($obj->key);

echo PHP_EOL, PHP_EOL;

var_export($obj->nested_array);

echo PHP_EOL, PHP_EOL;

var_export(get_class($obj));