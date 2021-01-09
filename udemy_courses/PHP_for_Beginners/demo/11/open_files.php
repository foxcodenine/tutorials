<?php

// https://www.w3schools.com/php/php_file_open.asp
// _____________________________________________________________________

$file = "example.txt";

// the following line will open (and create if not exist) the above file
$handle = fopen($file,  'w');


fclose($handle);

?>