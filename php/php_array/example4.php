<?php 

$arr = [0, 1, 2, 3, 4];

next($arr);
next($arr);
next($arr);

echo current($arr), '<br><br>';

array_shift($arr);

echo current($arr), '<br><br>';


$queue = array("orange", "banana");
$num = array_unshift($queue, "apple", "raspberry", "bananas");
echo $num, '<br>';
print_r($queue);


echo '<br><br><br>';

$arr = [4=>'vier', 3=>'frei', 2=>'zwei', 1=>'eins'];
$num = array_pop($arr);
echo $num, '<br>';
print_r($arr);
