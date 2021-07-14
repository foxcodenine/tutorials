<?php
spl_autoload_register(function($className){

    $path = dirname(__FILE__) . '/' . str_replace('\\', '/', $className) . '.php';
    echo 'Autoloader <b>' . $className .  '</b> included!<br>';
    include $path;
});