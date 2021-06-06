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
            <h2>MySuccess Website Developer - Lesson 2</h2>
            <section class="exercise">
                
                <h3>Exercise 1</h3>

                <p>
                    Define a variable $table, and use a for loop to display the 
                    multiplication table (from 1 to 10) for the said variable, in 
                    the form of:
                    <br>1x5=5
                    <br>2 x 5 = 10 ...
                </p>  

                <?php 
                    
                    $table = "";
                    for ($i = 1; $i <= 10; $i++) {
                        $table .= "{$i}x5 = " . $i*5 . "<br>";
                    }
                    echo "<p class='answer'>{$table}<p>";

                ?>          
            </section>

            <section class="exercise">
                <h3>Exercise 2</h3>

                <p>Repeat the same task, only this time using a do...while loop.</p>  

                <?php                     
                    $table = "";
                    $i = 1; 

                    do {
                        
                        $table .= "{$i}x5 = " . $i*5 . "<br>";
                        $i++;                       

                    } while ($i <= 10);                   

                    echo "<p class='answer'>{$table}<p>";
                ?>          
            </section>

            <section class="exercise">
                <h3>Exercise 3</h3>

                <p>
                    Given a number within the range of 1...31 is stored in the 
                    variable $dayOfMonth, use a switch statement to output the 
                    number in ordinal form. E.g. 1st, 22nd or 31st. Hint: use 
                    fall-through for numbers with similar behavio
                </p>  

                <?php                     
                    $dayOfMonth = 23;

                    switch ($dayOfMonth) {
                        case 1:
                        case 21:
                        case 31:
                            $suffix = 'st';
                            break;
                        case 2:
                        case 22:
                            $suffix = 'nd';
                            break;
                        case 3 :
                        case 23:
                            $suffix = 'rd';
                            break;
                        default:
                            $suffix = 'th';
                    }
                    echo "<p class='answer'>{$dayOfMonth}{$suffix}<p>";
                ?>          
            </section>

            <section class="exercise">
                <h3>Exercise 4</h3>

                <p>
                    Having two numbers $a and $b, use an if statement to set 
                    $c to -1 if $a is less than $b, 
                    1 if $a is greater than $b, and 0 if they are equal. 
                    Perform the same functionality using a ternary operation.
                </p>  

                <?php                     
                    [$a, $b] = [10, 1];
                    
                    if ($a < $b) {
                        $c = -1;
                    } else if ($a > $b) {
                        $c = 1;
                    } else {
                        $c = 0;
                    }

                    echo "<p class='answer'>c = {$c};<p>"; 

                ?>          
            </section>

            <section class="exercise">
                <h3>Exercise 5</h3>

                <p>
                    Use a loop to display the sequence of powers of 2 up till 1024 
                    (1, 2, 4, 8, ..., 1024), without using any hard-coded values, 
                    the pow function or multiplications. Hint: use bitwise operators.
                </p>  

                <?php  

                    [$m, $n, $o] = [0, 1, ''];                  
                    while ($n < 1024) {
                        
                        $n =  1 << $m;                        
                        $m += 1;
                        $o .= $n . ' ';
                    }

                    echo "<p class='answer'>Sequence of powers of 2 up till 1024: {$o}<p>"; 


                ?>          
            </section>
                    


        </div>       
    
    </div>
</body>
</html>