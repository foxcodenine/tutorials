<?php 

include './my_print_functions.php';

ppp('1'); //____________________________________________________________

// What is the output of the following code?
class C {

    public $x = 1;
    function __construct() {
        ++$this->x; 
    }
    function __invoke() { 
        return ++$this->x; 
    }
    function __toString() { 
        return (string) --$this->x;
     }
}


$obj = new C();
echo $obj();

// A. 0
// B. 1
// C. 2
// D. 3

// my_answer = 

ppp('2'); //____________________________________________________________

// Consider the following code. Which keyword should be used in the line
// marked with "KEYWORD" instead of "self" to make this code work as
// intended?

// abstract class Base { 
//     protected function __construct() {
//     }
//     public static function create() {

//     return new self(); // KEYWORD
//     }
//     abstract function action();
// }

// class Item extends Base {
//     public function action() { 
//         echo __CLASS__; 
//     }
// }
// $item = Item::create();
// $item->action(); // outputs "Item"

// my_answer = 

ppp('3'); //____________________________________________________________

// Which SPL class implements fixed-size storage?

// my_answer = 

ppp('4'); //____________________________________________________________

// In order to create an object storage where each object would be stored 
// only once, you may use which of the following? (Choose 2)

// A. SplFixedArray
// B. SplObjectStorage
// C. SplString
// D. spl_object_hash
// E. spl_same_object

// my_answer = 

ppp('5'); //____________________________________________________________

// // What is the output of the following code?
// class Base {
//     protected static function whoami() {
//         echo "Base ";
//     }
//     public static function whoareyou() {
//         self::whoami();
//     }
// }

// class A extends Base {
//     public static function test() {
//         Base::whoareyou();
//         self::whoareyou();
//         parent::whoareyou();
//         A::whoareyou();
//         static::whoareyou();
//     }
//     public static function whoami() {
//         echo "A ";
//     }
// }

// class B extends A {
//     public static function whoami() {
//         echo "B ";
//     }
// }
// B::test();

// A. B B B B B
// B. Base A Base A B
// C. Base B B A B
// D. Base B A A B

// my_answer = 

ppp('6'); //____________________________________________________________


// What is the difference between static and self

class AAAA {
    public static function returnVar () {
        echo '<br>' . __CLASS__ . '<br>';
    }

    public static function getSelf () {
        return self::returnVar();
    }

    public static function getStatic () {
        return static::returnVar();
    }
}

AAAA::getSelf();      // AAAA
AAAA::getStatic();    // AAAA

// ________________________

class BBBB extends AAAA {

}

BBBB::getSelf();      // AAAA
BBBB::getStatic();    // AAAA

// ________________________

class CCCC extends AAAA {
    public static function returnVar () {
        echo '<br>' . __CLASS__ . '<br>';
    }
}

CCCC::getSelf();      // AAAA
CCCC::getStatic();    // CCCC

ppp('7'); //____________________________________________________________


