<?php 
$str = ' " & + £  $';

echo quotemeta($str), PHP_EOL , PHP_EOL;
echo addslashes($str), PHP_EOL , PHP_EOL;
echo htmlspecialchars($str), PHP_EOL , PHP_EOL;
echo htmlentities($str), PHP_EOL , PHP_EOL;

