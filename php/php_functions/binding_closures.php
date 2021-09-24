<?php

class Animal {

    public function getClosure() {
        $boundVariable = 'Animal';

        return function() use ($boundVariable) {
            return $this->nature . ' ' . $boundVariable;
        };
    }
}


class Cat extends Animal {
    protected $nature = 'Awesome';
}


class Dog extends Animal{
    protected $nature = 'Friendly';
}


class Bird extends Animal {
    protected $nature = 'Flyable';
}

$cat = new Cat;

$catClosure = $cat->getClosure();

echo $catClosure() . '<br>';

$dogClosure = $catClosure->bindTo(new Dog);

echo $dogClosure() . '<br>';

$birdClosure = Closure::bind($dogClosure, new Bird(), 'Animal');
echo $birdClosure();


echo '<br><br><br>';

(function() {
    echo 'Self-execution anonymos function <br>';
    echo $definedInClosure = 'Variable set <br>';
}) ();

var_export(isset($definedInClosure))
?>