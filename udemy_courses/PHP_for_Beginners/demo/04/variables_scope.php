<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Variable Scope</title>
</head>
<body>

<?php

echo '<br><br>Global and Local scope <br>';

echo '<br><br> ---- example #1 global ---- <br>';

$a = 'outside';

function foo() {
    $a = 'inside';
}

echo $a . '<br>';

foo();

echo $a . '<br>';


function bar() {
    global $a;
    $a = 'inside';
}

bar();

echo $a . '<br>';

// _____________________________________________________________________

echo '<br><br> ---- example #2 $GLOBALS ---- <br>';

$b = 2;
$c = 4;

function baz()
{
    $GLOBALS['b'] = 3;
    $GLOBALS['c'] = 5;
}

baz();

echo $b . ' ' . $c;

// _____________________________________________________________________

echo '<br><br> ---- example #3 superglobal ---- <br>';

$superglobals_var = '
<pre>
PHP Global Variables - Superglobals

Some predefined variables in PHP are "superglobals", which means that they 
are always accessible, regardless of scope - and you can access them from 
any function, class or file without having to do anything special.

The PHP superglobal variables are:

    $GLOBALS
    $_SERVER
    $_REQUEST
    $_POST
    $_GET
    $_FILES
    $_ENV
    $_COOKIE
    $_SESSION

</pre>
';
echo $superglobals_var;

// _____________________________________________________________________

?>


</body>
</html>