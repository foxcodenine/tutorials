<?php

header('Content-Type: application/json');

$arr = ['1' => 'one', '2' => 'two', '3' => 'three'];

$arrObj = new ArrayObject($arr, ArrayObject::ARRAY_AS_PROPS);

var_export($arrObj);

echo PHP_EOL, $arrObj->{1};  
?>

<?php
echo PHP_EOL;
echo PHP_EOL;
echo PHP_EOL;

$arr = ['one' => 'eins', 'two' => 'zwei', 'three' => 'drei'];

$arrObj = new ArrayObject($arr);

var_export($arrObj);


echo PHP_EOL;
echo PHP_EOL;
echo PHP_EOL;

echo $arrObj->one, PHP_EOL; 

$arrObj->setFlags(ArrayObject::ARRAY_AS_PROPS);

echo $arrObj->one, PHP_EOL; 

?>