<?php


function ppp($i=' ') {
    echo "\n<br><br>";
    echo "($i) _______________________________________________________________";
    echo "<br><br>\n";
}



function qqq(int $i=2){
    $s = "\n";
    for ($n=0; $n < $i; $n++){
        $s .= "<br>";
    }
    $s .= "\n";
    echo $s;
}