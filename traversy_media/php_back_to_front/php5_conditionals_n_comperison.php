<?php 

function ppp($a){
    echo "<br><br>($a)________________________________________________<br><br>";
}

ppp(1); // _____________________________________________________________

# CONDITIONALS

/*
    ==    <- Value Matches
    ===   <- Value and data Type Matches
    <
    >
    <=
    >=
    !=
    !==
*/


$num = '10';

if($num < 10){
    echo "$num < is 10!";
} else if ($num > 10) {
    echo "$num > is 10!";
} else if ($num === 10) {
    echo "$num is identical to 10";
} else {
    echo "$num equals 10";
}

ppp(2); // _____________________________________________________________

# NESTION IF

if($num > 4){
    if($num < 10){
        echo "$num passed";
    }
    else { echo "$num did not pass!";}
}

ppp(3); // _____________________________________________________________


# LOGICAL OPERATORS

/*

$a and $b 	And 	TRUE if both $a and $b are TRUE.
$a or $b 	Or  	TRUE if either $a or $b is TRUE.
$a xor $b 	Xor 	TRUE if either $a or $b is TRUE, but not both.
! $a 	    Not 	TRUE if $a is not TRUE.
$a && $b 	&&   	TRUE if both $a and $b are TRUE.
$a || $b 	|| 	    TRUE if either $a or $b is TRUE.


The reason for the two different variations of "and" and "or"
operators is that they operate at different precedences.

*/
$num = 1;

if($num > 4 || $num < 10){
    echo "Passed 1st round <br>";

    if($num > 4 && $num < 10){
        echo "Passed 2nd round <br>";
    }
} 

ppp(4); // _____________________________________________________________

# SWITCH 

$favColor = 'blue';

switch($favColor){
    case 'red':
        echo 'Your favorite color is red.';
        break;
    case 'blue':
        echo 'Your favorite color is blue.';
        break;
    case 'green':
        echo 'Your favorite color is green.';
        break;
    default:
        echo 'Your favorite color is somthing else.';
}

ppp(5); // _____________________________________________________________

// TERNERY OPERATOR

// Syntax: (Condition) ? (Statement1) : (Statement2);

$marks=39;
print ($marks>=40) ? "pass" : "Fail";

?>