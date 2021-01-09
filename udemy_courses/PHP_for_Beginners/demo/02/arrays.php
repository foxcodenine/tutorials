<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Arrays</title>
</head>
<body>
    
<?php

$numberList = array(267, 8765, 345, '5365', '<h3>Hello!</h3>');

$numberListNew = ['a', 'bb', 'ccc'];

// ________________________________

echo $numberListNew[1] . '<br>';

// ________________________________

print_r($numberList);


?>

</body>
</html>