<?php
    if(isset($_REQUEST['name'])){
        $name = htmlentities($_REQUEST['name']); 
        $email = htmlentities($_REQUEST['email']); 

        echo "name: $name | email: $email";       
        
        // print_r($_REQUEST);

        // request works both with POST & GET

    }

        # Server Query String - works only with GET

        echo $_SERVER['QUERY_STRING'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Website</title>
</head>
<body>
    <form action="./php9_request.php" method='POST'>
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