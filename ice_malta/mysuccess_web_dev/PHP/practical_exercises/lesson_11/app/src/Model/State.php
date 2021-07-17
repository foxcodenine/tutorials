<?php
namespace src\Model;



class  State {

    public static $validateFirstname; 
    public static $validateLastname;
    public static $validateEmail; 
    public static $validateCheckIn; 
    public static $validateCheckOut;

    public static $backgroundColor = '#f3f3f8';   
    public static $code;   


    public static $firstname;
    public static $lastname;
    public static $email;
    public static $checkIn;
    public static $checkOut;

    public static $adults;
    public static $children;
    public static $rooms;

    const COLORS = [
        'sky' => '#f3f3f8', 'white' => '#FFF', 'orange' => '#FFE4B5',
        'cyan' => '#E0FFFF', 'yellow' => '#FAFAD2', 'lavender' => '#E6E6FA',
        'gray' => '#D1D4D0', 'pink' => '#FFF0F5', 'mint' => '#CBFFCB',
        'brown' => '#F0D8CC'
    ];

    public static function clear() {

        self::$validateFirstname = ''; 
        self::$validateLastname = '';
        self::$validateEmail = ''; 
        self::$validateCheckIn = ''; 
        self::$validateCheckOut = '';
    
        self::$firstname = '';
        self::$lastname = '';
        self::$email = '';
        self::$checkIn = '';
        self::$checkOut = '';
 
        self::$adults = '';
        self::$children = '';
        self::$rooms = '';


        
    }

    public static function setDefaultDate() {
        if(self::$checkIn == '') {
            self::$checkIn = date('Y-m-d');

        } 
        if(self::$checkOut == '') {            

            $oldDate = date('Y-m-d');
            $newDate = new \DateTime($oldDate);
            $newDate->add(new \DateInterval('P1D')); // P1D means a period of 1 day
            self::$checkOut = $newDate->format('Y-m-d');
        } 
    }
}