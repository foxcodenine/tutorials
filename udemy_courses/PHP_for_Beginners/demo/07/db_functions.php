<?php
//https://www.w3schools.com/php/php_includes.asp 

// _____________________________________________________________________

include "db.php";


function fetch_users_data() {

    $query  = "SELECT * FROM users";

    global $db_connection;

    $results = mysqli_query($db_connection, $query);

    if (!$results) {
        die('Query Failed! ' . mysqli_error());
    } 

    return $results;
}

// ________________________________


function create_select_option($results) {

    while($row = mysqli_fetch_assoc($results)) {
        
        $id = $row['id'];
        echo "<option value='$id'>$id</option>";
    }    
}

// ________________________________

function update_users_data() {

    $username = $_POST['username'];
    $password = $_POST['password'];
    $id = $_POST['id'];
    // echo "{$username} {$password} {$id}";

    $query = "UPDATE users SET ";
    $query .= "username = '{$username}', ";
    $query .= "password = '{$password}'  ";
    $query .= "WHERE id = {$id};";
    // echo $query;

    global $db_connection;

    $result = mysqli_query($db_connection, $query);
    

    if(!$result) {
        die("QUERY FAILED " . mysqli_error($db_connection));
    } else {
        echo "
        <small class=\"flash_message flash_message--success\">
            Record with id: '{$id}' has been updated!
        </small>";
    }
}

// ________________________________

function delete_users_record() {

    $id = $_POST['id'];

    $query = "DELETE FROM users ";
    $query .= "WHERE id = {$id};";
    // echo $query;

    global $db_connection;

    $result = mysqli_query($db_connection, $query);    

    if(!$result) {
        die("QUERY FAILED " . mysqli_error($db_connection));
    } else {
        echo "
        <small class=\"flash_message flash_message--warning\">
            Record with id: '{$id}' has been deleted!
        </small>";
    }
}

// ________________________________

function create_users_record() {

    if (isset($_POST['submit']) && $_POST['submit'] == 'create') {
        // echo "form has been submitted!";

        $username = $_POST['username'];
        $password = $_POST['password'];

        $query  = "INSERT INTO users(username, password)";
        $query .= "VALUES('{$username}', '{$password}')";

        global $db_connection;

        $result = mysqli_query($db_connection, $query);

        if (!$result) {
            die('Query Failed! ' . mysqli_error());
        } else {
            echo "
            <small class=\"flash_message flash_message--success\">
                Record with username '{$username}' has been created!
            </small>";
        }

        return $result;
    }
}

// ________________________________