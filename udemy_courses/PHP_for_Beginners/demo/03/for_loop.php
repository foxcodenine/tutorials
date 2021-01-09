<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP For Loop</title>
</head>
<body>

<?php
echo '<br><br> ---- for loop ---- <br>';

echo '<br><br> ---- example 1 ---- <br>';

for ($i = 1; $i < 100; $i *= 2) {
    echo '$i is: ' . $i . '<br>';
}

// _______________________________________________________

echo '<br><br> ---- example 2 ---- <br>';

for ($j = 100; ; $j /= 2) {   

    if ($j < 1) {
     break;
    }

    echo '$j is greater then 1: ' . $j . '<br>';    
}

// _______________________________________________________


echo '<br><br> ---- example 3 ---- <br>';

$k = 1 ;
for (; ;) {
    if ($k > 10) {
        break;
    }
    echo '$k is: ' . $k . '<br>';
    $k += 3;
}

// _______________________________________________________

echo '<br><br> ---- example 4 ---- <br>';
for ($n = 1, $m = -2; $n < 20; $n *= $m, print( '$n is: ' . $n . '<br>'), $m -= 1)
// _______________________________________________________

?>

</body>
</html>