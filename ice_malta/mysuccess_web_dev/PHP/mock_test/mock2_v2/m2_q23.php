<?php
class MyException extends Exception{};

try {
    throw new MyException;
} catch (Exception $e) {
    echo "1:";
    throw $e;
} catch (MyException $e) {
    echo "2:";
    throw $e;
} catch (Exception $e) {
    echo get_class($e);
}