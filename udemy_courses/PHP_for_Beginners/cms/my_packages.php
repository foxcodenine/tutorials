<?php 
// including Vendor

// include_once './vendor/autoload.php';

$vender_autoload_path = realpath(__DIR__ . '/vendor/autoload.php');
require_once($vender_autoload_path);

// _____________________________________________________________________
// loading .env variables;

$env_path = realpath(__DIR__ );
$dotenv = Dotenv\Dotenv::createImmutable($env_path);
$dotenv->load();

// _____________________________________________________________________

?>