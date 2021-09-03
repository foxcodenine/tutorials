<?php 

class ParentException extends Exception {}
class ChildException extends ParentException {}

try {
    throw new ChildException('My Message');

} catch(ParentException $e) {
    echo 'ParentException: ' . $e->getMessage();
} catch(ChildException $e) {
    echo 'ChildException: ' . $e->getMessage();
} catch(Exception $e) {
    echo 'Exception: ' . $e->getMessage();
}