<?php

class Robot {
    public $color = 'red';
    protected $name;

    public function setName ($name) {
        $this->name = $name;
    }
    public function getName () {
        return $this->name;
    }
}

$r2d2 = new Robot;
$r2d2->setName('R2DU');

echo $r2d2->color;
echo $r2d2->getName();

echo '<br><br><br>';
?>

<?php
class Prototype {

    public $modelNumber;

    public function modelNumber () {
        return "Modle No: {$this->modelNumber}";
    }

    public static function createProto() {
        $newProto = new self;
        $newProto->modelNumber = rand(0, 999999);
        return $newProto;
    }
}

$toy = Prototype::createProto();

echo $toy->modelNumber;
echo $toy->modelNumber();

echo '<br><br><br>';
?>

<?php
class Foo {
    public $bar;    
    public function __construct() {
        $this->bar = function() {
            return 42;
       };
    }
}

$obj = new Foo();
echo ($obj->bar)();
?>