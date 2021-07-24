<?php 
// https://www.geeksforgeeks.org/php-magic-constants/#:~:text=Magic%20constants%3A%20Magic%20constants%20are,is%20resolved%20at%20run%20time.


// _____________________________________________________________________

// namespace MagicConstants;

echo __DIR__ . '<br>';

echo __FILE__ . '<br>';

echo __LINE__ . '<br>';

echo __NAMESPACE__ . '<br>';


// _____________________________________________________________________

echo __FUNCTION__ . '<br>' ;


function foo () {

    return __FUNCTION__ . '<br>';
}

echo foo();

// _____________________________________________________________________


echo __CLASS__;

class Dog {

    public function test1 () {
        echo __CLASS__ . '<br>';
    }
    public static function test2 () {
        echo __CLASS__;
    }
}

echo Dog::test2() . '<br>';

$d = new Dog();
$d->test1();

// _____________________________________________________________________

echo __METHOD__ . '<br>';

// ______________________

class Cat {

    public function test1 () {
        echo __METHOD__ . '<br>';
    }
    public static function test2 () {
        echo __METHOD__ . '<br>';
    }
    public function test3 () {
        echo __FUNCTION__ . '<br>';
    }
    public static function test4 () {
        echo __FUNCTION__ . '<br>';
    }
}

// ______________________

$d = new Cat();
$d->test1();

echo Cat::test2();

$d = new Cat();
$d->test3();

echo Cat::test4();

// ______________________

function bar () {

    return __METHOD__ . '<br>';
}

echo bar();
// _____________________________________________________________________

echo __TRAIT__ . '<br>';




trait My_Trait {
    function gmg() {
        return __TRAIT__ . '<br>';
    }
}


class My_Class {
    use My_Trait;

    function gfg () {
        return __TRAIT__ . '<br>';
    }
}

$i = new My_Class();

echo $i->gmg();
echo $i->gfg();

// _____________________________________________________________________

// ClassName::class

class Alpha{ }
class Beta{ }

echo Alpha::class . '<br>';
echo Beta::class . '<br>'; 



// _____________________________________________________________________