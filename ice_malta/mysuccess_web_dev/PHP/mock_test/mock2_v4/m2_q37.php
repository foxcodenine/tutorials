<?php
class MyException extends Exception {};
try {
    throw new MyException;
} catch (Exception $e) {
    echo '1:';
    echo get_class($e);
} catch (MyException $e){
    echo '2:';
    echo get_class($e);
} catch (Exception $e) {
    echo get_class($e);
}
?>



