<?php 

class MyClassA implements Serializable {

    function __sleep() {
        echo '__sleep<br>';
        return array();
    }
    function __wakeup() {
        echo '__wakeup<br>';
        // return array();
    }

    function serialize()    {
        echo 'serialize<br>';
        return serialize(array());
    }

    function unserialize($i) {
        echo 'unserialize<br>';
    }
    function __serialize()    {
        echo '__serialize<br>';
        return array();
    }

    function __unserialize($i) {
        echo '__unserialize<br>';
    }
}

$testA = new MyClassA;

$sss = serialize($testA);

$testB = unserialize($sss);