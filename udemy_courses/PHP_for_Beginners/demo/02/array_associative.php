<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Array Associative</title>
</head>
<body>

<?php

// ---- Normall array:

$chris = ['Christopher', 'Farrugia', 36];

print_r($chris);

echo '<br>';

// _____________________________________________________________________


// ---- Associative Array 

$chris = ['first_name' => 'Christopher', 'last_name' =>'Farrugia', 'age' => 36];

print_r($chris);

echo '<br>';

echo $chris['first_name'] . ' ' . $chris['last_name'];

?>

</body>
</html>