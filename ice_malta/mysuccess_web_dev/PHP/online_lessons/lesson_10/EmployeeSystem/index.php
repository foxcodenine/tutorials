<?php    
    session_start();
    echo get_current_user();
    require './Employee.php';
    if (isset($_SESSION['employeeList'])){
        $employeeList = $_SESSION['employeeList'];
    } else {
        $employeeList = [];
    }

    $action = null;

    if (isset($_GET['action'])) {
        $action = $_GET['action'];
    }

    switch($action){
        case 'add': addEmployee(); break;
    }

    // _________________________________________________________________
    // Action Functions:
    function addEmployee() {
        global $employeeList;

        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $hourlyRate = $_POST['hourlyRate'];
        $overtimeAllowed = isset($_POST['overtimeAllowed']);

        $emp =new Employee($name, $surname, $hourlyRate, $overtimeAllowed);
        $employeeList[] = $emp;
        $_SESSION['employeeList'] = $employeeList;
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Employee System</title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <h1>Employees</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th><th>Name</th><th>Surname</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    foreach($employeeList as $id=>$emp) {
                        echo "<tr>";
                        echo "<td>{$id}</td>";
                        echo "<td>{$emp->getName()}</td>";
                        echo "<td>{$emp->getSurname()}</td>";
                        echo "</tr>";
                    }
                ?>
            </tbody>
        </table>
        
        <h1>Add Employee</h1>
        <form name="addEmployee" action="index.php?action=add" method="POST">
            <fieldset>
                <label for="name" class="boldLabel">Name</label>
                <input type="text" name="name" placeholder="Name" required>
                <br>
                <label for="surname" class="boldLabel">Surname</label>
                <input type="text" name="surname" placeholder="Surname" required>
                <br>
                <label for="hourlyRate" class="boldLabel">Hourly Rate</label>
                <input type="number" name="hourlyRate" placeholder="0.00" required>
                <br>
                <input type="checkbox" name="overtimeAllowed" value="otAllowed" class="otCheck">
                <label for="overtimeAllowed">Allowed overtime</label>
                <br>
                <label for="send">&nbsp;</label>
                <input type="submit" value="Add" name="send">
            </fieldset>
        </form>
        
        <h1>Generate Payslip</h1>
        <form name="generatePayslip" action="payslip.php" method="POST">
            <fieldset>
                <select name="empId">
                    <?php
                        foreach($employeeList as $id=>$emp) {
                            echo "<option value='{$id}'>{$emp->getName()} {$emp->getSurname()}</option>";
                        }
                    ?>
                </select>
                <label for="hoursWorked">Hours Worked</label>
                <input type="text" name="hoursWorked" placeholder="160" value="160" required>
                <label for="slipMonth">Month</label>
                <select name="slipMonth">
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                </select>
                <label for="slipYear">Year</label>
                <select name="slipYear">
                    <?php
                        $currentYear = date("Y");
                        $yearsBack = 3;
                        for ($i= intval($currentYear); $i>=intval($currentYear)-3; $i--) {
                            echo "<option value=\"$i\">$i</option>";
                        }
                    ?>
                </select>
                <input type="submit" value="Go">
            </fieldset>
        </form>
    </body>
</html>
<!-- https://icemalta.com/feedback/ -->