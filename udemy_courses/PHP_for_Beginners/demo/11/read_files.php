<?php
// https://www.php.net/manual/en/function.fread.php
// https://www.w3schools.com/php/php_file_open.asp
// _____________________________________________________________________

// fread()
// fread ( resource $stream , int $length ) : string|false

$myfile = "the_red_fox.txt";
$handle = fopen($myfile, 'r') or die("Unable to open file!");

// $contents  = fread($handle, 10); // <- read the 10 bites (first 10 characters)

$contents  = fread($handle, filesize($myfile));

echo "<pre>". $contents . "</pre>" . "<br><br>";

fclose($handle);

// _____________________________________________________________________


// fgets()
// Read Single Line

$handle = fopen($myfile, 'r');

echo '1st line: ' . fgets($handle) . '<br>';
echo '2nd line: ' . fgets($handle) . '<br>';

fclose(($handle));

