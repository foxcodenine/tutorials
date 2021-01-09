<?php 

$username = false;

if (isset($_POST['submit'])) {

    $username = $_POST['username'];
    $password = $_POST['password'];

    
    $db = ['chris@gmail.com', 'dorothy@yahoo.com', 'joelle@hotmail.com'];

    $message = '';
    
    if (in_array($username, $db)) {
        $message = 'Username has already been taken!';

    } elseif (strlen($password) < 6) {
        $message = 'Password is too short!';
    } else {
        $message = "Hi {$username}, your form have been successfully submitted!";
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Form</title>
</head>
<body>

    <form action="form.php" method="post">

        <input type="text" placeholder="Enter Username" name="username">
        <input type="password" placeholder="Enter Password" name="password"><br>
        <input type="submit" name="submit">

    </form>
    <div class="message">        
    <?php

    if ($username && $password) {
        echo "<small>{$message}</small>";
    }

    ?>        
    </div>   

</body>
</html>