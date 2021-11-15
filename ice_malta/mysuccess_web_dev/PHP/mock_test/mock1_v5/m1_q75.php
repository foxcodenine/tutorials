<?php
header('Content-Type: application/json');
$str = 'Keith Vassallo 79111111';

// ---- option1 --------------------------------------------------------

$a = sscanf($str, '%s %s %d');
var_export($a); echo PHP_EOL,PHP_EOL;

// ---- option2 --------------------------------------------------------

$b = sscanf($str, '%s %s %d', $c['name'], $c['surname'], $c['phone'] );
echo $b , PHP_EOL;
var_export($c);
?>