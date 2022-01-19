<?php 
// preg_match('/^(start)|(last)$/', 'first startlast', $array);
// var_export($array);

// $subject = "I can haz Cheeseburgers";
// $pattern = "/I can haz (Cheeseburger)?/";

// preg_match($pattern, $subject, $matches);
// var_dump($matches);

// $subject = "I can haz pizza";
// $pattern = "/I can haz (Cheeseburger)?/";

// echo '<br><br><br>';

// preg_match($pattern, $subject, $matches);
// var_dump($matches);

// $p = '/(\w+) (\d+), (\d+)/i';
// $s = 'April 15, 2013';
// $r = '${1}2 $3';
// echo preg_replace($p, $r, $s);

echo http_build_query(array('one'=>['two', 'three']), $aaa = 1111);
?>