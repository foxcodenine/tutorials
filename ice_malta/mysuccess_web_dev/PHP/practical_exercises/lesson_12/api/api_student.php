<?php 
require_once $_SERVER['DOCUMENT_ROOT'] . '/ice_malta/php/lesson_12/app/init.php';
use app\Model\Student;
header('Content-Type: application/json');


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if(isset($_GET['id']) && !empty($_GET['id'])) {
        $student = array_filter(Student::updateStudentList(), function($s) {
            return $s->getId() == $_GET['id'];
        });
        echo json_encode($student, JSON_PRETTY_PRINT ,512);
    } else {        
        echo json_encode(Student::updateStudentList(), JSON_PRETTY_PRINT ,512);
    }    
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo json_encode(['POST'=>'add student'], JSON_PRETTY_PRINT ,512);
}




// foreach ($_SERVER as $k=>$v ) {
//     print_r([$k=>$v]);
//     echo '<br><br>';
// }


