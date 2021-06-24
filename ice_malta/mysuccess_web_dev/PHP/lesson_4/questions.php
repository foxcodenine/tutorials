
<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 1</h3>

    <p class="question">
    Create a function incrementByN, which returns a function, that increments 
    any given $number by $N.
    </p>  

    <?php  

    // ------ Solution
    function incrementByN($n) {

        $innerFunc = function ($i) use ($n){
            return $i + $n;
        };         
        return $innerFunc;
    }

    // ------ Note!!
    // 1. inner functions should be an anonymous functions.
    // 2. they can be assigned to a variable else returned directly. 
    // 3. to pass variables from outer to inner func the variables 
    //    needs to be declared with the keyword 'use'.
    // 4. you must put a ; after the inner function's declaration
    

    // ------ Result

    $addFive = incrementByN(5);    
    
    echo "<p class='result'>\$addFive = incrementByN(5); <br></p>"; 
    
    echo "<p class='result'>\$addFive(100) return " . $addFive(100) . "<br><br></p>";    
   

    $addSeven = incrementByN(7);    
    
    echo "<p class='result'>\$addSeven = incrementByN(7); <br></p>"; 
    
    echo "<p class='result'>\$addSeven(100) return " . $addSeven(100) . "<br><br></p>";    
   

    ?>  

</section>

<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 2</h3>

    <p class="question">
    The Fibonacci sequence (1,1,2,3,5,8,13...) is a sequence which starts off 
    with two successive 1’s, and follows by numbers which are the summation of 
    the previous two numbers. Create both an iterative and a recursive function 
    that take a parameter $n, and return the nth value of this sequence.
    </p>  

    <?php  

    // ------ Iterative Solution

    function fibIterative($n) {
        
        if ($n < 1) { return "<span class='danger'>arg must be >= the 1</span>";}
        if ($n === 1) {return 1;}
        // _________________________

        $fibs = [1, 1];

        for ($i=2; $i < $n; $i++){
            array_push($fibs , $fibs[count($fibs)-2] + $fibs[count($fibs)-1]);
        }

        return end($fibs);
        
    }
    
    // ------ Results
    echo '<br>Iterative Solution:<br><br>';
    echo "<p class='result'>fibIterative(1);<br></p>";  
    echo "<p class='result'>> ". fibIterative(1) . "<br><br></p>";
       
    echo "<p class='result'>fibIterative(6);<br></p>";  
    echo "<p class='result'>> ". fibIterative(6) . "<br><br></p>";   

    echo "<p class='result'>fibIterative(0);<br></p>";  
    echo "<p class='result'>> ". fibIterative(0) . "<br><br></p>";   


    // ------ Recursive Solution


    function fibRecursive($n) {
        
        if ($n < 1) { return "<span class='danger'>arg must be >= the 1</span>";}
        if ($n === 1) {return 1;}
        // _________________________

        $fibs = [1, 1];

        $inner = function() use ($n, &$fibs, &$inner) {
            if (count($fibs) >= $n) {
                return end($fibs);
            } else {   
                array_push($fibs , $fibs[count($fibs)-2] + $fibs[count($fibs)-1]);        
                $inner();
            }            
        };
        $inner();
        return end($fibs);        
    }

    // ------ Note!!
    // 1. to change value of variables declared in outer function from inner, 
    //    variable should be pass by reference and using the 'use' keyword

    // 2. Recursive Inner Functions!!! 
    //    should also be pass by reference and using the 'use' keyword
    
    // ------ Results
    echo '<br>Recursive Solution:<br><br>';
    echo "<p class='result'>fibRecursive(1);<br></p>";  
    echo "<p class='result'>> ". fibRecursive(1) . "<br><br></p>";
       
    echo "<p class='result'>fibRecursive(6);<br></p>";  
    echo "<p class='result'>> ". fibRecursive(6) . "<br><br></p>";   

    echo "<p class='result'>fibRecursive(0);<br></p>";  
    echo "<p class='result'>> ". fibRecursive(0) . "<br><br></p>"; 
    ?>  

</section>

<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 3</h3>

    <p class="question">
    Create a function power_compute, that takes two parameters $a and $b as 
    input and returns $a to the power of $b. Provide recursive and iterative 
    solutions. Hint: for the recursive solution, remember that anything to 
    the power of 0 results to 1.
    </p>  

    <?php

    // ------ Iterative Solution
    function power_compute_i($a, $b) {

        $itrations = 0;
        $value = 1;
        $negative_power = false;

        if ($b < 0) {
            $negative_power = true;
            $b = $b * -1;
        }

        while ($itrations < $b) {
            $value *= $a;
            $itrations++;
        }

        if ($negative_power) {
            $value = 1 / $value;
        }
         
        return $value;
    }   

    // ------ Result
    echo '<br>Iterative Solution:<br><br>';
    echo "<p class='result'>power_compute_i(5, 2);<br></p>";  
    echo "<p class='result'>> ". power_compute_i(5, 2) . "<br><br></p>";
       
    echo "<p class='result'>power_compute_i(5, -2);<br></p>";  
    echo "<p class='result'>> ". power_compute_i(5, -2) . "<br><br></p>";   

    echo "<p class='result'>power_compute_i(5, 0);<br></p>";  
    echo "<p class='result'>> ". power_compute_i(5, 0) . "<br><br></p>"; 

    // ------ Recursive Solution

    function power_compute_r($a, $b) {

        $itrations = 0;
        $value = 1;
        $negative_power = false;

        if ($b < 0) {
            $negative_power = true;
            $b = $b * -1;
        }

        $inner = function() use ($a, $b, &$itrations, &$value, &$inner) {
            if ($b > $itrations) {
                $itrations++;
                $value *= $a;
                $inner();
            }
        };

        $inner();

        if ($negative_power) {
            $value = 1 / $value;
        }
         
        return $value;
    }


    // ------ Result

    echo '<br>Recursive Solution:<br><br>';   
    echo "<p class='result'>power_compute_r(2, 3);<br></p>";  
    echo "<p class='result'>> ". power_compute_r(2, 3) . "<br><br></p>";
       
    echo "<p class='result'>power_compute_r(2, -3);<br></p>";  
    echo "<p class='result'>> ". power_compute_r(2, -3) . "<br><br></p>";   

    echo "<p class='result'>power_compute_r(2, 0);<br></p>";  
    echo "<p class='result'>> ". power_compute_r(2, 0) . "<br><br></p>";  

    ?>  

</section>

<!-- --------------------------------------------------------------- -->
