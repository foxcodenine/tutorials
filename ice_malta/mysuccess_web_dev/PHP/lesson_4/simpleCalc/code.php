<?php

$result = 0;
$placeholder1 = 'Enter the first number';
$placeholder2 = 'Enter the second number';

if(isset($_POST['calc_submit'])) {

    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $operator = $_POST['operator'];
    

    if (!empty(trim($num1)) && !empty(trim($num2))) {

        switch ($operator) {
            case '+':
                $result = $num1 + $num2;
                break;
            case '-':
                $result = $num1 - $num2;
                break;
            case '/':
                $result = $num1 / $num2;
                break;
            case '*':
                $result = $num1 * $num2;
                break;    
        }

        $placeholder1 = &$num1;
        $placeholder2 = &$num2;
    }

}