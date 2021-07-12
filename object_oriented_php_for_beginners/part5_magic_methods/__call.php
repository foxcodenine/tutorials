<?php


include '../my_print_functions.php';
ppp('A'); //____________________________________________________________


class Person {
    private $firstname;
    private $lastname;
    private $phone = 12345678;

    static $hello = "...hello  nice to meet you!";

    // _________________________________________________________________

    public function setPhone ($phone) {
        $this->phone = $phone;
    }
    public function setFistname($name) {
        $this->firstname = $name;
    }
    public function setLastname($name) {
        $this->lastname = $name;
    }

    public function __call($name, $arguments)
    {
        if ($name === 'setphone') {
            $this->setPhone($arguments);

        } elseif($name === 'setfullname'){
            $this->setFistname($arguments[0]);
            $this->setLastname($arguments[1]);
        }
    }

    // _________________________________________________________________

    function __get($name)
    {        
        $properties = array_keys(get_object_vars($this)); 

        if (in_array($name, $properties)){
            return $this->$name;
        } 
    }
}

// _____________________________________________________________________

$p = new Person;

$p->setfullname('Jessica', 'Farrugia');

echo $p->firstname, ' ', $p->lastname, '<br>';

$p->setphone(98765432);
echo $p->phone;

qqq();
$p->phone = 79310145; //<- Error


// _____________________________________________________________________