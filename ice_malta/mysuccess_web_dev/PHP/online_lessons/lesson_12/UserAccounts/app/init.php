<?php

use Dotenv\Dotenv;

require_once __DIR__ . '/../vendor/autoload.php';

session_start();

$dotenv = Dotenv::createImmutable(dirname(__DIR__));
$dotenv->load();

