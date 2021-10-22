<?php
class A {
    public $prop1 = 100;
    public $prop2 = 100;

    public function __sleep() {

        $this->prop1 *= 2;
        return ['prop1', 'prop2'];        
    }

    public function __wakeup() {
        $this->prop1 *= 3;
    }     
}
?>