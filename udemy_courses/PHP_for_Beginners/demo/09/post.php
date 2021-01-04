<?php

if (isset($_POST['submit']) && $_POST['name']) {

    $name = $_POST['name'];
    echo "Hi {$name}! Nice to meet you!";    
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Post</title>
</head>
<body>

<form action="?" method="post">
    <input type="text" name="name">
    <button type="submit" name="submit">Submit</button>
</form>

</body>
</html>