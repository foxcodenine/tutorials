<?php


    # FUNCTIONS - Block of code that can be reoeatedly called

    /*
        Camel Case - myFunction()
        Snake Case - my_function()
        Pascal Case - MyFunction()
    */

    // _________________________________________________________________

    // Create a Simple Function

    function simpleFunction(){
        echo 'Hello Simple Function!';
    }

    // Run Simple Function

    simpleFunction();

    // _________________________________________________________________

    // Function with Params

    function sayHelloTo($name='World'){
        echo "<p> Hello $name!</p>";
    }
    
    sayHelloTo('James');
    sayHelloTo('Joelle');
    sayHelloTo();

    // _________________________________________________________________

    // Return Value 
    function addNumbers($num1, $num2){
        return $num1 + $num2;
    }

    echo addNumbers(7, 8);

    // _________________________________________________________________

    // By Reference

    $myNum = 10;

    function addFive($num){
        $num += 5;
    }

    addFive($myNum);
    echo '<br>',$myNum;

    function addTen(&$num){
        $num += 10;
    }

    addTen($myNum);
    echo '<br>',$myNum;
?>
