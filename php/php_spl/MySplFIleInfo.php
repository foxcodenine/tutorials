<?php 
header('Content-Type: application/json');
$file = '/var/www/html/php/php_spl/unkown.io';

$fileInfo = new SplFileInfo($file);


echo PHP_EOL, $fileInfo->getPath();
echo PHP_EOL, $fileInfo->getFilename();
echo PHP_EOL, $fileInfo->getType();
echo PHP_EOL, $fileInfo->getSize();
echo PHP_EOL, $fileInfo->getOwner();
echo PHP_EOL, $fileInfo->isExecutable();
echo PHP_EOL, $fileInfo->getCTime();
?>
