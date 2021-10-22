<?php 
header('Content-Type: application/json');
class Person {
    public $firstname = 'name';
    public $lastname   = 'surname';
    private $id;

    public function __toString() {
        return "{$this->firstname} {$this->lastname}";
    }
}

$chris = new Person;
$chris->firstname = 'Christopher';
$chris->lastname  = 'Farrugia';

echo $chris;
?>
<?php
class foo { }

class_alias('foo', 'bar');

$a = new foo;
$b = new bar;
$c  = new stdClass;

// the objects are the same
var_dump($a == $b, $a === $b);
var_dump($a instanceof $b);
var_dump($a instanceof $c);

// the classes are the same
var_dump($a instanceof foo);
var_dump($a instanceof bar);

var_dump($b instanceof foo);
var_dump($b instanceof bar);

?>