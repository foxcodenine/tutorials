<?php

function foo() {

    $numArgs = func_num_args();

    $args    = func_get_args();

    $fistArg = func_get_arg(0);

    echo 'Number or arguments: ' . $numArgs . '<br>';
    echo '1st argument: ' . $fistArg . '<br>';
    var_export($args);
    echo '<br>';

}

foo('000', 1, 'two', 'THREE', 'iv');


function bar(?string $data): void {
    $data = 'Changed';

    if (func_num_args() > 0) {
        echo func_get_arg(0);
    }    
}

bar(null);

echo '<br><br><br>';

function baz($required, $optional = null, ...$variadic) {

    printf(
        'Required: %d; Optional: %d; number of variadic paramiters: %d <br>', 
        $required, $optional,  count($variadic)
    );
}

baz(1);
baz(1, 2);
baz(1, 2, 3);
baz(1, 2, 3, 4);
baz(1, 2, 3, 4, 5);

echo '<br><br><br>';


function addOne(&$arg) {
    $arg++;
}

$a = 1;
addOne($a);
echo $a;

echo '<br><br><br>';



function getFullName($nameAndSurname): string {
    return $nameAndSurname;
}

echo gettype(getFullName(123456));

echo '<br><br><br>';

function sayHello():void {
    echo 'Hello World! <br>';
}
$greedings = sayHello();
var_dump($greedings);


echo '<br><br><br>';

function red() {
    static $r = 0;
    $r++;
    return $r;
}

echo red() . '<br>';
echo red() . '<br>';
echo red() . '<br>';


function blue() {
    $b = 0;
    $b++;
    return $b;
}

echo blue() . '<br>';
echo blue() . '<br>';
echo blue() . '<br>';

?>
