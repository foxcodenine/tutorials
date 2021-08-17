<?php

use app\Model\Course;
use app\Model\DBConnect;
use app\Model\User;

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
    RegisterDate DATE NOT NULL, 

    CONSTRAINT Course_Register
    FOREIGN KEY (courseId) REFERENCES Course (id),
    
    CONSTRAINT Student_Register
    FOREIGN KEY (studentId) REFERENCES  Student (id)  
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

$adminUser  = new User('chrismariojimmy@yahoo.com', 'foxcode9', 'admin');
$normalUser = new User('yanika@gmail.com', 'candyGirl', NULL);

// $testStudent = new Student('Dorothy', 'Cassar', 31, 'dormond@gmail.com', 99257468);
// $testStudent = new Student('Tania', 'Cardona', 34, 'drvodka@yahoo.com', 79265258);
// $testStudent = new Student('James', 'Manduca', 36, 'arch@gov.mt', 21587482);

// $testCourse = new Course('LPIC-1 Linux Administrator', '2021-10-04', 'Mon Wed', '18:00', '21:00', 63, 1225);

// $testCourse = new Course('MySuccess Website Developer', '22-11-2021', 'Mon Wed', '18:00', '21:00', 63, 1300);

