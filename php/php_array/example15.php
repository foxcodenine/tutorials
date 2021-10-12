<?php 

$obj = new stdClass;

$obj->one   = 'eins';
$obj->two   = 'zvei';
$obj->three = 'drei';

// echo $obj['eins'];

$ArrObj = new ArrayObject($obj);


$ArrObj->setFlags(ArrayObject::ARRAY_AS_PROPS);

var_export($ArrObj);
echo '<br>';
echo $ArrObj->one;
echo '<br>';echo '<br>';


$ArrObj->setFlags(ArrayObject::STD_PROP_LIST);

var_export($ArrObj);
echo '<br>';
echo $ArrObj->one;
