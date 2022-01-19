<?php 

$requiredKeys = ['username', 'password', 'csrf_token'];
$missingKeys = array_diff($requiredKeys, array_keys($_POST));


if (count($missingKeys)) {
    try {

        $strMissingKeys = print_r($missingKeys, true);
        throw new UnexpectedValueException("<br>You need to provide:<br>{$strMissingKeys}<br>");

    } catch (Exception $e) {
        echo $e;
    }
}


echo '<br><br><br>';

$array1 = array("a" => "green", "red", "blue", 1);
$array2 = array("b" => "green", "yellow", "red", "1");
$array3 = array("c" => "green", "yellow", "red", 0x01);
$result = array_intersect($array1, $array2, $array3);

print_r($result);