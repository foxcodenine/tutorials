<?php

// _____________________________________________________________________
// loading package with from vendor/autoload;

$vender_autoload_path = realpath(__DIR__ . '/..' . '/vendor/autoload.php');
require_once($vender_autoload_path);

// _____________________________________________________________________
// loading .env variables;

$env_path = realpath(__DIR__ . '/..');
$dotenv = Dotenv\Dotenv::createImmutable($env_path);
$dotenv->load();

// _____________________________________________________________________

$db['db_host']     = $_ENV['DB_HOST'];
$db['db_user']     = $_ENV['DB_NAME'];
$db['db_pass'] = $_ENV['DB_PASSWORD'];
$db['db_name']     = $_ENV['DB_NAME'];

foreach($db as $key => $value) {
    define(strtoupper($key), $value);
}

$con = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if (!$con) {
    die("Connection failed!");
} else {
    echo 'Connected successfully!';
}

// _____________________________________________________________________

$sql_create_table  = "CREATE TABLE IF NOT EXISTS cmd_category(";
$sql_create_table .= "cat_id INT(3) PRIMARY KEY AUTO_INCREMENT, ";
$sql_create_table .= "cat_title VARCHAR(255) NOT NULL);";

if (!mysqli_query($con, $sql_create_table)){
    die('Failed to create table: ' . mysqli_errno($con));
}