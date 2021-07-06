<?php

use Person as GlobalPerson;

include './my_print_functions.php';
ppp('A'); //____________________________________________________________



class Person {

    public $name;
    protected $age;
    private $phone;

    public function __construct($name, $age, $phone)        
    {
        $this->name = $name;
        $this->age = $age;
        $this->phone = $phone;
    }
    
    public function greedings() {
        return 'Hi from person to you!!';
    }

    final public function sayHello() {
        return 'Hello!';
    }
}


final class  Person2 {
    public $name;
    protected $age;
    private $phone;

    final public function greedings() {
        return 'Hi from person to you!!';
    }
}


// class Men extends Person2 {
        // // <- Error class Person2 cannot be inherited since it has final.
        
// }


class Employee extends Person {

    private $salary;

    // method extended and over written
    public function __construct($name, $age, $phone, $salary)
    {
        parent::__construct($name, $age, $phone);
        $this->salary = $salary;
    }

    // method over written
    public function greedings() {
        return 'Hello, I am an employee: ' . $this->name;
    }

    // public function sayHello() {    //<- Error, method is declared final in 
    //     return 'Hi!';               //   parent class can't be overwritten
    // }
}

// _____________________________________________________________________

$rocky = new Employee('Rocky Balboa', 36, 88554411, 500);
print_r($rocky);                                                        qqq();

echo $rocky->greedings();

ppp('B'); //____________________________________________________________

class Student extends Person {
    public $studentNo;

    public function __construct($name, $age, $phone, $studentNo)
    {
        Person::__construct($name, $age, $phone);
        $this->studentNo = $studentNo;
    }

    function sayHello2() {
        return 'Hello I am student number: ' . $this->studentNo;
    }
}
$pour = new Student('Pour Easy', 16, 78451245, 1123);

echo $pour->sayHello();                                                 qqq();
echo $pour->sayHello2();                                                qqq();

ppp('C'); //____________________________________________________________