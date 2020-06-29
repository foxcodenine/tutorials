<?php
    if(isset($_POST['name'])){
        $name = htmlentities($_POST['name']); 
        $email = htmlentities($_POST['email']); 

        echo "name: $name | email: $email";
        
        
        // print_r($_POST);


    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Website</title>
</head>
<body>
    <form action="./php9_post.php" method='POST'>
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