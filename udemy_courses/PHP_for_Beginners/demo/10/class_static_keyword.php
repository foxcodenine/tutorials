<?php

// Declaring class properties or methods as static makes them accessible without
// needing an instantiation of the class. A property declared as static cannot
// be accessed with an instantiated class object (though a static method can).

class Foo {
    public static $aStaticProperty = 'foo static property';
    public $hello = 'foo hi hoo';

    public static function aStaticMethod() {

        return "foo static method";
    }    
    public function returnStaticProperty() {

        return Foo::$aStaticProperty;
    }    
}

echo "<br>____________________________________________________<br><br>";

// Checking Property

$myFoo = new Foo();

echo $myFoo->hello . "<br>";

echo gettype($myFoo) . "<br><br>";

// echo $myFoo->aStaticProperty . "<br>"; // <- this will give an error
                                          //  case property is static

echo Foo::$aStaticProperty . "<br>";      // <- it can only be use with class


echo "<br>____________________________________________________<br><br>";


// Checking Method

echo $myFoo->aStaticMethod() . "<br>";
echo $myFoo::aStaticMethod() . "<br><br>";

echo Foo::aStaticMethod()    . "<br>";

echo "<br>____________________________________________________<br><br>";

// A static property can be accessed in an inctance with a method 

echo $myFoo->returnStaticProperty();

echo "<br>____________________________________________________<br><br>";
