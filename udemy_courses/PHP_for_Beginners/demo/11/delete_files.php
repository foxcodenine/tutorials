<?php


// create file

$filename = 'some_file.txt';

$handle = fopen($filename, 'w') or die('Unable to open file!');

fwrite($handle, 'this file is about to be deleted');

fclose($handle);

// _____________________________________________________________________
// delete file

unlink($filename);

// _____________________________________________________________________