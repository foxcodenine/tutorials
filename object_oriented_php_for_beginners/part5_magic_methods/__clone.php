<?php 

include '../my_print_functions.php';
ppp('A'); //____________________________________________________________


Class Person {
    public $firstname;
    public $lastname;
    private $phone;

    static $counter = 0;

    public function __construct($firstname, $lastname, $phone)
    {        
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->phone = $phone;

        var_dump($this);
        self::$counter++;
    }

    function __clone()
    {
        var_dump($this);
        self::$counter++;
    }

    function __wakeup()
    {   
        var_dump($this);
        self::$counter++;
    }
   
}
$p = new Person(firstname:'Jane',lastname:'Doe', phone:'98653214');     qqq();

$q = clone $p;                                                          qqq();

$r = unserialize(serialize($p));                                        qqq();

echo Person::$counter;
