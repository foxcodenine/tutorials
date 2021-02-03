<?php
// _____________________________________________________________________

// Function for admin/categories.php

function add_cat_to_db() {
    if (isset($_POST['submit'])) {

        global $conn;

        $cat_name_title = $_POST['cat_title'];
        
        if (trim($cat_name_title) === '' || empty($cat_name_title)) {

            echo '<h5 style="color: crimson;">This field should not be empty! </h5>';

        } else {    

            $sql = "INSERT INTO cms_categories (cat_title) VALUES ('{$cat_name_title}');";

            if ($conn->query($sql) !== TRUE) {
                echo "Error: " . "<br>" . $conn->error;
            } else {
                echo "<meta http-equiv='refresh' content='0'>";                                    
            }
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
                                echo "<td><a href='categories.php?delete={$cat_id}'>Delete</a></td>";
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

function admin_add_post() {

    global $conn;

    if (isset($_POST['create_post']) && $_POST['create_post'] === 'Publish Post') {

        $post_title = $_POST['post_title'];    
        $post_author = $_POST['post_author'];
        $post_category_id = $_POST['post_category_id'];
        $post_statas = $_POST['post_statas'];


        $post_image = $_FILES['post_image']['name'];
        $post_image_temp = $_FILES['post_image']['tmp_name'];

        $post_tags = $_POST['post_tags'];
        $post_content = $conn -> real_escape_string($_POST['post_content']);
        
        $post_date = date('d-m-y');

        


        move_uploaded_file($post_image_temp, "../images/{$post_image}");

        $sql  = "INSERT INTO cms_posts(
            post_cat_id, post_title, post_author, post_date, post_image, 
            post_content, post_tags,  post_statas) ";

        $sql .= "values({$post_category_id}, '{$post_title}', '{$post_author}', 
            now(), 'http://localhost/htdocs/cms/images/{$post_image}', '{$post_content}', 
            '{$post_tags}', '{$post_statas}')";
        

        if($conn->query($sql) !== TRUE) {
            die('Error:' . '<br>' . $conn->error);
        } else {
            header('Location: '. $_SERVER['PHP_SELF']);
        }
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
        $user_password = $_POST['user_password'];
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

?>