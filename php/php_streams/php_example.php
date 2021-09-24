<?php 

$file = 'php_example.php';


echo file_get_contents($file);
$handle = fopen($file, 'r+');
// $filterResorce = stream_filter_append($handle');

echo fread($handle, 55555);