<?php

include './my_print_functions.php';

ppp('A'); //____________________________________________________________



// ----- Yoda Condition, Constant on the left:

$w = 'world';

if ($w = 'worlds') { // <- mistake
    echo 'match <br>';
} else {
    echo 'does not matcho <br>';
}

// if ('worlds' = $w ) { // <- will give an error
//     echo 'match <br>';
// } else {
//     echo 'does not matcho <br>';
// }

ppp('B'); //____________________________________________________________

// ----- backtick

echo `whoami` . '<br>';

ppp('C'); //____________________________________________________________

$aaaa = <<<ENDING
hello world
ENDING;

echo $aaaa;

ppp('D'); //____________________________________________________________

// ----- md5() -----rand()

echo md5(rand(), true) . '<br>';
echo md5(rand()) . '<br>';
echo rand(10, 20) . '<br>';

ppp('E'); //____________________________________________________________

for ($i = 0; $i < 5; $i++) {
    echo $i . '<br>';
}

echo 'After loop ends $i is still ' . $i;

ppp('F'); //____________________________________________________________

$n = 0;

do {

    $n++;

    if (0 !== $n % 2) continue;
    if (10 === $n) break;
    echo $n . '<br>';
} while ($n <= 20);

ppp('G'); //____________________________________________________________

// ----- Namespace

include './NamespaceA.php';

use function NamespaceA\aaaa;
use NamespaceA\AA as myAA;
use const NamespaceA\AAA;

aaaa();

$AA = new myAA();

echo AAA;

echo '<br><br>';

// ________________________________

include './NamespaceB.php';

NamespaceB\bbbb();
$BB = new NamespaceB\BB();
echo NamespaceB\BBB;


ppp('H'); //____________________________________________________________

echo '<br>';

echo php_ini_scanned_files() . '<br>';

ppp('H'); //____________________________________________________________


$array = ['a', 'b', 'c', 'd', 'e'];

while (current($array) == true) {
    echo current($array);
    next($array);
    
}

ppp('i'); //____________________________________________________________

echo $_SERVER['DOCUMENT_ROOT'] . '<br>';
echo __DIR__ . '<br>';
echo `pwd` . '<br>';
