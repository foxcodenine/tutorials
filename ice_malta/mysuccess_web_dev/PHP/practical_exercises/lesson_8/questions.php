
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

function array_wraper($array) { 
    $n = 1;   
    $str = 'Array ( <br>';
    foreach($array as $key => $value) {
        $str .= "&nbsp; &nbsp; &nbsp; &nbsp;[{$key}] => {$value}";

        if(count($array) !== $n) {
            $str .= ",<br>"; 
        } else {
            $str .= "<br>";
        }
        
        $n++;
    }
    $str .=  '&nbsp; )';
    return $str;

}
?>
<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 1</h3>

    <p class="question">
    Create a function ip_sort that takes in an array of IP addresses, and 
    sorts them. Keep in mind that 192.168.1.1 should come after 2.2.2.2.2;
    </p>  

    <?php  

    // ------ Solution
    
    function ip_sort($array) {
        natsort($array);
        return $array;
    }

    $myCloudServers = Array(
        'awsRS2_1' => '192.168.1.1',
        'awsRS2_2' => '5.189.191.288',
        'awsRS2_3' => '45.105.207.32',
        'digitalOcean_drop1' => '122.96.31.39',
        'digitalOcean_drop2' => '36.110.31.135',
        'godaddyLinux1' => '2.2.2.2.2',
    );     
  

    // ------ Result        
        # befor function is called
        result_wraper(
            '<span class="info">Before function is called:</span>',
            '&nbsp;',
            'print_r($myCloudServers);',
            array_wraper($myCloudServers)
        );
        # after function is called
        result_wraper(
            '<span class="info">After function is called:</span>',
            '&nbsp;',
            'print_r(ip_sort($myCloudServers));',
            array_wraper(ip_sort($myCloudServers))
        );  
    
    ?>  

</section>

<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 2</h3>

    <p class="question">
    Create function that operates on an array of number, and returns only 
    the even numbers.
    </p>  

    <?php  

    // ------ Solution

    function fetchEvenNo($numbers){

        return array_filter($numbers, function($n){
            if($n % 2 === 0) {
                return $n;
            }
        });
    }           

    // ------ Result

    $table7 = range(7, 70, 7);

    result_wraper(
        '$table7 = range(7, 70, 7);',
        '&nbsp;',
        'print_r(fetchEvenNo($table7);',
        array_wraper(fetchEvenNo($table7))
    ); 
    ?>  

</section>

<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 3</h3>

    <p class="question">
    Use the function created in Lesson 6, to convert a whole list of dates 
    from US to UK format.
    </p>     

    <?php  

    # I have just found about namespace, I'm trying them out.
    # And actually in lesson6 the function did the opposite, from UK to US.

    // ------ Solution
    
    require_once './my_functions.php';

    $birthdaysUS = [
        'mandy' => '8/17/86',
        'leah'  => '4/4/14',
        'charlotte' => '11/29/15',
        'alan' => '8/9/1984'  
    ];

    $birthdaysUK = array_map(
        'testing_namespace\date_US_to_UK', 
        $birthdaysUS
    );
    
    // ------ Result
    result_wraper(
        '<span class="info">Original Array:</span>',
        'print_r($birthdaysUS);',
        '&nbsp;',
        array_wraper($birthdaysUS)
    ); 
    
    result_wraper(
        '<span class="info">Result:</span>',
        'print_r($birthdaysUK);',
        '&nbsp;',
        array_wraper($birthdaysUK)
    ); 
    ?>  




</section>

<!-- --------------------------------------------------------------- -->
