<?php


use foxcodenine\FoxClass;

use function foxcodenine\jack;

use const foxcodenine\RABIT;

use function foxcodenine\strlen as stringlength;

include '../my_print_functions.php';

require './ns.php';

ppp('A');// ____________________________________________________________

$f1 = new FoxClass('red');

echo $f1;   
                                                            qqq();

ppp('A');// ____________________________________________________________


echo jack(7);                                                           qqq();



ppp('B');// ____________________________________________________________


echo RABIT;                                                             qqq();


ppp('C');// ____________________________________________________________


echo strlen('Christopher');                                             qqq();
echo stringlength('Christopher');                                       qqq();



ppp('D');// ____________________________________________________________


require './catsAndDogs.php';



$my_dog = new dogs\DogClass();   // <- alternative to use

echo $my_dog->hello();                                                  qqq();



$my_cat = new \cats\CatClass();  // <- start with backslash is required when 
                                 //    current file has its own names space  
echo $my_cat->hello();                                                  


ppp('D');// ____________________________________________________________

// import mylti classes, function and const from same namespace

include './multyObjects.php';

use my_multi_namespace\{Class1, Class2, Class3};

use function my_multi_namespace\{func1, func2, func3};

use const my_multi_namespace\{NUMBER1, NUMBER2, NUMBER3};