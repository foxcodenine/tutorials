<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Switch Statement</title>
</head>
<body>

<?php

$i = 'graps';

switch ($i) {
    case 'apple':
        echo 'i is apple.';
        break;
    case 'bar':
        echo 'i is bar.';
        break;
    case 'cake':
        echo 'i is cake.';
        break;
    default:
        echo 'i is not apple, bar or cake.';
}

echo '<br>';

// _____________________________________________________________________

$n = 5;

switch (true) {
    case $n < 0:
        echo 'n is a negative number!';
        break; 
    case $n == 0:
    case $n == 1: 
    case $n == 2: 
        echo 'n is less then 3 but not negative!';
        break;
    case $n == 3:
        echo 'n is 3!';
        break;
    default:
        echo 'n is more then 3!';
}

?>


</body>
</html>