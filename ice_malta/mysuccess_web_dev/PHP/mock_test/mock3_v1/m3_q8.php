<?php

set_error_handler(function($errNo, $errMsg, $file, $line) {
    echo "<br>Caught By <b>set_error_handler</b> on line {$line}!<br>";
});


// Generating an E_NOTICE in PHP 7.1 |  Warning in PHP 8.0
echo $undefined; 

// Generating an E_WARNING (!?twice!?)
include_once 'noFile.php'; 


// _____________________________________________________________________