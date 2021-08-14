<?php

use app\Model\Course;
use app\Model\DBConnect;
use app\Model\Student;

require_once __DIR__ . '/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
$dotenv->load();

// _____________________________________________________________________

if (!debug_backtrace()) {

    $sqlStudebtTable = 'CREATE TABLE IF NOT EXISTS student (
        id INT PRIMARY KEY AUTO_INCREMENT,
        firstname VARCHAR(100) NOT NULL,
        lastname VARCHAR(100) NOT NULL,
        age INT NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone INT NOT NULL            
    )';

    $sqlCourseTable = 'CREATE TABLE IF NOT EXISTS course (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        startDate date NOT NULL,
        days VARCHAR(100) NOT NULL, 
        timeFrom TIME NOT NULL,
        timeTo TIME NOT NULL,        
        duration INT NOT NULL,        
        price DECIMAL(8,2) NOT NULL          
    )';

    $sqlRegistrationTable = 'CREATE TABLE IF NOT EXISTS registration (
        id INT PRIMARY KEY AUTO_INCREMENT,
        courseId INT NOT NULL,
        studentId INT NOT NULL,
        registrationDate DATE NOT NULL, 

        CONSTRAINT Course_Registration
        FOREIGN KEY (courseId) REFERENCES course (id),
        
        CONSTRAINT Student_Registration
        FOREIGN KEY (studentId) REFERENCES  student (id)  
    )';

    DBConnect::createTable($sqlStudebtTable);
    DBConnect::createTable($sqlCourseTable);
    DBConnect::createTable($sqlRegistrationTable);

    // $testStudent = new Student('Dorothy', 'Cassar', 31, 'dormond@gmail.com', 7931022);

    // echo '...so far so good!<br>';
    // echo($testStudent->getFirstname());

    $testCourse = new Course(
        'PHP', '2021-08-12', 'Mon & Wed', '18:00', '21:00', 40, 1895
    );
    
}
//         