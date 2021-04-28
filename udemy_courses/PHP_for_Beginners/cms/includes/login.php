
<?php session_start(); ?>
<?php require './db.php'; ?>
<?php require '../functions.php'; ?>



<?php 

if (isset($_POST['login'])) {
    
    $username = $conn -> real_escape_string($_POST['username']);
    $password = $conn -> real_escape_string($_POST['password']);

    $username = htmlspecialchars($username);
    $password = htmlspecialchars($password);
   
    // echo "<br> {$username} - {$password} <br>";

    loggin_user($username, $password);


}


?>