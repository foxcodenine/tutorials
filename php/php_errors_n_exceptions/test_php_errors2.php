<?php


try {
    throw new ErrorException('Testing Code');

} catch (Error $e) {
    echo "Caught Error: " . get_class($e);
    
} catch (Exception $e) {
    echo "Caught Exception: " . get_class($e);

} catch (Throwable $e) {
    echo "This will never be used!";

} finally {
    restore_error_handler();
    restore_exception_handler();
    error_clear_last();
}

