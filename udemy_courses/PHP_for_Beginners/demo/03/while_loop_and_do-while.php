<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP While Loop</title>
</head>
<body>

<?php

echo '<br><br> ---- while loop ---- <br>';
$counter = 1;

while ($counter < 4) {
    echo '$counter is: ' . $counter . '<br>';
    $counter++;

    // $counter += 1; // You can also increment like this;
}


echo '<br><br> ---- do-while loop ---- <br>';
// do-while loops are very similar to while loops, except the truth expression
// is checked at the end of each iteration instead of in the beginning.

$count = 10;

do {
    echo '$count is: ' . $count . '<br>';
    $count += -2;
} while ($count > 0)

?>

</body>
</html>