<?php

use PhpOption\None;

function escape($string) {

    global $conn;

    return $conn->real_escape_string(trim(htmlspecialchars($string)));
}
// _____________________________________________________________________

// Function for admin/categories.php

// function add_cat_to_db() {
//     if (isset($_POST['submit'])) {

//         global $conn;

//         $cat_name_title = $_POST['cat_title'];
        
//         if (trim($cat_name_title) === '' || empty($cat_name_title)) {

//             echo '<h5 style="color: crimson;">This field should not be empty! </h5>';

//         } else {    

//             $sql = "INSERT INTO cms_categories (cat_title) VALUES ('{$cat_name_title}');";

//             if ($conn->query($sql) !== TRUE) {
//                 echo "Error: " . "<br>" . $conn->error;
//             } else {
//                 echo "<meta http-equiv='refresh' content='0'>";                                    
//             }
//         }
//     } 
// }

function add_cat_to_db() {
    if (isset($_POST['submit'])) {

        global $conn;

        $cat_name_title = $_POST['cat_title'];
        
        if (trim($cat_name_title) === '' || empty($cat_name_title)) {

            echo '<h5 style="color: crimson;">This field should not be empty! </h5>';

        } else {    

            $stmt = mysqli_prepare(
                $conn, 
                "INSERT INTO cms_categories (cat_title) VALUES (?);"
            );

            // '{$cat_name_title}'

            mysqli_stmt_bind_param($stmt, 's', $cat_name_title);
            mysqli_stmt_execute($stmt);

            if ( !$stmt !== TRUE) {
                echo "Error: " . "<br>" . $conn->error;
            } else {
                echo "<meta http-equiv='refresh' content='0'>";                                    
            }

            mysqli_stmt_close($stmt);
        }
    } 
}

// _____________________________________________________________________

function delete_cat_from_db() {

    global $conn;
    

                        
    if (isset($_GET['delete'])) {

        $delete_cat_id = $_GET['delete'];

        $sql = "DELETE FROM cms_categories WHERE cat_id = '{$delete_cat_id}'";

        if ($conn->query($sql) !== TRUE) {
            echo 'Error:' . '<br>' . $conn->error;
        } else {
            // echo "<meta http-equiv='refresh' content='0'>";  // <- to refresh
            header("Location: categories.php");                 // <- to refresh
        }
    }
}

// _____________________________________________________________________

function echo_categories() {

    global $categories;

    if (isset($categories) && $categories->num_rows > 0) {
        

        while($row = mysqli_fetch_assoc($categories)) {

            $cat_id = $row['cat_id'];
            $cat_title = $row['cat_title'];

                                echo "<tr>";
                                echo "<td>{$cat_id}</td>";
                                echo "<td>{$cat_title}</td>";
                                echo "<td><a class='confirm-delete' href='categories.php?delete={$cat_id}'>Delete</a></td>";
                                echo "<td><a href='categories.php?edit={$cat_id}'>Edit</a></td>";
                                echo "</tr>";                                            
        }

    }  
}


// _____________________________________________________________________
// _____________________________________________________________________

// Function for admin/includes/edit_categories.php


function edit_select_cat() {
    // select cat to edit from GET request with ?edit=$id

    if (isset($_GET['edit'])) {

        global $conn;

        $edit_cat_id = $_GET['edit'];
        $sql = "SELECT * FROM cms_categories WHERE cat_id = '{$edit_cat_id}' LIMIT 1;";

        $edit_cat = $conn->query($sql);

        if ($conn->error) {
            die('Error: ' . '<br>' . $conn->error);
        } else {
            return  mysqli_fetch_assoc($edit_cat);             
        }
    }   
}
// _____________________________________________________________________


function edit_update_cat() {
    // updating category from a POST request ($_POST['id'], $_POST['title'])

    if (isset($_POST['update']) && trim($_POST['new_cat_title']) !== '') {

        global $conn;

        $new_cat_id = $_POST['new_cat_id'];
        $new_cat_title = $_POST['new_cat_title'];

        $sql  = "UPDATE cms_categories ";
        $sql .= "SET cat_title = '{$new_cat_title}' ";
        $sql .= "WHERE cat_id = '{$new_cat_id}';";

        if ($conn->query($sql) !== TRUE) {
            die('Error: ' . '<br>' . $conn->error);
        } else {
            header("Location: categories.php");
        }
    }
}
// _____________________________________________________________________
// _____________________________________________________________________
// function for admin/include/add_post.php

function fetch_post_data() {
    
    global $conn;

    $post_title = $_POST['post_title'];    
    $post_author = $_POST['post_author'];
    $post_category_id = $_POST['post_category_id'];
    $post_statas = $_POST['post_statas'];


    $post_image = $_FILES['post_image']['name'];
    $post_image_temp = $_FILES['post_image']['tmp_name'];

    $post_tags = $_POST['post_tags'];
    $post_content = $conn -> real_escape_string($_POST['post_content']);
    
    $post_date = date('d-m-y');

    return [
        $post_title, $post_author, $post_category_id, 
        $post_statas, $post_image, 
        $post_image_temp, $post_tags, $post_content
    ];
}

// _____________________________

function check_if_file_exits($file) {
    //function check if file name exits, rename if so and return
    if (file_exists($file)) {
        $file_array = explode('.', $file);
        
        $file_type = end($file_array);
        $array_length = count($file_array) - 1;
        array_splice($file_array, $array_length);

        $file = implode('.', $file_array) . '(copy)' . '.' . $file_type;  

        if (file_exists($file)){
            $file = check_if_file_exits($file);
        }    
        
    }
    return $file;
}
// _____________________________

function admin_add_post($post_array) {

    global $conn;
    // _____________________________________________________________
    // Fetching all NewPost data form $post_array

    [
        $post_title, $post_author, $post_category_id, 
        $post_statas, $post_image, 
        $post_image_temp, $post_tags, $post_content
    
    ] = $post_array;

    // _____________________________________________________________
    // check if file exits and rename if so

    $file_path_file = "../images/{$post_image}";
    $file_path_file = check_if_file_exits($file_path_file);

    // _____________________________________________________________

    // Get file name form filepath
    $file_name = end(explode('/', $file_path_file));

    // _____________________________________________________________

    // Saving the image file from tmp to our file_path 
    move_uploaded_file($post_image_temp, $file_path_file);

    // _____________________________________________________________

    // Saving all post data to db 

    $sql  = "INSERT INTO cms_posts(
        post_cat_id, post_title, post_author, post_date, post_image, 
        post_content, post_tags,  post_statas, post_viewed) ";

    $sql .= "values({$post_category_id}, '{$post_title}', '{$post_author}', 
        now(), 'http://localhost/htdocs/cms/images/{$file_name}', '{$post_content}', 
        '{$post_tags}', '{$post_statas}', 0)";
    

    if($conn->query($sql) !== TRUE) {
        die('Error:' . '<br>' . $conn->error);
    } else {

        // ---------------------------------------------------------
        // // Selecting The post Id

        // $sql = "SELECT post_id FROM cms_posts 
        //         WHERE 
        //         post_title='{$post_title}' AND 
        //         post_content='{$post_content}' AND
        //         post_tags='{$post_tags}';" ;

        // $result = $conn->query($sql);

        // if ($conn->error) {
        //     die('Error :' . '<br>' . $conn->error);
        // }

        // while ($row = $result->fetch_assoc()) {
        //     $current_post_id = $row['post_id'];
        // }
        // ---------------------------------------------------------

        //  This function is an alternative to the above code 
        //  It retrived the last insered id;
        $current_post_id = $conn->insert_id;

        header("Location: ". "../post.php?p_id={$current_post_id}");          

    }
    
}


// _____________________________________________________________________
// _____________________________________________________________________


// function for admin/include/view_all_post.php

// _____________________________

function clone_project($post_array) {
        global $conn;
    // _____________________________________________________________
    // Fetching all NewPost data form $post_array

    [
        $post_title, $post_author, $post_category_id, 
        $post_statas, $post_image, 
        $post_tags, $post_content
    
    ] = $post_array;

    // _____________________________________________________________
    // check if file exits and rename if so
    $file_name      = end(explode('/', $post_image));
    $file_source    = "../images/{$file_name}";
    $file_target    = check_if_file_exits($file_source);

    // _____________________________________________________________
    // update filename

    $file_name = end(explode('/', $file_target));
    
    // _____________________________________________________________
    // Saving the image file from tmp to our file_path 

    copy($file_source, $file_target);

    // _____________________________________________________________
    // Saving all post data to db 

    $sql  = "INSERT INTO cms_posts(
        post_cat_id, post_title, post_author, post_date, post_image, 
        post_content, post_tags,  post_statas, post_viewed) ";

    $sql .= "values({$post_category_id}, '{$post_title}', '{$post_author}', 
        now(), 'http://localhost/htdocs/cms/images/{$file_name}', '{$post_content}', 
        '{$post_tags}', '{$post_statas}', 0)";

    return $sql;
}

// _____________________________

function deleting_post_image($id) {
                
    global $conn;
    
    // ----- getting image path 
    $sql = "SELECT post_image FROM cms_posts WHERE post_id = {$id};";
    $image_object = $conn->query($sql);


    if(isset($image_object) && mysqli_num_rows($image_object) > 0) {

        // 1. converting to an url string
        $image_url = $image_object->fetch_assoc()['post_image'];

        // 2. splitting string to array
        $image_array = explode('/', $image_url);

        // 3. selecting image name from array
        echo $image_name = end($image_array);

        // 4. retuning absolute path to image
        echo $image_path = dirname(__DIR__) . "/images/{$image_name}";
        
        // 5. Deleting image
        unlink($image_path);
    } else {

        die('Error! post_id not found in db');
    }

    
}
// _____________________________________________________________________
// _____________________________________________________________________

// function for admin/include/add_user.php

function admin_add_user() {
    if (isset($_POST['create_user'])) {

        $user_firstname = $_POST['user_firstname'];
        $user_lastname = $_POST['user_lastname'];
        $user_role = $_POST['user_role'];
        $user_username = $_POST['user_username'];
        $user_password = password_hash($_POST['user_password'], PASSWORD_BCRYPT);
        $user_email = $_POST['user_email'];
        $user_date = $_POST['user_date'];



        $sql = "INSERT INTO cms_users(
                    user_firstname, user_lastname, user_role, user_username, 
                    user_password, user_email, user_date, user_image, user_randsalt
                ) VALUES (
                    '{$user_firstname}', '{$user_lastname}', 
                    '{$user_role}', '{$user_username}', '{$user_password}',
                    '{$user_email}', '{$user_date}', 'Null', 'Null'
                );";

        global $conn;                
        
        if ($conn->query($sql) != TRUE) {
            die('Error: ' . '<br>' . $conn->error);
        } else {
            header('Location: '. $_SERVER['PHP_SELF']);
        }
    }
    
}

function users_online() {

    global $conn;

    // -----------------------------
    $session = session_id();
    $time = time();
    $time_out_in_seconds = 60;
    $time_out = $time - $time_out_in_seconds;

    $sql = "SELECT * FROM cms_online WHERE session = '{$session}';";
    $result = $conn->query($sql);
    $count = $result->num_rows;

    // -----------------------------
    if ($count == NULL) {
        $sql = "INSERT INTO cms_online(session, time)
                VALUES(
                    '{$session}', '{$time}'
                );";
    } else {
        $sql = "UPDATE cms_online SET time='{$time}' WHERE session='{$session}'" ;
    }
    // -----------------------------
    $result = $conn->query($sql);
    if ($conn->error) {
        die('Error3: ' . '<br>' . $conn->error);
    }
    // -----------------------------
    $sql = "SELECT * FROM cms_online WHERE time > '{$time_out}'";
    $result = $conn->query($sql);
    if ($conn->error) {
        die('Error2: ' . '<br>' . $conn->error);
    }
    return $result->num_rows;
    // -----------------------------


}

// _____________________________________________________________________
// _____________________________________________________________________

// API function  
// echo to JS frontend users_online() if $_GET['on_line_users'] is set.

// https://stackoverflow.com/questions/39414008/fetch-api-get-data-from-php-file

function users_on_line_js() {
    if (isset($_GET['on_line_users'])) {
        
        global $conn;

        if (!$conn) {
            session_start();
            require_once '../includes/db.php';
        }

        echo users_online();
    } 
}
// __________________________________
// Exect the function
users_on_line_js();
// _____________________________________________________________________
// _____________________________________________________________________

// used in admin/users.php

function is_admin($username=''){

    global $conn;

    $sql = "SELECT user_role FROM  cms_users WHERE user_username = '{$username}';";
    $result = $conn->query($sql);
    
    if ($conn->error) {
        die('Error3: ' . '<br>' . $conn->error);
    }
    
    $row = $result->fetch_assoc();
    if($row['user_role'] == 'Admin'){
        return true;
    } else {
        return false;
    }
}

// _____________________________________________________________________

function redirect($location){

    header('Location: ' . $location);
    exit;
}

// _____________________________________________________________________

function ifItIsMethod($method=null){
    if($_SERVER['REQUEST_METHOD'] == strtoupper($method)){
        return true;
    } else {
        return false;
    }
}

// _____________________________________________________________________

function isLoggedIn(){
    if (isset($_SESSION['role'])) {
        return true;
    } else {
        return false;
    }
}

function ifUserLoggedInRedirect($redirectLocation) {
    if(isLoggedIn()) {
        redirect($redirectLocation);
    }
}

// _____________________________________________________________________

function image_palceholder($image) {
    if ($image) {
        return $image;
    } else {
        return 'http://localhost/htdocs/cms/images/no_image.jpg';
    }
}

// _____________________________________________________________________

function my_query($sql) {
    global $conn;

    $result = $conn->query($sql);

    if ($conn->error) {
        die('Error: <br>' . $conn->error);
    } else {
        return $result;
    }
}

// _____________________________________________________________________

function logged_in_user_id() {
    if(isLoggedIn()) { 
        $username = $_SESSION['username'];
        $result = my_query(
            "SELECT * FROM cms_users WHERE user_username = '{$username}'"
        );

        if ($result->num_rows >= 1) {
            $row = $result->fetch_assoc();
            return $row['user_id'];
        }
        return false;        
    }
}




function user_liked_this_post($post_id=false){

    $user_id = logged_in_user_id();

    if ($user_id && $post_id) {

        $sql = "SELECT * FROM cms_likes
                WHERE post_id = {$post_id}
                AND user_id = {$user_id}";

        $result = my_query($sql);

        return $result->num_rows > 0 ? true : false;

    } else {
        die('Error: post_id or user_id not provided');
    }
}


function fetch_likes_count($post_id=false){
    if ($post_id) {

        $sql = "SELECT * FROM cms_posts WHERE post_id={$post_id}";

        $result = my_query($sql);

        $row = $result->fetch_assoc();
        return $row['post_likes'];
    } else {
        die('Error: No post id!');
    }
    
}


// _____________________________________________________________________


?>