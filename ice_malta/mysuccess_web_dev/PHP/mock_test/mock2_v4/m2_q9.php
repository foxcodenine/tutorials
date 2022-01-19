<?php

class Test {
    public function _call($name, $args) {
        call_user_func_array(array('static', "test$name"), $args);
    }

    public function testS($l) {
        echo "$l";
    }
}

class Test2 extends Test {
    public function testS($l) {
        echo "$l,$l";
    }
}

$test = new Test2();
$test->testS('A');

?>
