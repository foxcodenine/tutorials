<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Array Functions</title>
</head>
<body>

<?php
echo '<pre>
https://www.w3schools.com/php/php_ref_array.asp
https://www.php.net/manual/en/ref.array.php
</pre>';

// _____________________________________________________________________
echo '<br> ---- max() returns the highest value in an array, or the highest value of several specified values.<br>';

echo max(2, 3, 8, 1, .12, 10.1) . '<br>';
echo max(array(25, .33, 7.77, 1)) . '<br>';

// _____________________________________________________________________
echo '<br> ---- min() returns the lowest value in an array, or the lowest value of several specified values.<br>';

echo min(2, 3, 8, 1, .12, 10.1) . '<br>';
echo min(array(25, .33, 7.77, 1)) . '<br>';

// _____________________________________________________________________
echo '<br> ---- array_push() inserts one or more elements to the end of an array.<br>';

$list_colors = ['red', 'blue'];

array_push($list_colors, 'green', 'black');

print_r($list_colors);
echo '<br>';

// _____________________________________________________________________
echo '<br> ---- array_pop() deletes & return the last element of an array<br>';

$last_color = array_pop($list_colors);

echo $last_color . '<br>';

print_r($list_colors);
echo '<br>';

// _____________________________________________________________________
echo '<br> ---- array_unshift() inserts at index 0,  one or more elements to the  of an array.<br>';

array_unshift($list_colors, 'gold', 'silver');

print_r($list_colors);

echo '<br>';

// _____________________________________________________________________
echo '<br> ---- array_shift() remove the first element & return the last element of an array.<br>';

$first_color = array_shift($list_colors);

echo $first_color . '<br>';

print_r($list_colors);

echo '<br>';

// _____________________________________________________________________
echo '<br> ---- array_search() function search an array for a value and returns the key.<br>';

echo array_search('blue', $list_colors) . '<br>';


// _____________________________________________________________________
echo '<br> ---- array_rand()  returns a random key from an array, or it returns an array of 
random keys if you specify that the function should return more than one key.<br>';

$my_colors = array("red","green","blue","yellow","brown");

$rand_key = array_rand($my_colors);

echo $rand_key . '<br>';
echo $my_colors[$rand_key] . '<br>';

// _____________________________________________________________________

echo '<br> ---- array_key_exists() function checks an array for a specified key, 
and returns true if the key exists and false if the key does not.<br>';

$vehicles = ["Toyota" => "Yaris", "Volvo" => "XC90", "BMW" => "X5"];

echo array_key_exists("Honda", $vehicles) . '<br>';
echo array_key_exists("Toyota", $vehicles) . '<br>';

// _____________________________________________________________________
echo '<br> ---- array_map() <br>';
// array_map() returns an array containing the results of applying the
// callback to the corresponding index of array 

$my_self = array('name' => 'Chris', 'surname' => 'Farrugia', 'age' => '36');

print_r ($my_self);

echo '<br>';


$my_self = array_map(function ($i) {
    return strlen($i);
},  $my_self);

print_r ($my_self);

echo '<br>';


// _____________________________________________________________________

echo '<br> ---- array_splice() and array_slice()<br>';

echo '<br><pre>
<b>array_splice() Function</b>
The array_splice() function removes selected elements from an array and replaces 
it with new elements. The function also returns an array with the removed elements.

array_splice(array, start, length, array) 

<b>array_slice() Function</b>
The array_slice() function returns selected parts of an array.
Note: If the array have string keys, the returned array will always preserve the keys

array_slice(array, start, length, preserve) 

preserve 	Optional. Specifies if the function should preserve or reset the keys. Possible values:

    true - Preserve keys
    false - Default. Reset keys

</pre>';

// _____________________________________________________________________


?>

</body>
</html>