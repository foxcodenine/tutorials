<?php



$db_connection = mysqli_connect('Localhost',  'admin' , 'admin', 'phploginapp');

if (!$db_connection) {
    die('Database connection failed!');
} else {
    echo 'Connected to database!';
}

$query  = "SELECT * FROM users";


$result = mysqli_query($db_connection, $query);

if (!$result) {
    die('Query Failed! ' . mysqli_error());
} 

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">

    <title>PHP Login Read</title>
</head>
<body>

<div class="container">
    <br>

    <div class="col-sm-6">
        <h2>Login CRUD - Read</h2>

        <?php

        // ----- mysqli_fetch_row()
        
        // while ($row = mysqli_fetch_row($result)) {
        //     print_r($row);
        // }
        
// _____________________________________________________________________


        // ----- mysqli_fetch_assoc()
        
        //   Returns an associative array that corresponds to the fetched row or
        //   null if there are no more rows.

        while ($row = mysqli_fetch_assoc($result)) {
     
            echo  '<pre>';
            print_r($row);
            echo  '</pre>';

        }

        // print_r(mysqli_fetch_assoc($result));
        // echo '<br>';
        // print_r(mysqli_fetch_assoc($result));

        ?>

    </div>

</div>    

</body>
</html>