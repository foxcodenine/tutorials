<?php

$name = "SomeName";
$data = ['code' => 200, 'value' => 'some_value'];
$exp = time() + (60*60*24*7);

$value = serialize($value);
// Generates a storable representation of a value. (to save an array in cookie)
// This is useful for storing or passing PHP values around without losing their type and structure. 
// Then unserialize() data

setcookie($name, $data, $exp);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=#, initial-scale=1.0">
    <title>PHP Cookies</title>
</head>
<body>



</body>
</html>