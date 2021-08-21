<?php

use app\Model\DBConnect;

require_once __DIR__ . '/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
$dotenv->load();

$sqlStudebtTable = 'CREATE TABLE IF NOT EXISTS Student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone INT NOT NULL            
)';

$sqlCourseTable = 'CREATE TABLE IF NOT EXISTS Course (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    startDate date NOT NULL,
    days VARCHAR(100) NOT NULL, 
    timeFrom TIME NOT NULL,
    timeTo TIME NOT NULL,        
    duration INT NOT NULL,        
    price DECIMAL(8,2) NOT NULL          
)';

$sqlRegisterTable = 'CREATE TABLE IF NOT EXISTS Register (
    id INT PRIMARY KEY AUTO_INCREMENT,
    courseId INT NOT NULL,
    studentId INT NOT NULL,
    registerDate DATE NOT NULL, 

    CONSTRAINT Course_Register
    FOREIGN KEY (courseId) REFERENCES Course (id)
    ON DELETE CASCADE,
    
    CONSTRAINT Student_Register
    FOREIGN KEY (studentId) REFERENCES  Student (id)
    ON DELETE CASCADE  
)';

$sqlUserTable = 'CREATE TABLE IF NOT EXISTS User (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,    
    role VARCHAR(255),    
    salt VARCHAR(255) NOT NULL,
    apiKey VARCHAR(255) NOT NULL
)';

DBConnect::createTable($sqlStudebtTable);
DBConnect::createTable($sqlCourseTable);
DBConnect::createTable($sqlRegisterTable);
DBConnect::createTable($sqlUserTable);



