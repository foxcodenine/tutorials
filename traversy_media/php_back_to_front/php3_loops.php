<?php

    # LOOPS - Executr code set number of times

    /**
     * For
     * While
     * Do..While 
     * Foreach
     */

     // ________________________________________________________________



     # For loops
     # @params - init, condition, inc

     for($i = 5; $i <= 10 ; $i++){
         echo 'For Loop # '.$i;
         echo '<br><br>';
     }


     // ________________________________________________________________

     # While loops
     # @parms - condition

     $i = 10; 

     while($i > 5){
         echo 'While Loop # '.$i.'<br>';
         $i --;
     }

     // ________________________________________________________________

     # Do...While loops
     # @params - condition

     $i = 0;

     do{
         echo '<br>Do...While Loop # '.$i;
         $i += 2;
     }

     while($i < 6);
    // ________________________________________________________________

    # Foreach loops

    $names = ['Dorothy', 'Sarah', 'Daniela', 'Caroline'];

    foreach($names as $name){
        echo '<br><br>'.$name;
    }

    // ______________________________

    $names = ['Dorothy' => 'dorothy@gmail.com', 
                'Sarah' => 'sarah@gmail.com', 
                'Daniela' => 'daniela@gmail.com', 
                'Caroline' => 'caroline@gmail.com'];

    foreach($names as $key => $val){
        echo '<br><br>';
        echo "$key : $val";
    }

?>