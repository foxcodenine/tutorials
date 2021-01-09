<?php

if (isset($_POST['submit'])) {
    // echo "form has been submitted!";

    $username = $_POST['username'];
    $password = $_POST['password'];

    // if ($username && $password) {
    //     echo "{$username} {$password}";
    // } else {
    //     echo 'Please fill up all fields!';
    // }

    $db_connection = mysqli_connect('Localhost',  $username , $password, 'phploginapp');

    if (!$db_connection) {
        die('Database connection failed!');
    } else {
        echo 'Connected to database!';
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

    <title>PHP Login Page App</title>
</head>
<body>

<div class="container">
    <br>

    <div class="col-sm-6">
        <form action="?" method="post">

            <div class="form-group">
            <label for="username">Username</label>
                <input type="text" class="form-control" id="username" name="username">
            </div>
            
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" name="password">
            </div>

            <button type="submit" name="submit" value="Submit" class="btn btn-primary">Send</button>

        </form>
    </div>

</div>    

</body>
</html>