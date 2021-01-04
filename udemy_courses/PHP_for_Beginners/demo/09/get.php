
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Get</title>
</head>
<body>

<?php
$name = 'Dorothy';
$surname = 'Cassar';
?>

<a href="get.php?id=397284m&name=<?php echo $name ?>&surname=<?php echo $surname ?>">CLICK HERE</a>
<h2><?php print_r($_GET);?></h2>


</body>
</html>