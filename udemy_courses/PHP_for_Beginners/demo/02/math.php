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
echo '<br><br> ---- Addition ---- <br>';
echo 45 + 55;

// Subtraction
echo '<br><br> ---- Subtraction ---- <br>';
echo 100 - 50;


// Multiplication
echo '<br><br> ---- Multiplication ---- <br>';
echo 56 * 44;

// Division
echo '<br><br> ---- Division ---- <br>';
echo 60 / 7;


// Exponentiation
echo '<br><br> ---- Exponentiation ---- <br>';
echo 5 ** 2;

// Modulo
echo '<br><br> ---- Modulo ---- <br>';
echo 5.5 % 2.1;



// _____________________________________________________________________

// intdiv — Returns the integer quotient of the division of num1 by num2. 

echo '<br><br> ---- intdiv() ---- <br>';

echo intdiv (5, 2);



// _____________________________________________________________________


// fmod — Returns the floating point remainder (modulo) of the division of the arguments
echo '<br><br> ---- fmod() ---- <br>';

echo fmod(5.5, 2.2);



// _____________________________________________________________________

// Identity 	Conversion of $a to int or float as appropriate. 
echo '<br><br> ---- Identit ---- <br>';

$a = '100';
echo $a . 'a' . "<br>";
echo +$a + '1.11';

// _____________________________________________________________________

// Negation 	Opposite of $a.
echo '<br><br> ---- Negation ---- <br>';

echo -$a;

echo '<br>';


// _____________________________________________________________________



// ---- Incrementing (++) and Decrementing Operators (--) 
echo '<br><br> ---- Incrementing (++) and Decrementing Operators (--)---- <br>';

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