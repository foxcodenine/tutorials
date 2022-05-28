<?php

function greet($name, $color) {
    echo "<p>Hi, my name is $name and my favorite coor is $color.</p>";
}

greet('John', 'blue');
greet('Jane', 'green');

?>

<h1><?php bloginfo('name');?></h1>
<h3><?php bloginfo('description');?></h3>


<?php
$names = array('Brad', 'John', 'Jane', 'Meowsalot', 'Barksalot');

$count = 0;

while($names) {
    $name = array_pop($names);
    echo "<p>$name</p>";
}
?>

