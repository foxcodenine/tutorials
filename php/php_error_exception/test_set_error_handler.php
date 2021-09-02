<?php

function myErrorHandler($errNo, $errMsg, $file, $line) {


    switch ($errNo) {
        case E_USER_ERROR:
            die("Die #[$errNo] occurred in [$file] at line [$line]: [$errMsg]<br>");
            break;
        case E_USER_WARNING:
            echo "Error #[$errNo] occurred in [$file] at line [$line]: [$errMsg]<br><br>";
            return true;
            break;
        case E_USER_NOTICE:
            echo "Error #[$errNo] occurred in [$file] at line [$line]: [$errMsg]]<br><br>";
            return true;
            break;
        default:
            echo "<br><br>Uncaught error # : [$errNo] <br>";
            return true;
    }
}

try {
set_error_handler("myErrorHandler");

trigger_error("Triggered Error", E_USER_WARNING);

echo '...so far so good!<br>';

echo $unDefineVariable;

echo '...so far so good!<br>';

trigger_error("Triggered Error", E_USER_ERROR);

echo '...this won\'t be display!<br>';
} catch ( Throwable $e ) {
    echo 'Caught Throwable error : ' . $e->getMessage();
}

/*
Warning # : [512] occurred in [C:\xampp\test_set_error_handler.php] at line [27]: [Triggered Error]

...so far so good!

Uncaught error # : [2]
Warning: Undefined variable $unDefineVariable in C:\xampp\test_set_error_handler.php on line 31
*/