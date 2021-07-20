<?php

use src\Model\Database;

require_once __DIR__ . '/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
$dotenv->load();


// <!------- Don't_Import_Code ---------------------------------------->
if (!debug_backtrace()) {
    Database::createTable();

    // Database::insertRecord('123', 'Dorothy', 'Cassar', 'horseRider@yahoo.com',
    // '1984-08-12', '1990-01-12', 2, 0, 1);

    // var_dump(Database::fetchRecord('123'));
}



