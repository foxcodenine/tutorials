<?php 
require_once $_SERVER['DOCUMENT_ROOT'] . '/ice_malta/php/lesson_12/app/init.php';
use app\Model\Student;
header('Content-Type: application/json');

echo 123;
echo json_encode(Student::updateStudentList(), JSON_PRETTY_PRINT ,512);
