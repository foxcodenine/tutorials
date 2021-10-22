<?php

header('Content-Type: application/json');

require './classa.php';

$s = file_get_contents('./text_data.txt', true);

echo $s, PHP_EOL;

$a = unserialize($s, ['allowed_classes'=>['A']]);

echo $a->prop1, PHP_EOL;
echo $a->prop2,  PHP_EOL;
?>