<?php 

class Cat {

    protected $name;
    protected $age = 1;


    public function __construct($name) {
        $this->name = $name;
    }

    public function __get($n) {
        return $this->$n;
    }

    public function __isset($n) {
        return isset($this->{$n});
    }

    public function __unset($n) {
        if (isset($this->{$n})) {
            unset($this->{$n});
        }
    }
}

$jack = new Cat('Jack');
var_export(isset($jack->name));
echo '<br>';
var_export(isset($jack->age));
echo '<br>';
var_export(empty($jack->age));
echo '<br>';
var_export(isset($jack->breed));

echo '<br>';
echo '<br>';

unset($jack->name);
unset($jack->age);
var_export(isset($jack->name));
echo '<br>';
var_export(empty($jack->name));

?>