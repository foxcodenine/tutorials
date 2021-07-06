<?php
include './my_print_functions.php';

// ----- Over View -----------------------------------------------------

// public -     the property or method can be accessed from everywhere. 
//              This is default

// protected -  the property or method can be accessed within the class
//              & by classes derived from that class (From Parent & Child)

// private -    the property or method can ONLY be accessed within the 
//              class (Only from Parent)

// Constants declared without any explicit visibility keyword are 
// defined as public.

// Visibility level cannot be overwriten by a child class both on 
// properties and methods.

// As of PHP7.1 visibility modifiers are allowed for class constants.

// Type hinting in methods cannot be overwriten, both args and result
//
// Ex: public function strFromint(int $n): string { 
//          return (string) $n;
//     }

// So when overwriten a method, Visibility Hinting and Number or args 
// must be the same as in parent class.

// The final keyword is used to prevent a class from being inherited.
// It can also be use in methods not to be overwriten.

ppp('A'); //____________________________________________________________

class ParentClass {

    public      $one = '1';
    private     $two = '2';
    protected   $three = '3';

    const               FOUR  = '4';
    private const       FIVE  = '5';
    protected const     SIX  = '6';

    function sayNums() {
        echo $this->one ,'<br>', $this->two ,'<br>', $this->three, '<br>';
    }
    function getPropTwo(): string {
        return $this->two;
    }
}

var_dump('ParentClass'); 

ppp('B'); //____________________________________________________________

class ChildClass extends ParentClass {
    // property over writen
    public     $one = '11';

    // As of PHP7.1 visibility modifiers are allowed for class constants.
    const               FOUR  = '44';
    protected const     FIVE  = '55';
    protected const     SIX  = '66';

    // public     $one = '11';              // <- However you cannot change the visibility level.

    function sayNumsAgain() {
        echo $this->one ,
        '<br>', $this->two ,                // <- Error, property private
        '<br>', $this->three, '<br>';
    }

    function getPropTwo(): string  {
        return ParentClass::getPropTwo();   // <- You need to call it trough a parent function
    }

    static function getConstants() {
        echo    self::FOUR, '<br>', 
                self::FIVE, '<br>', 
                self::SIX,  '<br>';
    }
}

var_dump('ChildClass'); 

ppp('C'); //____________________________________________________________

$bob = new ParentClass();
$dude = new ChildClass();

print_r($bob);                                                          qqq();
print_r($dude);                                                         qqq();

echo $bob->one;                                                         qqq();
echo $dude->one;                                                        

ppp('D'); //____________________________________________________________

// echo $bob->two;      // <- Error, property is private!
// echo $bob->three;    // <- Error, property is protected!

$bob->sayNums();                                                        qqq();
$dude->sayNums();                                                       qqq();
$dude->sayNumsAgain();  // Error calling a private prop from a child function                                                qqq();
                                                                        qqq();

echo $dude->getPropTwo();

ppp('E'); //____________________________________________________________



echo ChildClass::getConstants();