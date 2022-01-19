<?php 

function my_callaback_function() {
    echo 'Hello World! <br>';
}

class MyClass {
    static function myCallbackMethod() {
        echo 'Hello World!<br>';
    }
}

call_user_func(function() {echo 'Hello World!<br>';});

$lambda = function() {echo 'Hello World!<br>';};
call_user_func($lambda);

call_user_func('my_callaback_function');

$obj = new MyClass;
call_user_func([$obj, 'myCallbackMethod']);

call_user_func(['MyClass', 'myCallbackMethod']);

call_user_func('MyClass::myCallbackMethod');






?>