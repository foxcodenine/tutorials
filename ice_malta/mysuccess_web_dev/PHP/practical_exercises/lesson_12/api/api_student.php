<?php 
require_once $_SERVER['DOCUMENT_ROOT'] . '/ice_malta/php/lesson_12/app/init.php';
use app\Model\Student;
header('Content-Type: application/json');

// _____________________________________________________________________

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_STRING) ?: NULL;
    
    if($id) {

        if (in_array($id, Student::fetchAllIds())) {
            $student = Student::fetchStudent($id);        
            echo json_encode($student, JSON_PRETTY_PRINT ,512);
        } else {
            echo json_encode(
                ['Status'=>'Failure', 'Message'=>'Student with ID: ' . $id . ' not found']
            ); 
        }

    } else {        
        echo json_encode(Student::fetchAllStudent(), JSON_PRETTY_PRINT ,512);
    }    
}

// _____________________________________________________________________

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    

    $firstname = filter_input(INPUT_POST, 'firstname', FILTER_SANITIZE_STRING) ?: NULL;
    $lastname  = filter_input(INPUT_POST, 'lastname', FILTER_SANITIZE_STRING) ?: NULL;
    $age       = filter_input(INPUT_POST, 'age', FILTER_SANITIZE_STRING) ?: NULL;
    $email     = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL) ?: NULL;
    $phone     = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING)?: NULL;

    $postVars = compact('firstname', 'lastname', 'age', 'email', 'phone');

    foreach($postVars as $k=>$v) {
        if (empty($v)) {
            echo json_encode(['Status'=>'Failure', 'Message'=>"No {$k} Provided"]);
            exit();
        }
    }
    
    $newStudent = new Student($firstname, $lastname, $age, $email, $phone);

    if ($newStudent->getId()) {
        echo json_encode(
            ['Status'=>'Success', 'Message'=>'Student Added', 'Student'=> $newStudent], 
            JSON_PRETTY_PRINT ,512
        );
    } else {
        echo json_encode(['Status'=>'Failure']);
    }    
}

// _____________________________________________________________________

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    
    
    parse_str(file_get_contents("php://input"), $deleteVars);

    $id = $deleteVars['id'] ?? NULL;
    $id = filter_var($id, FILTER_SANITIZE_STRING) ?? NULL;

    if ($id) {
        if (in_array($id, Student::fetchAllIds())) {
            $student = Student::fetchStudent($id);
            $student->deleteStudent();

            echo json_encode(
                [
                    'Status'=>'Success', 
                    'Message'=> 'Student with ID:' . $student->getId() . ' has been deleted'
                ], 
                JSON_PRETTY_PRINT ,512
            );

        } else {
            echo json_encode(
                ['Status'=>'Failure', 'Message'=>'Student with ID: ' . $id . ' not found']
            );
        }
    } else {
        echo json_encode(['Status'=>'Failure', 'Message'=>'No ID Provided']);
    }
}
// _____________________________________________________________________


if ($_SERVER['REQUEST_METHOD'] === 'PUT') { 

    parse_str(file_get_contents("php://input"),$putVars);
    $id = $putVars['id'] ?? NULL;
    $id = filter_var($id, FILTER_SANITIZE_STRING);
    
    if ($id) {

        if (in_array($id, Student::fetchAllIds())) {
            $student = Student::fetchStudent($id);

            foreach($putVars as $key=>$value) {

                $key = filter_var($key, FILTER_SANITIZE_STRING) ?? NULL;
                $value = filter_var($value, FILTER_SANITIZE_STRING) ?? NULL;

                if ($key && $value) {
                    $student->__set($key, $value);
                }                
            }
            $student->addUpdateStudent();
            echo json_encode(
                ['Status'=>'Success', 'Message'=>'Student Updated', 'Student'=> $student], 
                JSON_PRETTY_PRINT ,512
            );
        } else {
            echo json_encode(
                ['Status'=>'Failure', 'Message'=>'Student with ID: ' . $id . ' not found']
            );
        }   
    } else {
        echo json_encode(['Status'=>'Failure', 'Message'=>'No ID Provided']);
    }
}

// _____________________________________________________________________

