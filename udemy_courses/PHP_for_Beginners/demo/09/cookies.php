<?php

$name = "SomeName";
$data = ['code' => 200, 'value' => 'some_value'];
$exp = time() + (60*60*24*7);

$value = serialize($data);
// Generates a storable representation of a value. (to save an array in cookie)
// This is useful for storing or passing PHP values around without losing their type and structure. 
// Then unserialize() data

setcookie($name, $value, $exp);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=#, initial-scale=1.0">
    <title>PHP Cookies</title>
</head>
<body>

<?php

if (isset($_COOKIE['SomeName'])) {
    echo 'cookie is set!' . '<br>';

    // fectch cookie data and echo
    $some_name = $_COOKIE['SomeName'];
    echo $some_name . '<br>';

    // unsterialize data and print_r
    $some_name = unserialize($some_name);
    print_r($some_name) ;

} else {
    echo 'cookie is NOT set!';
    $some_name = '';
}

?>

</body>
</html>