
<?php require './db.php'; ?>
<?php session_start(); ?>

<?php 

if (isset($_POST['login'])) {
    
    $username = $conn -> real_escape_string($_POST['username']);
    $password = $conn -> real_escape_string($_POST['password']);

    $username = htmlspecialchars($username);
    $password = htmlspecialchars($password);
   
    // echo "<br> {$username} - {$password} <br>";

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
        echo password_verify($password, $db_user_password);

    } else if ($username === $db_user_username && password_verify($password, $db_user_password)) {


        $_SESSION['username'] = $db_user_username;
        $_SESSION['password'] = $db_user_password;
        $_SESSION['email'] = $db_user_email;
        $_SESSION['firstname'] = $db_user_firstname;
        $_SESSION['lastname'] = $db_user_lastname;
        $_SESSION['role'] = $db_user_role;

        $admin_page = dirname(dirname($_SERVER['PHP_SELF'])) . '/admin';
        header("Location: {$admin_page}");
    }


}


?>