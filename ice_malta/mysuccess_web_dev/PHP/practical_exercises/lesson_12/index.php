<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./static/css/style.css">
    <link rel="stylesheet" href="/ice_malta/php/header/static/css/style.css">
    <title>PHP Lesson 12</title>
    <?php

use app\Model\Rabbit;
use app\Model\Student;

require_once './app/init.php';
    ?>

</head>

<body>
<div class="container"> 

    <?php include $_SERVER['DOCUMENT_ROOT'] . '/ice_malta/php/header/index.php'?>
    <h2>MySuccess Website Developer - PHP Lesson 12</h2>
    
    <?php 
    
    
    // var_dump($_ENV);

    // $r = new Rabbit;
    // var_dump(Student::updateStudentList());

    // header('Content-Type: application/json');

    echo '<div class="json">';
    echo json_encode(Student::updateStudentList(), JSON_PRETTY_PRINT ,512);
    echo '</div>';

    // echo gethostbyaddr($_SERVER['REMOTE_ADDR']);
    
    
    ?>



</div>

<script>

data = document.querySelector(".json").textContent;
console.log (data);
document.querySelector(".json").innerHTML = JSON.stringify(data).replace(/\\n/g, '<br>').replace(/\\/g, ' &nbsp; ').replace(/"/g, '');


</script>
</body>
</html>

