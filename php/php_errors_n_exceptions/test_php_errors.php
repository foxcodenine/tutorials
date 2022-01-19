<?php 

class ParentException extends Exception {}
class ChildException extends ParentException {}

try {
    throw new ChildException('My Message');

} catch(ParentException $e) {
    echo 'ParentException: ' . $e->getMessage() . '<br>';
} catch(ChildException $e) {
    echo 'ChildException: ' . $e->getMessage() . '<br>';
} catch(Exception $e) {
    echo 'Exception: ' . $e->getMessage() . '<br>';
}



function myErrorHandler($errNo, $errMsg, $file, $line) {
    switch ($errNo) {
        case E_USER_WARNING :
            echo 'This is a user warning<br>';
            return false;
        default:
            echo 'Caught Error!';
            return TRUE;
    }
}

set_error_handler('myErrorHandler');



trigger_error('testing testing 123<br>', E_USER_WARNING);