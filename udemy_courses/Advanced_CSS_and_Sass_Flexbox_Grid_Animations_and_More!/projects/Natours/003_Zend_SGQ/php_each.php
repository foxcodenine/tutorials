<?php
// header('Content-Type: application/json');
class MyTestClass implements ArrayAccess  {
    private $position = 0;
    public $array = array(
        0 => "zero",
        1 => "one",
        "two",
        "three",
    );  

    public function offsetSet($offset, $value) {
        if (is_null($offset)) {
            $this->array[] = $value;
        } else {
            $this->array[$offset] = $value;
        }
    }

    public function offsetExists($offset) {
        return isset($this->array[$offset]);
    }

    public function offsetUnset($offset) {
        unset($this->array[$offset]);
    }

    public function offsetGet($offset) {
        return isset($this->array[$offset]) ? $this->array[$offset] : null;
    }
}


$obj = new MyTestClass;
var_export(($obj));

echo current()