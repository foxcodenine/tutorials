<?php

class TrafficSimulator implements ArrayAccess, Iterator {

    protected $trafficLights = array();
    public $current = 0;

    // --- ArrayAccess function ----------------------------------------

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

    // --- Iterator function -------------------------------------------

    public function current() {
        return $this->trafficLights[$this->current];        
    }

    public function key(): int {
        return $this->current;
    }

    public function next() {
        $this->current++;
    }

    public function rewind() {
        $this->current = 0;
    }

    public function end() {
        $this->current = sizeof($this->trafficLights) - 1;
     }

    public function valid(): bool {
        return isset($this->trafficLights[$this->current]); 
     }
}

// _____________________________________________________________________

