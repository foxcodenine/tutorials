<?php
header('Content-Type: application/json');

class MyClass {
    public $cloneNo = 0;

    public function __clone() {
        ++$this->cloneNo;
    }
}


$obj1 = new MyClass;
$obj2 = $obj1;

var_export($obj2 === $obj1);

echo $obj1->cloneNo;
echo $obj2->cloneNo;

$obj3 = clone $obj2;
echo $obj3->cloneNo;










