<?php 
function xrange(int $start, int $limit, ?int $step=null) {

    if ($start <= $limit) {
        if (!isset($step)) $step = 1;
        if ($step <= 0) {
            throw new LogicException('$step must be > then 0');
        }
        
        for ($i = $start; $i <= $limit; $i += $step ) {
            yield $i;
        }
    } 
    else {
        if (!isset($step)) $step = -1;
        if ($step >= 0) {
            throw new LogicException('$step must be < then 0');
        }

        for ($i = $start; $i >= $limit; $i += $step) {
            yield $i;
        }
    }
}

var_export(xrange(1, 10, 2));

foreach(xrange(1, 10, 2) as $v) echo $v . nl2br("\n");
?>