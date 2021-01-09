<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Variables</title>
</head>
<body>

<?php

// _____________________________________________________________________

// --- variables
$name = 'Christopher Farrugia';
$age = 36;

// _____________________________________________________________________


// ---- echo
echo $name, ' ', $age;

// _____________________________________________________________________


// ---- concatination

echo '<br>' . $name . ' ' . $age;

echo "<br>";

// ____________________________

// Concatenation of two strings (dot):

$a = 'a';
$b = 'b';
$c = $a . $b;

echo $c . '<br>';

// ____________________________

// Concatenating assignment (dot=):

$a = 'a';
$a .= 'b';

echo $a . '<br>';

// _____________________________________________________________________


// nl2br() function 

echo "If you view the page source \r\n you will find a newline in this string.";

echo "<br>";

echo nl2br("You will find the \n newlines in this string \r\n on the browser window.");

?>




<!-- another echo format -->
<?= '<br>' ,$name,  ' ', $age ?>


</body>
</html>