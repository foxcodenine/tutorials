
<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 1</h3>

    <p class="question">
    Use a heredoc to write out a simple html page that displays the current date 
    (using the function date("Y/m/d")), by writing out all the HTML code within PHP code, 
    and then outputting the value of the heredoc using an echo statement.
    </p>  

    <?php  

    // ------ Solution

    $todayIs = date("Y/m/d");

    $markup = <<<End_Doc

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Today Date</title>
    </head>
    <body>
        <div style="background-color: palegoldenrod;">
            <p class='result'>{$todayIs}</p>
        </div>
    </body>
    </html>
    End_Doc;    

    // ------ Result
    echo $markup; 

    ?>  

</section>

<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 2</h3>

    <p class="question">
    Create a function pad_output, that takes 2 parameters as input, $number and 
    $length. Use the printf function to display the $number padded to a length 
    $length with leading 0’s
    </p>  

    <?php  

    // ------ Solution

    function pad_output($number, $length){
        printf("%0{$length}d", $number);
    }    

    // ------ Result
    echo "<p class='result'>pad_output(2,5); <br></p>"; 
     
    echo "<p class='result'>> "; 
    pad_output(2,5);
    echo"<br></p>"; 


    ?>  
   


</section>

<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 3</h3>

    <p class="question">
    Create a function that takes a string $s, and outputs the contents of the 
    said string with spaces in-between every character. 
    Ex: icemalta becomes i c e m a l t a.
    </p>  

    <?php  

    // ------ Solution 1 using array

    function stringSpliter1(string $s='') {
        $n = strlen($s);
        $r = '';

        for ($i = 0; $i < $n; $i++) {

            if ($s[$i] !== ' ') {
                $r .= $s[$i] . ' ';
            } else {
                $r .= '&nbsp;' . ' ';
            }            
        }
        return $r;
    }

    // ------ Solution 2 using In-Build function
    // (I added to search for new in-build function)
    

    function stringSpliter2(string $s='') {
        $my_array  = str_split($s, 1);
        $my_string = implode(' ', $my_array);
        $my_string = str_replace('   ', ' &nbsp; ', $my_string,);

        return $my_string;
    }

      

    // ------ Result

    $bString = 'This is the second string of a guitar..!';
    $dString = 'And this is the 4th string of a guitar.!';

    echo "<p class='result'>" . $bString . "<br>" . stringSpliter1($bString) ."<p><br>";
    echo "<p class='result'>" . $dString . "<br>" . stringSpliter2($dString) ."<p><br>";

    


    // ------ Notes!!

    /** In-Build functions 
     * 
     *      explode(separator, string, limit);
     * 
     *      implode(separator,array);
     * 
     *      array_replace(array1, array2, array3, ...);
     * 
     *      str_replace(find, replace, string, count);
     * 
     *      str_split(string, length);
     * 
     *      strlen(string);
     * 
     *      count(array);
     * 
     *      sizeof(array);
     */

    ?>  
   
    

</section>

<!-- --------------------------------------------------------------- -->

<section class="exercise">
                
    <h3>Exercise 4</h3>

    <p class="question">
    Create an array variable $pages = array(“lessons”, “classroom”, “teaching”). 
    Imagine these are the relative URL’s of a section on our website, and whenever 
    one has a typo (e.g. types in teachhing instead of teaching), we can suggest 
    the correct URL instead of showing a plain old 404 page. The function can 
    either return the correct URL, or null if a close match is not found. 
    Hint: use the similar_text function.
    </p>  

    <?php  

    // ------ Solution

    $pages = ["lessons", "classroom", "teaching"];
    
    session_start();
    
    if (isset($_POST['search_btn']) && empty(trim($_POST['search_input']))) {
        
        echo '/'. $_POST['search_input'] . '/';
        $_SESSION['suggest'] = 'Serach field cannot be empty';
        header('Location: #search');

    } else if (isset($_POST['search_btn']) && !empty(trim($_POST['search_input']))) {    

        $suggest = $_POST['search_input'];
        $_SESSION['suggest'] = '';
        header('Location: #teaching');
    } 
    
    ?>

    <!-- SEARCH PAGE AND SUGGEST ----------------------------------- -->

    <div class="search" id="search">
        <form action="?" method="post">
            <input type="text" name="search_input" class="search__input">

            <button type="submit" name="search_btn">search</button>

            <span><?php if(isset($_SESSION['suggest'])) echo $_SESSION['suggest']; ?></span>
        </form>
    
    </div>

    <!-- PAGES ----------------------------------------------------- -->

    <?php foreach($pages as $page) { 
    
    $my_page =  file_get_contents("data/{$page}.txt")
    ?>

    <div class="sub_section" id="<?php echo $page; ?>">
        <div class="sub_section__title"><?php echo $page; ?></div>
        <div class="sub_section__main">
            <?php echo substr($my_page , 0, 200) . '...'; ?>
        </div>
    </div>

    <?php }?>
    <!-- ----------------------------------------------------------- -->


</section>

<!-- --------------------------------------------------------------- -->