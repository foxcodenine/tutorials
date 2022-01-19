<?php 

if (setlocale(LC_ALL, 'fr_FR.UTF-8')){
    echo strftime('In French to day is %A'), '<br>';
    echo strftime('My DOB is %d-%m-%Y', time());
}


echo '<br><br><br>';
for ($i = 0; $i < 10; $i += 2) {
    $r= $i;
    $a[$r] = $i;
  }
echo count($a);

echo '<br><br><br>';

var_export($a);