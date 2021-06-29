<?php

if (isset($_POST['num1'])) {
    function prepare_calulation(int $a, int $b) {
        return $a + $b;
    }

    prepare_calulation(222, 'aaaa');
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calc</title>
</head>
<body>
    <h1>SimpleCale</h1>
    <form name="calcForm" method="POST">
        <label for="num1">Num 1</label>
        <input type="number" name="num1">
        <br><br>
        <label for="num2">Num2</label>
        <input type="number" name="num2">
        <br><br>
        <label for="op">Operation</label>
        <select name="op">
            <option selected value="+">+</option>
            <option  value="-">-</option>
            <option  value="/">/</option>
            <option  value="*">*</option>
        
        </select>
        <input type="submit" value="Calculate">
    </form>
</body>
</html>