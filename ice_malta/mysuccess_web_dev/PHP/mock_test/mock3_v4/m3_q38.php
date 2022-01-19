<?php
// header('Content-Type: application/json');

class MyTestClass implements Iterator, ArrayAccess {
    private $position = 1;
    private $array = array(
        0 => "zero",
        1 => "one",
        "two",
        "three",
    );  

    // _________________________________________________________________

    public function __construct() {
        $this->position = 0;
    }

    public function rewind() {
        $this->position = 0;
    }

    public function current() {
        return $this->array[$this->position];
    }

    public function key() {
        return $this->position;
    }

    public function next() {
        ++$this->position;
    }

    public function valid() {
        return isset($this->array[$this->position]);
    }
    // _________________________________________________________________


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

$obj = new MyTestClass();

//_____ foreach() ______________________________________________________

foreach ($obj as $k => $v) {
    echo "$k => $v" . PHP_EOL;
}

$obj->rewind();

//_____ for() __________________________________________________________

//_____ Using Iterator Interface

for($i ; $obj->valid(); $obj->next()){
    echo $obj->key() , ':', $obj->current() . PHP_EOL;    
}

$obj->rewind(); echo PHP_EOL;

//_____ Using ArrayAccess Interface

for($i = 0; isset($obj[$i]); $i++ ) {
    echo $obj[$i];
} 

//_____ each() _________________________________________________________

// function each($i) {
//     $arr = [0 => key($i), 'key' => key($i), 1 => current($i), 'value' => current($i)];
//     next($i);
//     return $arr;
// }

$arr = each($obj);
var_dump($arr);

$arr = each($obj->$arr);
var_dump($arr);
?>

