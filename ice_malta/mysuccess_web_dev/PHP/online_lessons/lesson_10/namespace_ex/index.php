<?php

require 'animal/Tiger.php';
require 'sport/Golf.php';
require 'vehicle/Golf.php';

use animal\Tiger;
use sport\Golf as SportGolf;
use Vehicle\Golf;

$t = new Tiger(); 
$t->doSomething();


echo '<br><br>';


$g = new SportGolf();
$g->doSomething();


echo '<br><br>';


$g = new vehicle\Golf();
$g->doSomething();


?>