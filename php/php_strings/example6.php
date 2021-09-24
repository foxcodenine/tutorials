<?php

echo `pwd` . '<br>';
echo __DIR__ . '<br>';
echo dirname(__file__), '<br>';



echo gettype(`pwd`), '<br>', gettype(__DIR__ ), '<br>' ,gettype(dirname(__file__)), '<br>';
var_export(`pwd` == __DIR__);
var_export(file_exists(__DIR__));
echo '<br>';
readfile(__FILE__);