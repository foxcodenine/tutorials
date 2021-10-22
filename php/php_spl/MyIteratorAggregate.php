<?php
class myIterator implements IteratorAggregate {

   public $arr;
   public function __construct() {
      $this->arr = array(10,20,30,40);
   }

   public function getIterator() {
      return new ArrayIterator($this->arr);
   }
}

$obj = new myIterator();
foreach($obj as $key => $value) {
   echo $key ." =>" . $value;
}

echo '<br><br>';
var_export($obj->getIterator());

?>