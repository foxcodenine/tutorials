<?php
ini_set('default_charset', 'utf-8');

$data = '$la2';
$count = strlen($data);
echo 'Result: ', $count;
// Result:4

// ____________________________________________________________________

echo "<br><br>Checking $ character : ";


$data = '$';
$count = strlen($data);
echo $count;
// Checking $ character :1

// ____________________________________________________________________

echo "<br><br>Testing with a hanzi character 漢 : ";


$data = '漢';
$count = strlen($data);
echo $count;
// Testing with a hanzi character 漢 :3