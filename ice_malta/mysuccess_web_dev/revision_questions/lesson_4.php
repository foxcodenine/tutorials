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
            <h2>MySuccess Website Developer - Lesson 4</h2>
            
            <section class="exercise">                
                <h3>Exercise 1</h3>

                <p>
                    Create a function incrementByN, which returns a function, 
                    that increments any given $number by $N.
                </p>  

                <?php

                    function incrementByN($n) {
                        $GLOBALS['n'] = $n;
                        
                        // return an anonymous function
                        return function($i) {
                            global $n;
                            return $i + $n;
                        };                        
                    }

                    $increment_by_5 = incrementByN((5));
                    $a = $increment_by_5(5);

                    $increment_by_7 = incrementByN((7));
                    $b = $increment_by_7(5);

                    $increment_by_5 = incrementByN((9));
                    $c = $increment_by_5(5);

                    echo "<p class='answer'>{$a} {$b} {$c}<p>";
                ?> 
            </section>
            <section class="exercise">                
                <h3>Exercise 2</h3>

                <p>
                    The Fibonacci sequence (1,1,2,3,5,8,13...) is a sequence 
                    which starts off with two successive 1’s, and follows by 
                    numbers which are the summation of the previous two numbers. 
                    Create both an iterative and a recursive function that take a 
                    parameter $n, and return the nth value of this sequence.
                </p>  

                <?php
                    // -------------------------------------------------
                    //  iterativ
                    
                    function iter_fib($n) {

                        if ($n < 1) {
                            return 'invalid value';
                        }

                        for ($i=[0, 1]; count($i) <= $n;) {
                            
                            $next_fib = $i[count($i)-1] + $i[count($i)-2] ;
                            array_push($i, $next_fib);
                        }
                        return $i[count($i)-1];
                    }

                    
                    $fib =  iter_fib(1);
                    echo "<p class='answer'>Fib by itrative function: {$fib}<p>";

                    // -------------------------------------------------
                    //  recursive

                    function recur_fib($n) {

                        $i = [0, 1];

                        function inner(&$n, &$i) {

                            if ($n < 1) {
                                return 'invalid value';

                            } else if(count($i) - 1 == $n) {
                                return end($i);

                            } else {
                                $next_fib = $i[count($i)-1] + $i[count($i)-2] ;
                                array_push($i, $next_fib);
                                return inner($n, $i);
                            }
                        };
                        return inner($n, $i);

                    }
                    $fib = recur_fib(3);
                    echo "<p class='answer'>Fib by recursive function: {$fib}<p>";
                    
                ?> 
            </section>
            <section class="exercise">                
                <h3>Exercise 3</h3>

                <p>
                    Create a function power_compute, that takes two parameters 
                    $a and $b as input and returns $a to the power of $b. 
                    Provide recursive and iterative solutions. Hint: for the 
                    recursive solution, remember that anything to the power of 
                    0 results to 1.
                </p>  

                <?php  
                
                    // -------------------------------------------------
                    //  iterativ

                    function power_compute_i($a, $b) {

                        $aa = $b  ? $a : 1;

                        for ($i=1; $i < $b; $i++) {
                            $aa = $aa * $a;
                        }
                        return $aa;
                    }

                    $fib = power_compute_i(2, 0);
                    echo "<p class='answer'>Iterativ power_compute function: {$fib}<p>";
                    

                    // -------------------------------------------------
                    //  recursive

                    function power_compute_r($a, $b) {

                        $aa = $b  ? $a : 1; 

                        function inner_r(&$a, &$b, &$aa) {                            

                            if ($b == 0) {
                                return $aa;

                            } else if ($b == 1) {                                
                                return $aa;

                            } else {
                                $b--;
                                $aa = $a * $aa;                                
                                return inner_r($a, $b, $aa);
                            }
                        } 

                        return inner_r($a, $b, $aa);
                        
                        // -------------------------------------------------
                    }
                    $fib = power_compute_r(3, 7);
                    echo "<p class='answer'>Recursive power_compute function: {$fib}<p>";
                    
                ?> 
            </section>
           
        </div>       
    
    </div>
</body>
</html>