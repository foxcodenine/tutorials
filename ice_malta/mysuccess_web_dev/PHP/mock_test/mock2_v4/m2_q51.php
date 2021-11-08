<?php

trait A {
    public function hello() {
        return 'hello';
    }
}

trait B {
    public function hello() {
        return 'Hello';
    }
}

class MyClass {
    use A, B {
        B::hello insteadOf A;
        A::hello as helloA;
    }
}

$object = new MyClass;

echo $object->hello();
echo $object->helloA();