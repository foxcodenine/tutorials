<?php
header('Content-Type: application/json');
?>
<?php
$myArray = new SplFixedArray(5);

$myArray[1] = 2;
$myArray[4] = 'foo';

?>

<?php
var_export($myArray);
echo $myArray[1], PHP_EOL;
echo $myArray[4], PHP_EOL;
?>

<?php
// $myArray[7]     = 'bar';  // Fatal error:  Uncaught RuntimeException: Index invalid or out of range
// $myArray['toe'] = 'boe'; // Fatal error:  Uncaught RuntimeException: Index invalid or out of range

$myArray->setSize(10);
$myArray[7] = 'bar';
var_export($myArray);
echo next($myArray);
?>