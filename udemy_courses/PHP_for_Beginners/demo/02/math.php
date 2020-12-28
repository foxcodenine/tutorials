<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Math</title>
</head>
<body>
<!-- https://riptutorial.com/php/example/8355/incrementing--plusplus--and-decrementing-operators----- -->

<?php

// Addition
echo 45 + 55;

echo '<br>';

// Subtraction
echo 100 - 50;

echo '<br>';

// Multiplication
echo 56 * 44;

echo '<br>';

// Division
echo 60 / 7;

echo '<br>';

// Exponentiation
echo 5 ** 2;

echo '<br>';

// Modulo
echo 5.5 % 2.1;

echo '<br>';

// _____________________________________________________________________

// intdiv — Returns the integer quotient of the division of num1 by num2. 
echo intdiv (5, 2);

echo '<br>';

// _____________________________________________________________________


// fmod — Returns the floating point remainder (modulo) of the division of the arguments
echo fmod(5.5, 2.2);

echo '<br>';

// _____________________________________________________________________


// Identity 	Conversion of $a to int or float as appropriate. 
$a = '100';
echo $a . 'a' . "<br>";
echo +$a + '1.11' . "<br>";

// _____________________________________________________________________


// Negation 	Opposite of $a.
echo -$a;

echo '<br>';


// _____________________________________________________________________



// ---- Incrementing (++) and Decrementing Operators (--) 


// Pre-increment and Pre-decrement operator
 
$i = 1;
echo  ++$i;

echo '<br>';

$i = 1;
echo --$i;

echo '<br>';

// __________________________


// Post-increment and Post-decrement operator

$i = 1;
echo  $i++;
echo '<br>';
echo  $i;

echo '<br>';

$i = 1;
echo $i--;
echo '<br>';
echo  $i;

echo '<br>';

?>
    
</body>
</html>