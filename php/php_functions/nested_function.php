<?php


function parent() {

    // Once the parent has been called, child functions will be available globally.
    // Note that nested functions  are re-declared every time a function  is called.
    if (!function_exists('child1')) {
        function child1() {
            echo __FUNCTION__ . ' child1'. '<br>';
        }
    }

    // You may also use the nested functions inside of the parent.
    // And also lambda and clouses. 
    $child2 = function () {
        echo __FUNCTION__ . 'child2' . '<br>';
    };

    $child2();

    // Anonymous functions, lambda and clouses need to be returned and  
    // assigned to a global variable, to be accessed in th global scope. 
    return function() {
        echo __FUNCTION__ . 'child3' . '<br>';
    };
}

parent();

child1();

$child3 = parent();
$child3();

?>