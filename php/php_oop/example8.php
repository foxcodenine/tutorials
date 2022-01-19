<?php
abstract class Paintings {

        abstract protected function girlDescendingStairs();
    
        protected function persistenceOfMemory() {
            echo "I have an implementation so this is not an abstract method";
        }
    
        public function __construct() {
            echo "I am being constructed!";
        }
    }
    
    class Foo extends Paintings {
        public function girlDescendingStairs() { echo "Whee!"; }
    }
    
    $foo = new Foo;  
    $foo->girlDescendingStairs();  
?>