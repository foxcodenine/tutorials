<?php

// ------ Question 4 ---------------------------------------------------
function question_4_functionality($pages) {
        
    // if btn is pressed, check input
    if (isset($_POST['search_btn']) && empty(trim($_POST['search_input']))) {
        
        // if input empty
        echo '/'. $_POST['search_input'] . '/';
        $_SESSION['suggest'] = 'Serach field cannot be empty';
        header('Location: #search');
    
        // -----------------------------------------

    } else if (isset($_POST['search_btn']) && !empty(trim($_POST['search_input']))) {    
        
        // if input not empty, parse 
        $input = strtolower(trim($_POST['search_input']));

        $_SESSION['suggest'] = '';

        $suggest_array = [];

        // -----------------------------------------

        if (in_array($input, $pages)) {            
            // if input match
            header("Location: #$input");

        } else {

            foreach($pages as $page) {
                $similar_percentage = similar_text($input,  $page);             // <- check similarity 
                
                if ($similar_percentage >= 4) {                                 // <- if in range uppend $similar_percentage to $suggest_array
                                                            
                    $suggest_array = array_replace($suggest_array, [$page => $similar_percentage]);                     
                }
            }

            if (count($suggest_array) === 0) {                                  // <- if no match                                                                 
                $_SESSION['suggest'] = "No Match found for {$input}.";
                header('Location: #search'); 

            } else {

                asort($suggest_array);                                          // <- sort array
                $last_value = end($suggest_array);                              // <- get largest similar_p.. value 
                $last_key_array   = array_keys($suggest_array, $last_value);    // <- get corresponding key or keys
                
                $suggest_links = '';                                            // <- create suggest link or links (try: 'teach')
                foreach ($last_key_array as $key) {
                    $suggest_links .= "&nbsp;<a href='#{$key}'>{$key}</a>&nbsp;";
                }

                $_SESSION['suggest'] = "No Match found for {$input}. Did you meant {$suggest_links}!";
                header('Location: #search');                                    // <- setting link/s to $_SESSION
            }                                                                   //    and relocate
        }        
    }     
} 
// ------ End Question 4 -----------------------------------------------