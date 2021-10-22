<?php 
header('Content-Type: application/json');
$file = '/var/www/html/php/php_spl/no_man_is_an_island.txt';

$fileObj = new SplFileObject($file, 'r');

echo $fileObj->current();

echo $fileObj->fread(6);

$fileObj->rewind();
echo($fileObj->fpassthru());
// 

?>
