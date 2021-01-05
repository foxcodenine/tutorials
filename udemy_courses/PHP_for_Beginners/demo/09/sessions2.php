
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Sessions #2</title>
</head>
<body>

<?php

session_name('GREEDINDS_SESSION'); 
session_start();

echo $_SESSION["greeding"];

?>
</body>
</html>