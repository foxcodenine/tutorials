<?php

header('Content-Type: application/json');

class AAA {

 public function sayHello() {
 echo 'Hi, my name is ' . __CLASS__ . PHP_EOL;
 }
}

class BBB extends AAA {

}

class CCC extends BBB {

}

$objB = new BBB;
$objC = new CCC();

$objB->sayHello();
$objC->sayHello();


?>
<?php
class  ParentClass {
    protected $a;    protected $b;
    public function __construct($a, $b) {
        $this->a = $a;
	  $this->b = $b;
    }
}

class ChildClass extends ParentClass {
    protected $c;
    public function __construct($a, $b, $c) {
        parent::__construct($a, $b);
	  $this->c = $c;
    }
}

$kid = new ChildClass(12, 8, 1984);

var_export($kid);