
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
    Assume we are expecting a URL in the form of /student/:id, where :id 
    represents a numeric identifier, write a function that would return 
    this id, for a given URL in this format.
    </p>  

    <?php  

    // ------ Solution
    function idFromURL($url) {
        $url_array = explode('/', $url);
        $ending = end($url_array);

        // $id = intval($ending) ? $ending  : '<span class="danger">Invalid URL</span>'; # <- didn't work with url2 :D
        $id = preg_match("/\b\d+\b/", $ending) ? $ending  : '<span class="danger">Invalid URL</span>';
        return $id;        
    }

    // ------ Result
    $url1 = 'https://vle2.thestudentcampus.com/ICEMALTA#/dorothy/095475';
    
    result_wraper("echo idFromURL('{$url1}')", idFromURL($url1));
    

    $url2 = 'https://vle2.thestudentcampus.com/ICEMALTA#/chris/397284m';

    result_wraper("echo idFromURL('{$url2}')", idFromURL($url2));


    $url3 = 'https://vle2.thestudentcampus.com/ICEMALTA#/assessment/v2';

    result_wraper("echo idFromURL('{$url3}')", idFromURL($url3));

    
    ?>  

</section>

<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 2</h3>

    <p class="question">
    Create a function concat_parts, which takes in a variable number of 
    inputs (using a variadic), and returns a string which joins these 
    parameters together with a : in- between.
    </p>  

    <?php  

    // ------ Solution
    function concat_parts(...$i) {
        $s = implode(':', $i);
        return $s;
    }

    // ------ Result
    
    # test with multy args
    result_wraper(
        "echo concat_parts(1, 'bb', 333, 'cccc');", 
        concat_parts(1, 'bb', 333, 'cccc')
    );

    # test with 1 arg    
    result_wraper(
        "echo concat_parts('CHRIS FARRUGIA');", 
        concat_parts('CHRIS FARRUGIA')
    );

    # test with no args
    result_wraper(
        "echo concat_parts();", 
        concat_parts()
    );    

    ?>  

</section>

<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 3</h3>

    <p class="question">
    Create a function date_translate that takes in a date in UK format 
    (dd/mm/yyyy), and returns the function in US format (mm/dd/yyyy). 
    Hint: use preg_replace.
    </p>  

    <?php  

    // ------ Solution

    function date_translate($date) {
        preg_match("/(^\d{2})\/(\d{2})/", $date, $a);        
        return preg_replace("/^\d\d\/\d\d/", "{$a[2]}/{$a[1]}", $date);
    }

    // ------ Result

    result_wraper(
        "echo date_translate('12/08/1984');", 
        date_translate('12/08/1984')
    ); 

    ?>
    
    <!-- ---------- -->

    <p class="question">
    A step further :) Sometimes by mistake the day or month are inserted as single 
    digits and the year as 2 digits. Update the function to accept also these formats.
    </p>  
    
    
    <?php

    // ------ Solution

    function date_translate_2($date) {
        preg_match("/(^\d\d?)\/(\d\d?)\/(\d{2}$|\d{4}$)/", $date, $a);
        $dd   = strlen($a[1]) === 2 ? $a[1] : '0' . $a[1];
        $mm   = strlen($a[2]) === 2 ? $a[2] : '0' . $a[2];
        $yyyy = strlen($a[3]) === 4 ? $a[3] : ( 21 >= (int)$a[3] ? '20' . $a[3] : '19' . $a[3]);
        
        return "{$mm}/{$dd}/{$yyyy}";
    }

    // ------ Result

    $date_1 = '12/1/90';
    $date_2 = '1/10/09';
    $date_3 = '4/2/1992';
    
    result_wraper(
        "echo date_translate_2('{$date_1}');", 
        date_translate_2($date_1)
    ); 
    
    result_wraper(
        "echo date_translate_2('{$date_2}');", 
        date_translate_2($date_2)
    ); 
    
    result_wraper(
        "echo date_translate_2('{$date_3}');", 
        date_translate_2($date_3)
    ); 
    

    # This was my 1sy attempt!!
    /* 
    function date_translate($date) {
        preg_match("/^\d\d?/", $date, $day);
        preg_match("/\/\d\d?\//", $date, $month);
        preg_match("/\d\d?/", implode($month), $month);
        preg_match("/\d{2}$|\d{4}$/", $date, $year);

        $day = implode($day);
        $day = strlen($day) === 2 ? $day : '0' . $day;

        $month = implode($month);
        $month = strlen($month) === 2 ? $month : '0' . $month;

        $year = implode($year);
        $year = strlen($year) === 4 ? $year : ( 21 >= (int)$year ? '20' . $year : '19' . $year);
        return "{$month}/{$day}/{$year}" .'<br>';        
    }

    date_translate('03/05/1112');
    */    
  

    ?>  

</section>

<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 4</h3>

    <p class="question">
    A phone number in the UK has 11 digits. A premium phone number 
    (a phone number where you get charged extra if you call)     starts with 
    070 or 090. Create a function that takes in a string containing any 
    text, that returns true if it contains a premium phone number within it.
    </p>  

    <?php  

    // ------ Solution
    function isPremiumNo($s){        
        return preg_match('/0[7|9]0\d{8}/', $s, $a);
    }

    function bool2str($bool=false) {
        return $bool ? 'True' : 'False';
    }



    // ------ Result
    $phone1 = 'hello my number is 09034567890!';
    $phone2 = 'hello my number is 07034567890!!';
    $phone3 = 'hello my number is 05034567890!!!';

    // echo bool2str(isPremiumNo($phone1));

    result_wraper(
        "\$phone1 = '{$phone1}';",
        "&nbsp;",
        "echo bool2str(isPremiumNo(\$phone1));",
        bool2str(isPremiumNo($phone1))
    );

    result_wraper(
        "&nbsp;",
        "\$phone2 = '{$phone2}';",
        "&nbsp;",
        "echo bool2str(isPremiumNo(\$phone2));",
        bool2str(isPremiumNo($phone2))
    );

    result_wraper(
        "&nbsp;",
        "\$phone3 = '{$phone3}';",
        "&nbsp;",
        "echo bool2str(isPremiumNo(\$phone3));",
        bool2str(isPremiumNo($phone3))
    );

    ?>  

</section>

<!-- --------------------------------------------------------------- -->
