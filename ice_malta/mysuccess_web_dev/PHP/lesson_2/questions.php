
<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 1</h3>

    <p class="question">
        Define a variable $table, and use a for loop to display the multiplication 
        table (from 1 to 10) for the said variable, in the form of:
        <br>1 x 5 = 5
        <br>2 x 5 = 10 ...
    </p>  

    <?php  
    // ------ Solution
    $table = "";

    for ($i=1; $i <= 10; $i++) {        
        $table .= "{$i} x 5 = " . $i*5 . "<br>";
    }
    
    // ------ Result
    echo "<p class='result'>{$table}<p>";

    ?>  

</section>

<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 2</h3>

    <p class="question">
        Repeat the same task, only this time using a do...while loop.
    </p>  

    <?php  
    // ------ Solution

    $table = "";
    $i = 1;

    do {
        $table .= "{$i} x 5 = " . $i*5 . "<br>";
        $i++;
    } while (
        $i <= 10
    );
    
    // ------ Result
    echo "<p class='result'>{$table}<p>";

    ?>  

</section>

<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
<h3>Exercise 3</h3>

<p class="question">
    Given a number within the range of 1...31 is stored in the variable $dayOfMonth,
    use a switch statement to output the number in ordinal form. 
    E.g. 1st, 22nd or 31st. Hint: use fall-through for numbers with similar behavio
</p>  

<?php  
// ------ Solution
    $dayOfMonth = 22;

    switch ($dayOfMonth) {
        case 1:
        case 21:
        case 31:
            $ordinal = "{$dayOfMonth}st";
            break;
        case 2:
        case 22:
            $ordinal = "{$dayOfMonth}nd";
            break;
        case 3:
        case 23:
            $ordinal = "{$dayOfMonth}rd";
            break;
        default:
            $ordinal = "{$dayOfMonth}th";

    }

// ------ Result
echo "<p class='result'>\$dayOfMonth = {$dayOfMonth}, &nbsp; \$ordinal = {$ordinal}<p>";

?> 

</section>
<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 4</h3>

    <p class="question">
    Having two numbers $a and $b, use an if statement to set $c to -1 
    if $a is less than $b, 1 if $a is greater than $b, and 0 if they are equal. 
    </p>  

    <?php  
    // ------ Solution
    [$a, $b] = [1, 5];

    if ($a < $b) {
        $c = -1;
    } else if ($a > $b) {
        $c = 1;
    } else {
        $c = 0;
    }
    
    // ------ Result
    echo "<p class='result'>\$a = {$a}, \$b = {$b} and \$c = {$c}<p>";

    

    ?>  

    <br><p class="question">
    Perform the same functionality using a ternary operation.
    </p>

    <?php

    // ------ Solution    
    $c = $a == $b ? 0 : ($a < $b ? -1 : 1);

    // ------ Result
    echo "<p class='result'>\$a = {$a}, \$b = {$b} and \$c = {$c}<p>";
    
    ?>

</section>
<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
<h3>Exercise 5</h3>

<p class="question">
    Use a loop to display the sequence of powers of 2 up till 1024 
    (1, 2, 4, 8, ..., 1024), without using any hard-coded values, 
    the pow function or multiplications. Hint: use bitwise operators.
</p>  

<?php  
// ------ Solution

    $r = [];
    $p = 1;
    $v = 1;

    while ($v < 1024) {
        $v = 1<<$p;
        $p++;
        array_push($r, $v);
    }
    $r = implode(', ', $r);


// ------ Result
echo "<p class='result'>({$r})<p>";

?>  

</section>
<!-- --------------------------------------------------------------- -->

