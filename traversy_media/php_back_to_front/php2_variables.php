<?php

    

    // Single line comment
    #  Single line comment 
    /*
        Multiline
        comment
    */


    
    // echo 'Hello php World!'; 
    // print 'Hello php World!'; // will also return a value but echo is faster; 

    // $output = 'My first php variable';

    // echo  $output;



    #VARIABLES 
    /*
        - Prefix $ 
        - Start with a letter or a underscore 
        - Onky letters, numbers and undersores 
        - Case sensitive     
    */

    #DATA TYPES 
    /*
        - Strings 
        - Integers 
        - Floats
        - Booleans 
        - Arrays 
        - Objects
        - Null 
        - Resources
    */
    


    // Operators + - * / ** %
    $num1 =4;
    $num2 = 10;
    $num3 = $num1 + $num2;



    // Concatenate
    $string1 = 'Hello';
    $string2 = 'World';
    $greeting = $string1 . ' ' . $string2 . '!';

    $greeting2 = "$string1 $string2!";
    

    // Escape sequence
    $string3 = 'They\'re Here';


    $float1 = 4.4;
    $bool1 = true;

    // Constant
    // Syntex: define(name,value,case_insensitive)

    define('NAME', 'Christopher');
    define('SURNAME', 'Farrugia', true);

    echo NAME;
    echo surname;


    echo $string3;
    
?>