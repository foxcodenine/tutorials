<?php
$ar1 = array(10, 100, 100, 0);
$ar2 = array(1, 3, 2, 4);
array_multisort($ar1, $ar2);

var_export($ar1);
var_export($ar2);

echo '<br><br><br>';
?>


<?php
$arr = array(
       array("10", 11, 100, 100, "a"),
       array(   1,  2, "2",   3,   1)
      );
array_multisort($arr[0], SORT_ASC, SORT_STRING,
                $arr[1], SORT_NUMERIC, SORT_DESC);
var_export($ar);
?>
