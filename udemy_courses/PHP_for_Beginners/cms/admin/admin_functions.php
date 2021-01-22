<?php
// _____________________________________________________________________

// Function for categories.php

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

// Function for includes/edit_categories.php


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




?>