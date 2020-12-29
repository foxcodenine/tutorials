<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Constant</title>
</head>
<body>

<?php

echo '<br><br>Constants <br>';

// _____________________________________________________________________

echo '<br><br> ---- define() ---- <br>';
// define —  Defines a named constant at runtime.

define("GREETING", "Welocom to PHP");
echo GREETING . '<br>';

// _____________________________________________________________________

echo '<br><br> ---- constant() ---- <br>';
// constant — Returns the value of the constant, or null if the constant
// is not defined. 


echo constant('GREETING');

// _____________________________________________________________________

echo '<br><br> ---- defined() ---- <br>';
// defined — Checks whether the given constant exists and is defined. 

echo defined('WELCOME');

echo '<br>';

echo defined('GREETING');

// _____________________________________________________________________

echo '<br><br> ---- const ---- <br>';

const SPORTS = ['running', 'swimming', 'bike riding'];

print_r(SPORTS);

// _____________________________________________________________________

echo '<br><br> ---- isset() and function_exists()---- <br>';

$p = ' <pre>
If you want to see if a variable exists, use <b>isset()</b> as <b>defined()</b> 
only applies to constants. If you want to see if a function exists, 
use <b>function_exists()</b>.</pre>
';

echo $p;
?>

</body>
</html>