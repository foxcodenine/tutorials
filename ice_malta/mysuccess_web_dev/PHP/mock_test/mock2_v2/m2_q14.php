<?php

trait A {
    public function hello() {
        return 'hello';
    }
}

trait B {
    public function Hello2() {
        return 'Hello';
    }
}

class MyClass {
    use A, B;
}

$object = new MyClass;

$object->Hello2();