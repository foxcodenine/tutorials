<?php
$file = './write_fprintf_file.txt';
$fileHandler = fopen($file, 'w+');

if(!($fileHandler = fopen($file, 'w+'))) {
    return;
}

$day ='12';
$month = '08';
$year = '1984';

fprintf($fileHandler, '%04d-%02d-%02d', $year, $month, $day);
fclose($fileHandler);

if($fileHandler = fopen($file, 'r')) {
    echo fread($fileHandler, filesize($file));
} else {
    echo 'Something wrong happened';
}
fclose($fileHandler);