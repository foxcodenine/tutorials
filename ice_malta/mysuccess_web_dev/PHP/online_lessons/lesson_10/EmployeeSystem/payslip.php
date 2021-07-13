<?php
    require './Employee.php';
    session_start();

    // Get data


    $empId = $_POST['empId'];
    $hoursWorked = $_POST['hoursWorked'];
    $month = $_POST['slipMonth'];
    $year = $_POST['slipYear'];

    // Get Employee
    $employeeList = $_SESSION['employeeList'];
    // print_r($employeeList); 
    // print_r($_POST);
    // exit();
    $employee = $employeeList[$empId];

    // Get payslip
    $payslip = $employee->getPayslip($hoursWorked);

    // Prepare a number formatter to format currencies
    // use \NumberFormatter;
    $fmt = new NumberFormatter("mt-MT", NumberFormatter::CURRENCY);
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>
            <?php         
                echo "Payslip for {$employee->getName()} {$employee->getSurname()} for $month $year";
            ?>
        </title>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div class="wrapper">
            <div class="bar">
                Payslip
            </div>
            <div class="info">

                <!-- TODO: Employee info here-->
                <span class="info">Employee:</span>
                <?= $employee->getName() . ' ' . $employee->getSurname(); ?><br>
                <span class="info">Basis:</span>
                <?= $month . " " . $year; ?>
                <span class="info">Tax Bracket:</span>
                <?= Employee::TAX_RATE . "%"; ?>

            </div>
            <div class="bar">
                Breakdown
            </div>
            <div class="info">
                <table>
                    <thead>
                        <tr>
                            <th>Description</th><th>Qty</th><th>Gross</th><th>Tax</th><th>Net</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Standard Hours</td>
                            <td><?= $payslip->standardHours ?></td>
                            <td><?= $fmt->format($payslip->standardGross); ?></td>
                            <td><?= $fmt->format($payslip->standardTax); ?></td>
                            <td><?= $fmt->format($payslip->standardNet); ?></td>
                        </tr>
                        <tr>
                            <td>Overtime Hours</td>
                            <td><?= $payslip->overtimeHours ?></td>
                            <td><?= $fmt->format($payslip->overtimeGross); ?></td>
                            <td><?= $fmt->format($payslip->overtimeTax); ?></td>
                            <td><?= $fmt->format($payslip->overtimeNet); ?></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="bar">
                Totals
            </div>
            <div class="info">
                <!-- TODO: Totals Here -->
                <span class="info">Total Gross:</span><?= $fmt->format($payslip->totalGross);?>
                <span class="info">Total Tax:</span><?= $fmt->format($payslip->totalTax);?>
                <span class="info">Total Net:</span><?= $fmt->format($payslip->totalNet);?>
            </div>
        </div>
    </body>
</html>