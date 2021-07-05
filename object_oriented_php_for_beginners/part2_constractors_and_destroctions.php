<?php
include './my_print_functions.php';
ppp('A'); //____________________________________________________________


// robot autonomous android
class Robot {
    private $name;
    private $class;

    // constructor function
    public function __construct($name, $class='autonomous'){
        echo "Hi, I am {$name}, the Robot!";
        $this->name = $name;
        $this->class = $class;
    }

    // destructor function
    public function __destruct(){
        echo $this->name . ' is destroyed!<br>';
    }

    public function getName(){
        return $this->name;
    }
    public function getClass(){
        return $this->class;
    }
    
    
}

$r1 = new Robot('Erika');                                               qqq();
$r2 = new Robot('Cortana', 'AI');                                       qqq();

echo $r1->getClass();                                                   qqq();
echo $r2->getClass();                                                   qqq();

ppp('B'); //____________________________________________________________

unset($r2);

echo '$r2 has beed put to sleep!<br><br>';