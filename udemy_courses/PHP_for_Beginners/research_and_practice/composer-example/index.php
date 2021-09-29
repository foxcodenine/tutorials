<?php



// require_once("vendor/autoload.php"); //  

// _____________________________________________________________________



// to use absolute pathname use realpath()
// together with __DIR__ that gives absolut path to file

require_once realpath(__DIR__ . "/vendor/autoload.php");

echo __DIR__ . '<br><br>';


// _____________________________________________________________________

//  To load .env file:

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();


echo $_ENV['TESTTEST'] ;


?>