<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./static/css/style.css">
    <title>Rev Questions - L2</title>
</head>
<body>
    <div class="container">
        <div class="question">
            <h2>MySuccess Website Developer - Lesson 3</h2>
            
            <section class="exercise">                
                <h3>Exercise 1</h3>

                <p>
                    Implement a function mul, which takes 2 parameters $a and $b. 
                    $a needs to be passed by reference, and after the function is 
                    called, it should contain the value of the multiplication of 
                    the 2 numbers.
                </p>  

                <?php
                    $a = 5;
                    $b = 10;
                    function mul(&$a, $b) {
                        $a = $a * $b;
                    }

                    echo "<p class='answer'>\$a before mul function is called {$a}.<p>";
                    mul($a, $b);
                    echo "<p class='answer'>\$a after mul function is called {$a}.<p>";
                ?> 
            </section>
            <section class="exercise">                
                <h3>Exercise 2</h3>

                <p>
                    Implement a function called averageVar, which takes a variable 
                    number of parameters (using variadics) and returns their average.
                </p>  

                <?php

                    function averageVar(...$nums) {

                        $my_array = func_get_args(); // <- not required u can use $num below
                        return array_sum($my_array) / count(($my_array));
                    }

                    $average = averageVar(1,2,3);
                    echo "<p class='answer'>This average of the given paramites is {$average}<p>";
                ?> 
            </section>
            <section class="exercise">                
                <h3>Exercise 3</h3>

                <p>
                    The formula F=mg is used to calculate the force of gravity based 
                    on the mass (m) and a gravitational constant (g) which is a constant 
                    of 9.8. Set $g as a variable (outside our function), and create a 
                    function called getForce, which will use the global variable to 
                    calculate the force on the mass given as a function parameter.
                </p>  

                <?php

                    $g = 9.8;                   

                    function getForce($m) {
                        return $GLOBALS['g'] * $m;
                    }

                    $m = 10;
                    $f = getForce(($m));
                    
                    echo "<p class='answer'>The force of gravity of an object with {$m} mass is {$f}.<p>";
                ?> 
            </section>
           
        </div>       
    
    </div>
</body>
</html>