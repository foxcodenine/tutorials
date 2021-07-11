<?php

// <!------- Load_Vendor_and_Set_Enviormental_Variables --------------->

// composer require vlucas/phpdotenv

require './vendor/autoload.php';

use Dotenv\Dotenv;
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

// <!------- Database_Variables --------------------------------------->

$servername = $_ENV['servername'];
$username   = $_ENV['username'];
$password   = $_ENV['password'];
$database   = $_ENV['database'];

// <!------- Database_Connection -------------------------------------->

try {
    $conn = new PDO($servername, $username, $password);
    $sss = $conn->prepare("use {$database}");
    $sss->execute();
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

// <!------- Don't_Import_Code ---------------------------------------->

if (!debug_backtrace()) {
    

    // <!------- Create_Table_Employee -------------------------------->

    $sql = 'CREATE TABLE IF NOT EXISTS employee (
        id INT PRIMARY KEY AUTO_INCREMENT,
        firstname VARCHAR(20) NOT NULL,
        lastname VARCHAR(20) NOT NULL,
        job_title VARCHAR(50) NOT NULL,
        hourly_rate DECIMAL(5,2) NOT NULL,
        part_time BOOLEAN,
        overtime_allowed BOOLEAN
    )';

    try {
        $conn->exec($sql);
    } catch(PDOException $e) {
        echo 'Error Create Table Employee:' . '<br>' . $e->getMessage();
    }

    // <!------- Check ------------------------------------------------>

    print_r(".....so Far so good!.\n");

}
