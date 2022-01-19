
<!-- helper functions ---------------------------------------------- -->
<?php
function result_wraper(...$args) {    
    echo '<br>';
    foreach($args as $arg) {
        if ($arg == end($args)){
            echo "<p class='result'>> {$arg} <p><br>";
        } else {
            echo "<p class='result'>  {$arg} <p>";
        }        
    }
}
?>
<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 1</h3>

    <p class="question">
    Create an array with some translations to Italian (the keys will be in English). 
    Create a function that takes in the English value, and returns the Italian 
    version if found, otherwise it returns Non lo so.

    </p>  

    <?php  

    // ------ Solution
    $exteralSourceEng2Ita = [
        'red'=>'rosso',     'blue'=>'azzurro',  'green'=>'verde',
        'yellow'=>'giallo', 'purple'=>'viola',  'orange'=>'arancione',
        'pink'=>'rosa',     'white'=>'bianco',  'black'=>'nero',
        'brown'=>'marrone', 'gray'=>'grigio',   'black'=>'nero',
    ];
    
    function english2Italian($word) {

        global $exteralSourceEng2Ita;
        $word = strtolower($word);

        if (in_array($word, array_keys($exteralSourceEng2Ita))) {
            return ucfirst($exteralSourceEng2Ita[$word]);
        } else {
            return 'Non lo so';
        }
    }   
    

    // ------ Result

    result_wraper(
        "echo english2Italian('brown');", 
        english2Italian('brown')
    );
    
    result_wraper(
        "echo english2Italian('blue');", 
        english2Italian('blue')
    );

    result_wraper(
        "echo english2Italian('silver');", 
        english2Italian('silver')
    );
    
    ?>  

</section>

<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 2</h3>

    <p class="question" >
    Create a 2-Dimensional array, with a ‘battle-ships’ grid, containing a 
    Boolean true where there’s a ship, and a Boolean false where there isn’t.
    Create a function play, which takes the x/y coordinate, and returns 
    whether it was a hit or miss.    
    </p>  
    <img  src="./static/img/Battleships1.jpg" alt="" width="150" height="150"><br>

    <?php  

    
    // ------ Solution
    # I am setting the grids (game board) to be a 10x10,
    # and the battleship to take 3 spaces.

    $battleShipGrid = [
        'horizontal'=> [
            1=>false, 2=>true, 3=>true, 4=>true, 5=>false,
            6=>false, 7=>false, 8=>false, 9=>false, 10=>false,
        ],
        'vertical'=> [
            'A'=>false, 'B'=>true, 'C'=>false, 'D'=>false, 'E'=>false,
            'F'=>false, 'G'=>false, 'H'=>false, 'I'=>false, 'J'=>false, 
        ]
    ];

    function play($x, $y) {
        // step1 fetch/set variables
        global $battleShipGrid;
        $pos = $x . strtoupper($y);

        // step2 fetch ship on both h and v axis
        $vertical = array_keys($battleShipGrid['vertical'], 1);
        $horizontal = array_keys($battleShipGrid['horizontal'], 1);

        // step3 both array should have a 1x3 form
        if (count($vertical) ===1) {
            $vertical = array_pad($vertical, 3, $vertical[0]);
        } else {
            $horizontal = array_pad($horizontal, 3, $horizontal[0]);
        }

        // step4 combine h with v array
        $shipLocation = array_map(function($v, $h){
            return $h . $v;
        }, $vertical, $horizontal);

        // step5 check args and return        
        return in_array($pos, $shipLocation) ? 'hit' : 'miss';        
    }

    
    // ------ Result  
  
    
    result_wraper(
        "echo play(2, 'B');", 
        play(2, 'B')
    );

    result_wraper(
        "echo play(2, 'C');", 
        play(2, 'C')
    );

    result_wraper(
        "echo play(4, 'B');", 
        play(4, 'B')
    );
            
    ?>  

</section>

<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 3</h3>

    <p class="question">
    Create an array and fill it with some numbers. Create a function, that takes 
    an array and a number as parameters, that multiplies every element in the 
    array by the multiplier. Hint: use a foreach loop.
    </p>  

    <?php  

    // ------ Solution
    # I use array_map instade of a foreach loop ;)

    $arrayA = [1, 2, 3, 4];
    $arrayB = [-15, 0, 15, 150];

    function phpNumPy($array, $multiplier) {
        
        return array_map(function($n) use ($multiplier){
            return $n * $multiplier;
        }, $array);
    }

    // ------ Result


    result_wraper(
        '$arrayA = [1, 2, 3, 4];',
        '&nbsp;', 
        "echo implode(', ', phpNumPy(\$arrayA, 3));",
        implode(', ', phpNumPy($arrayA, 3))
    );
    
    result_wraper(
        '$arrayB = [-15, 0, 15, 150];',
        '&nbsp;', 
        "echo implode(', ', phpNumPy(\$arrayB, 2));",
        implode(', ', phpNumPy($arrayB, 2))
    );
    ?>  

</section>

<!-- --------------------------------------------------------------- -->