<?php
$str = 'The cat sat on the roof of their house.';
$matches = preg_split("/(the)/i", $str, -1, PREG_SPLIT_DELIM_CAPTURE);
echo sizeof($matches);
// PREG_SPLIT_NO_EMPTY
?>