<?php

$dir =  getcwd();


// if (is_dir($dir)) {
//     if ($dh = opendir($dir)) {

//         while (($item = readdir($dh)) !== false) {
//             echo $item . '<br>';
//         }
//     }
// }

if (is_dir($dir)){
    $dirArray = scandir($dir, SCANDIR_SORT_DESCENDING);
    var_export($dirArray);
}