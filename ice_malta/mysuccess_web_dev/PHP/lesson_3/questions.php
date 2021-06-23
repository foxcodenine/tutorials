
<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 1</h3>

    <p class="question">
    Implement a function mul, which takes 2 parameters $a and $b. $a needs to be 
    passed by reference, and after the function is called, it should contain the 
    value of the multiplication of the 2 numbers.
    </p>  

    <?php  

    // ------ Solution
    function mul(&$a, $b) {
        $a *= $b;
    }

    [$a, $b] = [6, 7];

    
    // ------ Result
    echo "<p class='result'>Before calling mul function: \$a = {$a} and \$b = {$b}.<p><br>";
    
    mul($a, $b);

    echo "<p class='result'>After calling mul function: &nbsp;\$a = {$a} and \$b = {$b}.<p>";

    ?>  

</section>

<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 2</h3>

    <p class="question">
    Implement a function called averageVar, which takes a variable number 
    of parameters (using variadics) and returns their average.
    </p>  

    <?php  

    // ------ Solution
    function averageVar(...$p){
        return array_sum($p) / count($p);
    }
    
    [$a, $b, $c] = [3, 6, 9];

    $d = averageVar($a, $b, $c);
    
    // ------ Result
    echo "<p class='result'>Params passed into function averageVar {$a} {$b} & {$c}. Returned value {$d}.<p><br>";    
    ?>  

</section>

<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 3</h3>

    <p class="question">
    The formula F=mg is used to calculate the force of gravity based on 
    the mass (m) and a gravitational constant (g) which is a constant of 9.8. 
    Set $g as a variable (outside our function), and create a function called 
    getForce, which will use the global variable to calculate the force 
    on the mass given as a function parameter.
    </p>  

    <?php  

    // ------ Solution
    $g = 9.8;

    function getForce($m) {
        global $g;
        return $g * $m;
    }

    $m = 50;

    $f = getForce($m);
    
    // ------ Result
    echo "<p class='result'>
    According Newton’s second law of motion :) <br>
    An object with a mass of {$m} will have a gravitational pull force of {$f} on it.
    <p><br>";
    
    ?>  

</section>

<!-- --------------------------------------------------------------- -->
