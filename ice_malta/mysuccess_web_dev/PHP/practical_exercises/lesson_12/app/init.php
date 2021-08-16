<?php

use app\Model\Course;
use app\Model\DBConnect;
use app\Model\Student;
use app\Model\User;

require_once __DIR__ . '/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
$dotenv->load();

// _____________________________________________________________________

if (!debug_backtrace()) {

    include './tables.php';

    echo '...so far so good!<br>';    
}
//         