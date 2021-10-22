<?php
require './classa.php';
header('Content-Type: application/json');
$a = new A;

$s = serialize($a);
file_put_contents('text_data.txt', $s);
var_export($a);
?>