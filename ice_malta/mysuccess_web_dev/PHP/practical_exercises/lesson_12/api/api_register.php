<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/ice_malta/php/lesson_12/app/init.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/ice_malta/php/lesson_12/api/api_functions.php';

use app\Model\Course;
use app\Model\Register;
use app\Model\Student;

header('Content-Type: application/json');

$user = verifyUser();



if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    header('Status: 200 OK'); 
    echo json_encode(Register::fetchAllRegister(), JSON_PRETTY_PRINT , 512);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    verifyAdmin($user);

    $cID = filter_input(INPUT_POST, 'cID', FILTER_SANITIZE_STRING) ?: NULL;
    $sID = filter_input(INPUT_POST, 'sID', FILTER_SANITIZE_STRING) ?: NULL;
    

    if (empty($cID)) {
        header('Status: 400 Bad Request');
        echo json_encode(['Status'=>'Failure', 'Message'=>'Course ID not Provided']);
    } else if (empty($sID)) {
        header('Status: 400 Bad Request');
        echo json_encode(['Status'=>'Failure', 'Message'=>'Student ID not Provided']);
    } else if (!in_array($sID, Student::fetchAllIds())){
        header('Status: 400 Bad Request');
        echo json_encode(
            ['Status'=>'Failure', 'Message'=>'Student with ID: ' . $sID . ' not found']
        );
    } else if (!in_array($cID, Course::fetchAllIds())) {      
        header('Status: 400 Bad Request');  
        echo json_encode(
            ['Status'=>'Failure', 'Message'=>'Course with ID: ' . $cID . ' not found']
        );
    } else if (Register::checkRegisterExist($cID, $sID)) {
        header('Status: 400 Bad Request');
        echo json_encode(
            ['Status'=>'Failure', 'Message'=>'Student already registered to course']
        );
    } else {
        header('Status: 201 Created'); 
        $newRegister = new Register($cID, $sID, date('Y-m-d'));
        echo json_encode(
            ['Status'=>'Success', 'Message'=>'Student has been registered to course', 'Registry'=>$newRegister]
        );
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    verifyAdmin($user);

    $cID = filter_input(INPUT_GET, 'cID', FILTER_SANITIZE_STRING) ?: NULL;
    $sID = filter_input(INPUT_GET, 'sID', FILTER_SANITIZE_STRING) ?: NULL;
    
    if (empty($cID)) {
        header('Status: 400 Bad Request');
        echo json_encode(['Status'=>'Failure', 'Message'=>'Course ID not Provided']);
    } else if (empty($sID)) {
        header('Status: 400 Bad Request');
        echo json_encode(['Status'=>'Failure', 'Message'=>'Student ID not Provided']);
    } else if ($cID == $sID && strtolower($cID) == 'all') {
        header('Status: 403 Forbidden');
        echo json_encode(['Status'=>'Failure', 'Message'=>'Forbidden action']);
    } else if (!in_array($cID, Course::fetchAllIds()) && strtolower($cID ) !== 'all') {      
        header('Status: 400 Bad Request');  
        echo json_encode(
            ['Status'=>'Failure', 'Message'=>'Course with ID: ' . $cID . ' not found']
        );
    } else if (!in_array($sID, Student::fetchAllIds()) && strtolower($sID ) !== 'all'){
        header('Status: 400 Bad Request');
        echo json_encode(
            ['Status'=>'Failure', 'Message'=>'Student with ID: ' . $sID . ' not found']
        );
    } 
    else if (!Register::checkRegisterExist($cID, $sID) && strtolower($cID) !== 'all' && strtolower($sID) !== 'all') {
        header('Status: 400 Bad Request');
        echo json_encode(
            ['Status'=>'Failure', 'Message'=>'Student having ID ' . $sID . ' and course ID '. $cID . ' not found']
        );
    }
    else {
        Register::deleteFromRegister($cID, $sID);

        header('Status: 200 OK'); 

        $message = 'Course with ID ' . $cID . ' has been removed from student with ID ' . $sID;
        if (strtolower($cID) == 'all') $message = 'All courses has been removed from student with ID ' . $sID;
        if (strtolower($sID) == 'all') $message = 'All students has been removed from course with ID ' . $cID;
                
        echo json_encode(
            ['Status'=>'Success', 'Message'=>$message]
        );                
    }
}