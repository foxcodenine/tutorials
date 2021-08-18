<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/ice_malta/php/lesson_12/app/init.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/ice_malta/php/lesson_12/api/api_functions.php';

use app\Model\Course;
use app\Model\Register;
use app\Model\Student;

header('Content-Type: application/json');

$user = verifyUser();



if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    echo json_encode(Register::fetchAllRegister(), JSON_PRETTY_PRINT , 512);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $cID = filter_input(INPUT_POST, 'cID', FILTER_SANITIZE_STRING) ?: NULL;
    $sID = filter_input(INPUT_POST, 'sID', FILTER_SANITIZE_STRING) ?: NULL;

    if ($cID) {
        echo json_encode(['Status'=>'Failure', 'Message'=>'Course ID not Provided']);
    } else if ($sID) {
        echo json_encode(['Status'=>'Failure', 'Message'=>'Student ID not Provided']);
        exit();
    } else if (!in_array($sID, Student::fetchAllIds())){
        echo json_encode(
            ['Status'=>'Failure', 'Message'=>'Student with ID: ' . $sID . ' not found']
        );
    } else if (!in_array($cID, Course::fetchAllIds())) {        
        echo json_encode(
            ['Status'=>'Failure', 'Message'=>'Course with ID: ' . $cID . ' not found']
        );
    } else {
        $newRegister = new Register($cID, $sID, date('Y-m-d'));
        // TODO: checkRegisterExist
        // addToRegister()
        // arrange registrt date now();
    }
}