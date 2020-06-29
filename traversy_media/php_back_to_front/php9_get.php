<?php
    if(isset($_GET['name'])){
        $name = htmlentities($_GET['name']); 
        $email = htmlentities($_GET['email']); 

        echo "name: $name | email: $email";       
        
        // print_r($_GET);


    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Website</title>
</head>
<body>
    <form action="./php9_get.php" method='GET'>
        <div>
            <label for="name">Name</label><br>
            <input type="text" name="name">
        </div>
        <div>
            <label for="email">Email</label><br>
            <input type="email" name="email">
        </div>
        <input type="submit" value="Submit">
    </form>
</body>
</html>