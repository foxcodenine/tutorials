<?php
// echo array_sum([2, 4, 6, 8]);
// echo '<br><br>';
// echo array_sum([2, true, false]);
// echo '<br><br>';
// echo array_sum([]);
// echo '<br><br>';
// echo array_sum(['hello', 'world']);
// echo '<br><br>';
// echo array_sum(['0.05x']);
// echo '<br><br>';
// echo '<br><br>';
// echo count('hello');


class MyClass {
    public $prop1     = 'one';
    public $prop2     = 'two';
    public $prop3     = 'three';
    protected $prop4  = 'four';
    private $prop5    = 'five';

    public function iterateProps() {
        foreach($this as $key=>$val) {
            print "<br> $key => $val";
        }
    }
}

$obj = new MyClass();

foreach ($obj as $prop) echo $prop, ' ';

$obj->iterateProps();
?>