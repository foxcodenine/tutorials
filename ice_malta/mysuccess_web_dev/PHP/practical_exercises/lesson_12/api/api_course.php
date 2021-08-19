<?php 
require_once $_SERVER['DOCUMENT_ROOT'] . '/ice_malta/php/lesson_12/app/init.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/ice_malta/php/lesson_12/api/api_functions.php';
use app\Model\Course;

header('Content-Type: application/json');

$user = verifyUser();

// _____________________________________________________________________


if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    
    $id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_STRING) ?? NULL;

    if ($id) {
        
        if(in_array($id, Course::fetchAllIds())) {
            header('Status: 200 OK');
            echo json_encode(Course::fetchCourse($id), JSON_PRETTY_PRINT, 512);
        } else {
            header('Status: 400 Bad Request');
            echo json_encode(
                ['Status'=>'Failure', 'Message'=>'Course with ID: ' . $id . ' not found']
            ); 
        }

    } else {
        header('Status: 200 OK');
        echo json_encode(Course::fetchAllCourses(), JSON_PRETTY_PRINT, 512);
    }
}

// _____________________________________________________________________


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    verifyAdmin($user);

    $name       = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING) ?: NULL;
    $startDate  = filter_input(INPUT_POST, 'startDate', FILTER_SANITIZE_STRING) ?: NULL;
    $days       = filter_input(INPUT_POST, 'days', FILTER_SANITIZE_STRING) ?: NULL; $days = trim($days);
    $timeFrom   = filter_input(INPUT_POST, 'timeFrom', FILTER_SANITIZE_STRING) ?: NULL;
    $timeTo     = filter_input(INPUT_POST, 'timeTo', FILTER_SANITIZE_STRING) ?: NULL;
    $duration   = filter_input(INPUT_POST, 'duration', FILTER_SANITIZE_STRING) ?: NULL;
    $price      = filter_input(INPUT_POST, 'price', FILTER_SANITIZE_STRING) ?: NULL;

    $postVars = compact('name', 'startDate', 'days', 'timeFrom', 'timeTo', 'duration', 'price');
    

    foreach($postVars as $k=>$v) {
        if (empty($v)) {
            header('Status: 400 Bad Request');
            echo json_encode(['Status'=>'Failure', 'Message'=>"No {$k} Provided"]);
            exit();
        }
    }
    $startDate  = Course::arrangeDate($startDate, TRUE);

    $newCourse = new Course($name, $startDate, $days, $timeFrom, $timeTo, $duration, $price);

    if ($newCourse->getId()) {
        header('Status: 201 Created');
        echo json_encode(
            ['Status'=>'Success', 'Message'=>'Course Added', 'Course'=> $newCourse], 
            JSON_PRETTY_PRINT ,512
        );
    } else {
        header('Status: 400 Bad Request');
        echo json_encode(['Status'=>'Failure']);
    }

}

// _____________________________________________________________________


if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    verifyAdmin($user);

    $id = filter_input(INPUT_GET,  'id', FILTER_SANITIZE_STRING) ?: NULL;
    
    if ($id) {

        if (in_array($id, Course::fetchAllIds())) {

            $course = Course::fetchCourse($id);
            $course->deleteCourse();
            header('Status: 200 OK');
            echo json_encode(
                [
                    'Status'=>'Success', 
                    'Message'=> 'Course with ID:' . $course->getId() . ' has been deleted'
                ], 
                JSON_PRETTY_PRINT ,512
            );

        } else {
            header('Status: 400 Bad Request');
            echo json_encode(
                ['Status'=>'Failure', 'Message'=>'Course with ID: ' . $id . ' not found']
            );
        }

    } else {
        header('Status: 400 Bad Request');
        echo json_encode(['Status'=>'Failure', 'Message'=>'No ID Provided']);
    }
}

// _____________________________________________________________________

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    verifyAdmin($user);
    
    $id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_STRING) ?: NULL;

    parse_str(file_get_contents("php://input"), $putVars);

    if ($id) {

        if(in_array($id, Course::fetchAllIds())) {
            $course = Course::fetchCourse($id);
            
            foreach ($putVars as $key=>$value) {
                
                $key = filter_var($key, FILTER_SANITIZE_STRING) ?? NULL;
                $value = filter_var($value, FILTER_SANITIZE_STRING) ?? NULL;

                if ($key == 'id') continue; 
                if ($key == 'startDate') $value = Course::arrangeDate($value, TRUE); 

                if ($key && $value) {
                    
                    $course->__set($key, $value);
                }
            }

            $course->addUpdateCourse();
            header('Status: 200 OK');
            echo json_encode(
                ['Status'=>'Success', 'Message'=>'Course Updated', 'Course'=> $course], 
                JSON_PRETTY_PRINT ,512
            );

        } else {
            header('Status: 400 Bad Request');
            echo json_encode(
                ['Status'=>'Failure', 'Message'=>'Course with ID: ' . $id . ' not found']
            );          
        }

    } else {
        header('Status: 400 Bad Request');
        echo json_encode(['Status'=>'Failure', 'Message'=>'No ID Provided']);
    }
}

// _____________________________________________________________________