<?php 

header('Content-Type: application/json');

$a = [1=>'Apple', 3=>'Cactus', 5=>'Elderflower'] +
     ['Banana', 'Dragon Fruit', 'Fig'];

print_r($a);