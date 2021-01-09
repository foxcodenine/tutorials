<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Functions</title>
</head>
<body>

<?php
echo '<br><br>A function may be defined using syntax such as the following: <br>';

echo '<br><br> ---- example #1 Pseudo code ---- <br>';

// function can be defined after execution code
// parametes passed
// and values retuned 

$c = foo(5, 11);

function foo($aa, $bb) {
    echo "echo inside function: " . $aa + $bb;
    return $aa + $bb;
}

echo "<br> return value: {$c}";

// _____________________________________________________________________

echo '<br><br> ---- example #2 Conditional functions ---- <br>';

$make_bar = true;

if ($make_bar) {
    function bar() {
        echo "I don't exist until program execution reaches me. \n";
    }
}

if ($make_bar) bar();

// _____________________________________________________________________

echo '<br><br> ---- example #3 Functions within functions ---- <br>';

function rar() 
{   echo "rar() is called.\n";

    function baz()
    {
        echo "I don't exist until rar() is called.\n";
    }
}
rar();
baz();

// _____________________________________________________________________

echo '<br><br> ---- example #4 Recursive functions ---- <br>';

function recursion($a)
{
    if ($a < 10) {
        echo "$a\n";
        recursion($a + 1);
    } else {
        echo "recursion ended! \n";
    }
}

recursion(5);

?>
    
</body>
</html>