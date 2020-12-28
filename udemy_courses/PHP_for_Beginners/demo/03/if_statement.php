<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP If Statement</title>
</head>
<body>

<!-- https://riptutorial.com/php/example/7164/null-coalescing-operator----- -->
<!-- https://riptutorial.com/php/example/7608/ternary-operator----- -->
<!-- https://www.codementor.io/@sayantinideb/ternary-operator-in-php-how-to-use-the-php-ternary-operator-x0ubd3po6 -->

<?php 
// _____________________________________________________________________

// ---- if, ifelse and else

$a = 31;
$b = 32;

if ($a < $b) {
    echo 'a is less then b';
} elseif ($a == $b) {
    echo 'a is equal to b ';
} else {
    echo 'a is bigger b';    
}

echo '<br>';

// _____________________________________________________________________


// ---- Ternary Operator (?:)

// The ternary operator can be thought of as an inline if statement. It
// consists of three parts. The operator, and two outcomes.

$mark = 51;

echo ($mark >= 50) ? 'Pass' : 'Fail';

echo '<br>';


// _____________________________________________________________________


// ---- Null Coalesing Operator (??)

// This operator returns its first operand if it is set and not NULL.
// Otherwise it will return its second operand.

$_POST = ['name' => 'Chris', 'surname' => 'Farrugia'];

$name = $_POST['age'] ?? 'nobody';

echo $name . '<br>';

// This operator can also be chained (with right-associative semantics):

$name = $_GET['name'] ?? $_POST['name'] ?? 'nobody';

echo $name . '<br>';

// _____________________________________________________________________


// ---- Spaceship Operator (<=>)

// This operator will return -1, 0 or 1 if the first expression is less
// than, equal to, or greater than the second expression.

echo  1 <=> 1;

echo '<br>';

echo  1 <=> 0;

echo '<br>';

echo  0 <=> 1;

echo '<br>';


?>


</body>
</html>