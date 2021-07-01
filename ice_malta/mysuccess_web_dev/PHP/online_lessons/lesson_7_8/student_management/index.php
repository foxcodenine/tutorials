<?php
session_start(); // Tell PHP that we want to use the session



if (isset($_SESSION['studentList'])) {
    $studentList = $_SESSION['studentList'];
} else {
    $studentList = array();
}


// $studentList = array(); // empty array
$action = null;

// Get the action we received, if any
if (isset($_GET['action'])) {
    $action = $_GET['action'];

}

// Get the sorting method, if any
$sortBy = null;
if (isset($_SESSION['sortBy'])) {
    $sortBy = $_SESSION['sortBy'];
}

// Call a function depending on the value of $action
switch($action) {
    case "add": addStudent();       break;
    case "delete": deleteStudent(); break;
    case "sort": sortStudents();    break;
}

// _____________________________________________________________________

function addStudent() {
    global $studentList;

    $studentList[] = array(
        'name' => $_POST['name'],
        'surname' => $_POST['surname'],
        'grade' => $_POST['grade']
    );
    sortStudents();
    $_SESSION['studentList'] = $studentList;
}


function deleteStudent() {
    global $studentList;

    $studId = $_GET['studId'];
    unset($studentList[$studId]);

    $_SESSION['studentList'] = $studentList;
}


function sortStudents() {
    global $studentList, $sortBy;

    if (isset($_GET['sortBy'])) {
        //Scenario 2: User has JUST sorted
        $sortBy = $_GET['sortBy'];
        
        if(isset($_SESSION['sortBy']) && $_SESSION['sortBy'] === $sortBy){
            
            $pageWasRefreshed = isset($_SERVER['HTTP_CACHE_CONTROL']) && $_SERVER['HTTP_CACHE_CONTROL'] === 'max-age=0';
            if(!$pageWasRefreshed && isset($_SESSION['sortAscending'])){
                $_SESSION['sortAscending'] = !$_SESSION['sortAscending']; 
            }                       
            
        } else {
            $_SESSION['sortBy'] = $sortBy;
            $_SESSION['sortAscending'] = true;            
        }

    } else if (isset($_SESSION['sortBy'])) {
        //Scenario 3: User has previusly sorted
        $sortBy = $_SESSION['sortBy'];
    }

    if ($sortBy === 'id' || $sortBy === null) {
        // Scenario 1: User has never sorted, Or wants to sort by ID

        if (isset($_SESSION['sortAscending']) && !$_SESSION['sortAscending']) {
            krsort($studentList); 
        } else {
            ksort($studentList); 
        }
        
    } else {
        uasort($studentList, 'studCompare');        
    }

    $_SESSION['studentList'] = $studentList; 
}


function studCompare($a, $b) {
    global $sortBy;

    if (($a[$sortBy]) === $b[$sortBy]) return 0;

    if (isset($_SESSION['sortAscending']) && $_SESSION['sortAscending']) {
        return (strtolower($a[$sortBy]) > strtolower($b[$sortBy])) ? 1 : -1;
    } else {
        return (strtolower($a[$sortBy]) < strtolower($b[$sortBy])) ? 1 : -1;
    }
    
}

// print_r($studentList); // TODO remove this!

// _____________________________________________________________________

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" 
    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" 
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" 
    crossorigin="anonymous"/>
    <title>Student Management System</title>
</head>
<body style="font-family: Arial, Helvetica, sans-serif; padding:10px">
    <h1>Student List</h1>
    <table border="1">
        <thead>
            <tr>
            <?php 

                $dataColumes = ['id'=>'ID', 'name'=>'Name', 'surname'=>'Surname', 'grade'=>'Grade'];

                foreach($dataColumes as $k => $v) {
                    echo "<th><a href='index.php?action=sort&sortBy={$k}'>";
                    if(isset($_SESSION['sortAscending']) && $_SESSION['sortBy'] === $k) {
                        echo $_SESSION['sortAscending'] ? "{$v}<i class='fas fa-caret-up'></i>" : "{$v}<i class='fas fa-caret-down'></i>";
                    } else {
                        echo "{$v}";
                    }                    
                    echo"</a></th>";
                }
            ?>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php
            
            foreach($studentList as $id => $stud) {
                echo "<tr>";
                echo "<td>{$id}</td>";
                echo "<td>{$stud['name']}</td>";
                echo "<td>{$stud['surname']}</td>";
                echo "<td>{$stud['grade']}</td>";
                echo "<td><a href='index.php?action=delete&studId={$id}'>Delete</a></td>";
                echo "<tr>";
            }
            
            ?>
            
        </tbody>
    </table>

    <h1>Add Student</h1>
    <form action="index.php?action=add" method="POST" name="addStudent">

        <!-- <fieldset> -->
            <!-- <label for="name">Name</label> -->
            <input type="text" name="name" placeholder="Enter name" style="margin-bottom: 10px;"><br>

            <!-- <label for="surname">Surname</label> -->
            <input type="text" name="surname" placeholder="Enter surname" style="margin-bottom: 10px;"><br>
            
            <!-- <label for="grade">Grade</label> -->
            <input type="text" name="grade" placeholder="Enter grade" style="margin-bottom: 10px;"><br>

            <input type="submit" value="Add" name="submitAdd">

        <!-- </fieldset> -->
    </form>
</body>
</html>