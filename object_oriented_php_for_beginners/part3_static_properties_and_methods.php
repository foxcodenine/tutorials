<?php 
include './my_print_functions.php';
ppp('A'); //____________________________________________________________


Class Airplane {

    private $model = 'airbus';
    private $airline;

    public $myCounter = 0;                  //<- Public property
    static $counter = 0;                    //<- Static property

    public static $range = 8000;            //<- Public Static property

    static  $avalableAirline = [            //<- Static property
        'American Airlines',
        'Lufthansa',
        'British Airways',
        'Emirates',
        'EVA Air'
    ];
 
    
    public function __construct() {            
        $this->myCounter++;                 //<- Update Public property
        self::$counter++;                   //<- Update Static property
    }

    public static function getExclAirline() {
                                            //<- Public Static method
        return self::$avalableAirline;      //   Can be call both from class & instance              
    }

    public function getRange() {             
        return self::$range;                //<- Static property can only be accesed                      
    }                                       //   or updated form an instant though a method 
    public function setRange($range) {
        return self::$range = $range;
    }

}

print_r(Airplane::$avalableAirline);                                   qqq();

ppp('B'); //____________________________________________________________


echo 'Class: '      , Airplane::$counter;                               qqq();

$a1 = new Airplane();
echo 'Class: '      , Airplane::$counter;                               qqq();
echo 'Instance: '   , $a1->myCounter;                                   qqq();

$a2 = new Airplane();
echo 'Class: '      , Airplane::$counter;                               qqq();
echo 'Instance: '   , $a2->myCounter;                                   qqq();

$a3 = new Airplane();
echo 'Class: '      , Airplane::$counter;                               qqq();
echo 'Instance: '   , $a3->myCounter;                                   qqq();

ppp('C'); //____________________________________________________________

print_r(Airplane::getExclAirline());                                    qqq();             
print_r($a3->getExclAirline());                                         qqq();             

ppp('D'); //____________________________________________________________

$a4 = new Airplane();

echo $a4->getRange();                                                   qqq();  
echo Airplane::$range;                                                  qqq();

$a4->setRange(16000);

echo $a4->getRange();                                                   qqq();  
echo Airplane::$range;                                                  qqq();

ppp('D'); //____________________________________________________________