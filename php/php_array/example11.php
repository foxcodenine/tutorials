<?php
header('Content-Type: application/json');

$fruits = array("3" => "lemon", "2" => "orange", "1" => "banana", "0" => "apple");

function test_alter(&$item1, $key, $prefix) {
    $item1 = "$prefix: $item1";
}

function test_print($item2, $key) {
    echo "$key. $item2\n";
}

echo "Before ...:\n";
array_walk($fruits, 'test_print');

echo "... and after:\n";
array_walk($fruits, 'test_alter', 'fruit');
array_walk($fruits, 'test_print');
?>

<?php
$arr1 = [1, 2, 3];
$arr2 = ['a', 'b', 'c'];
$arr3 = ['first', 'second', 'third'];
var_export(array_map(null, $arr1, $arr2, $arr3));
?>

<?php
echo '<br><br>';
function cube($n) {
 return ($n * $n * $n);
}

$a = [1, 2, 3, 4, 5];
$b = array_map('cube', $a);
var_export($b);

echo PHP_EOL, PHP_EOL,PHP_EOL;
?>

<?php
function show_Spanish(int $n, ?string $m): string {
    return "The number {$n} is called {$m} in Spanish";
}

function map_Spanish(int $n, ?string $m): array {
    return [$n => $m];
}

$a = [1, 2, 3, 4];
$b = ['uno', 'dos', 'tres'];

$c = array_map('show_Spanish', $a, $b);
var_export($c);
echo PHP_EOL, PHP_EOL,PHP_EOL;
$d = array_map('map_Spanish', $a , $b);
var_export($d);
?>