<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Math Functions</title>
</head>
<body>

<?php
echo '<pre>
https://www.w3schools.com/php/php_ref_math.asp
https://www.php.net/manual/en/ref.math.php</pre>';

// _____________________________________________________________________
echo '<br> ---- abs() <br>';
// returns the absolute (positive) value of a number.

echo abs(-3.75) . "<br>";
echo abs(3.75)  . "<br>";

// _____________________________________________________________________
echo '<br> ---- round() <br>';
// rounds a number to the nearest integer.

echo round(-3.75) . "<br>";
echo round(5.1)  . "<br>";

// _____________________________________________________________________
echo '<br> ---- ceil() <br>';
// rounds a number UP to the nearest integer.

echo ceil(-3.75) . "<br>";
echo ceil(5.1)  . "<br>";

// _____________________________________________________________________
echo '<br> ---- floor() <br>';
// rounds a number DOWN to the nearest integer.

echo floor(-3.75) . "<br>";
echo floor(5.1)  . "<br>";

// _____________________________________________________________________
echo '<br> ---- decbin() & bindec() <br>';
// converts a decimal number to a binary number $ vs.

echo decbin(1) . '<br>';
echo decbin(10) . '<br>';
echo bindec(1111) . '<br>';
echo bindec(10) . '<br>';

// _____________________________________________________________________
echo '<br> ---- dechex() & hexdec() <br>';
// converts a decimal number to a hexadecimal number & vs.

echo dechex('11') . '<br>';
echo dechex('111') . '<br>';
echo hexdec('bb') . '<br>';
echo hexdec('1a1') . '<br>';

// _____________________________________________________________________
echo '<br> ---- exp() <br>';
// eturns E raised to the power of x,  (E ** x).
echo exp(0) . '<br>';
echo exp(1) . '<br>';
echo exp(2) . '<br>';

// _____________________________________________________________________
echo '<br> ---- pi() <br>';
// function returns the value of PI.

echo pi() . '<br>';

echo round(pi() * 5 ** 2) . '<br>';

// _____________________________________________________________________
echo '<br> ---- pow() <br>';
// function returns x raised to the power of y.

echo pow(5, 2) . '<br>';

// _____________________________________________________________________
echo '<br> ---- sqrt() <br>';
// function returns the square root of a number.

echo sqrt(100) . '<br>';

// _____________________________________________________________________
echo '<br> ---- rad2deg() & deg2rad() <br>';
// converts a radian value to a degree value & vs.

echo rad2deg(pi()) . '<br>';
echo rad2deg(pi()/4) . '<br>';

echo deg2rad(360)        . '<br>';
echo deg2rad(360) / pi() . '<br>';

// _____________________________________________________________________
echo '<br> ---- rand() <br>';
// generates a random integer.

echo(rand() . "<br>");
echo(rand(10,20). "<br>");

// _____________________________________________________________________
echo '<br> ---- mt_rand() <br>';
// function generates a random integer using the Mersenne Twister algorithm.

echo(mt_rand() . "<br>");
echo(mt_rand(10,20). "<br>");
?>

</body>
</html>