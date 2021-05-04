<?php

function escape($string) {

    global $conn;

    return $conn->real_escape_string(trim(htmlspecialchars($string)));
}



// _____________________________________________________________________

function redirect($location) {
    return header("Location: " . $location );
}

// _____________________________________________________________________
function user_exists($username) {
    global $conn;

    $sql = "SELECT * FROM cms_users WHERE user_username = '{$username}';";
    $result = $conn->query($sql);

    if ($conn->error) {
        die('Error4:' . '<br>' . $conn->error);
    }

    if ($result->num_rows > 0) {
        return true;
    } else {
        return false;
    }
}

// _____________________________________________________________________

function email_exists($email) {
    global $conn;

    $sql = "SELECT * FROM cms_users WHERE user_email = '{$email}';";
    $result = $conn->query($sql);

    if ($conn->error) {
        die('Error5:' . '<br>' . $conn->error);
    }

    if ($result->num_rows > 0) {
        return true;
    } else {
        return false;
    }
}

// _____________________________________________________________________

function register_user($username, $email, $password) {
    global $conn;

    $password = password_hash($password, PASSWORD_BCRYPT);

    $sql = "INSERT INTO cms_users (
            user_username, user_password, user_email, user_role
            ) VALUES (
                '{$username}', '{$password}', '{$email}', 'Subscriber');";  
        
    if ($conn->query($sql) == false) {
        die('Error:' . '<br>' . $conn->error);        
    } else {            
        return "<p class=\'bg-success text-center\'>Your Registation has been submitted!</p>"; 
    }
}

// _____________________________________________________________________

function loggin_user($username, $password) {

    global $conn;
    $sql = "SELECT * FROM  cms_users WHERE user_username = '{$username}';";

    $result = $conn->query($sql);

    if ($conn->error) {
        die ('Error: ' . '<br>' . $conn->error);
    } 

    while ($row = $result->fetch_assoc()) {
        // echo "{$row['user_firstname']} - {$row['user_lastname']} - {$row['user_email']}";

        $db_user_id = $row['user_id'];
        $db_user_username = $row['user_username'];
        $db_user_password = $row['user_password'];
        $db_user_email = $row['user_email'];
        $db_user_firstname = $row['user_firstname'];
        $db_user_lastname = $row['user_lastname'];
        $db_user_role = $row['user_role'];
    }

    if($username !== $db_user_username|| !password_verify($password, $db_user_password)) {

        $index_page = dirname(dirname($_SERVER['PHP_SELF']));
        header("Location: {$index_page}");
        


    } else if ($username === $db_user_username && password_verify($password, $db_user_password)) {


        $_SESSION['username'] = $db_user_username;
        $_SESSION['password'] = $db_user_password;
        $_SESSION['email'] = $db_user_email;
        $_SESSION['firstname'] = $db_user_firstname;
        $_SESSION['lastname'] = $db_user_lastname;
        $_SESSION['role'] = $db_user_role;

        

        $admin_page = dirname(dirname($_SERVER['PHP_SELF'])) . '/admin';
        header("Location: /htdocs/cms/admin/");

    }
}

// _____________________________________________________________________

?>