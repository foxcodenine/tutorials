<?php 
header('Content-Type: application/json');

class MotherClass {
    protected static $cat = "Cat A";
    protected        $dog = "Dog A";

    public function bar () {
        echo $this->dog, PHP_EOL;
        echo MotherClass::$cat, PHP_EOL;
    }
}

class ChildClass extends MotherClass {
    protected static $cat = "Cat B";
    protected        $dog = "Dog B";

    public function foo() {
        echo  parent::$cat, PHP_EOL;
        parent::bar();
    }
}

$obj = new ChildClass();
$obj->foo();
?>