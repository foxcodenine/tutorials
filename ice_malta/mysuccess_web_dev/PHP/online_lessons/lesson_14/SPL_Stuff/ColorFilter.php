<?php 

class ColorFilter extends FilterIterator {

    private $colorToFilter;


    public function __construct($iterator, $colorToFilter) {
        
        parent::__construct($iterator);
        $this->colorToFilter = $colorToFilter;
    }


    function accept() {
        if ($this->current() != $this->colorToFilter) {
            return true;
        }
        return false;
    }

}