<?php


// _____________________________________________________________________
// ----- ArrayAccess, Iterator and Seekable Iterator 
class TrafficSimulator implements ArrayAccess, Iterator, SeekableIterator {

    public $trafficLights = array();
    private $_current = 0;
    // ________________________

    // --- ArrayAccess function
    public function offsetExists($offset): bool {
        return array_key_exists($offset, $this->trafficLights);
    }

    public function offsetGet($offset) {
        return $this->trafficLights[$offset];
    }

    public function offsetSet($offset, $value): void {
        if (!is_numeric($offset)) {
            throw new Exception("Traffic light ID must be numeric!");
        }
        $this->trafficLights[$offset] = $value;
    }

    public function offsetUnset($offset) {
        unset($this->trafficLights[$offset]);
    }

    // --- Iterator function

    public function current() {
        return $this->trafficLights[$this->_current];
    }

    public function key(): int {
        return $this->_current;
    }

    public function next() {
        $this->_current++;
    }

    public function rewind() {
        $this->_current = 0;
    }
    
    public function end() {
       $this->_current = sizeof($this->trafficLights) - 1;
    }

    public function valid(): bool {
       return isset($this->trafficLights[$this->_current]); 
    }

    // --- SeekableIterator function
    public function seek($postion): void {
        $this->_current = $postion;
        if (!$this->valid()) {
            throw new OutOfBoundsException("Invalid seek postion: $postion");
        }
    }
}

// _____________________________________________________________________

$traffic = new TrafficSimulator();

$traffic[0] = "Red";
$traffic[1] = "Amber";
$traffic[2] = "Green";

echo $traffic[0];
echo "<br>";
print_r($traffic);
echo "<br>";

// _____________________________________________________________________


echo $traffic->current() . '<br>';
echo $traffic->key() . '<br>';
$traffic->next();
echo $traffic->current() . '<br>';
$traffic->rewind();
echo $traffic->current() . '<br>';
$traffic->end();
echo $traffic->current() . '<br>';

foreach ($traffic as $k=>$v) {
    printf("%s:%s<br>", $k, $v);
}
echo "<br>";
// _____________________________________________________________________

$traffic->seek(1);
echo $traffic->key() . '<br>';

echo "<br>";
// _____________________________________________________________________

// ----- Filtering Iterator 

class ColorFilter extends FilterIterator {
    private $colotToFilter;

    function __construct(\Iterator $itrator, string $colotToFilter) {
        parent::__construct($itrator);
        $this->colotToFilter = $colotToFilter;
    }

    public function accept(): bool {
        if ($this->current() != $this->colotToFilter) {
            return true;
        }
        return false;
    }
}
$traffic = new TrafficSimulator();
$traffic[0] = "Red";
$traffic[1] = "Amber";
$traffic[2] = "Green";
$traffic[3] = "Red";
$traffic[4] = "Amber";

$it = new ColorFilter($traffic, "Amber");
// var_dump($it);
foreach($it as $light) {
    printf("%s<br>", $light);
}
