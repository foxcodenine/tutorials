<?php 

include '../my_print_functions.php';
ppp('A'); //____________________________________________________________

// https://riptutorial.com/php/example/4604/--sleep---and---wakeup-- 

// __sleep and __wakeup are methods that are related to the serialization process. serialize
// function checks if a class has a __sleep method. If so, it will be executed before any
// serialization. __sleep is supposed to return an array of the names of all variables of an object
// that should be serialized.

// __wakeup in turn will be executed by unserialize if it is present in class. It's intention is to
// re-establish resources and other things that are needed to be initialized upon unserialization


Class Person {
    public $firstname;
    public $lastname;
    private $phone;

    public function __construct($firstname, $lastname, $phone)
    {        
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->phone = $phone;
    }

    public function __sleep()
    {   
        echo "<br>I going to sleep!<br><br>";
        
        unset($this->phone);
        return['firstname', 'lastname'];
    }
    public function __wakeup()
    {   
        echo "I am wakeing up!<br><br>";
        $this->mobile = 79547885;
    }
    
}
$p = new Person(firstname:'Jane',lastname:'Doe', phone:'98653214');


var_dump($p);                                                           qqq();


$serialized = serialize($p);

$q = unserialize($serialized);

var_dump($p);                                                           qqq();

var_dump($q);