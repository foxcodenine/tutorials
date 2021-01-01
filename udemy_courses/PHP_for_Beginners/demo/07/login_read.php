<?php

require 'db.php';
require 'db_functions.php';

    // $db_connection = mysqli_connect('Localhost',  'admin' , 'admin', 'phploginapp'); // <- replace by db.php

$result = fetch_users_data();

    // if (!$db_connection) {
    //     die('Database connection failed!');
    // } else {
    //     echo 'Connected to database!';
    // }

    // $query  = "SELECT * FROM users";


    // $result = mysqli_query($db_connection, $query);

    // if (!$result) {
    //     die('Query Failed! ' . mysqli_error());
    // }  // <- replace by db_functions/fetch_user_data.php

$title = 'Read';

?>

<!-- --------------------------------------------------------------- -->

<!DOCTYPE html>
<html lang="en">

<?php include 'include/header.php'?>

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