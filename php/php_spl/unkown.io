<?php 
header('Content-Type: application/json');
$file = '/var/www/html/php/php_spl/unknow.io';

$fileInfo = new SplFileInfo($file);


echo PHP_EOL, $fileInfo->getPath();
echo PHP_EOL, $fileInfo->getFilename();
echo PHP_EOL, $fileInfo->getPerms();
echo PHP_EOL, $fileInfo->getType();
echo PHP_EOL, $fileInfo->getSize();

?>