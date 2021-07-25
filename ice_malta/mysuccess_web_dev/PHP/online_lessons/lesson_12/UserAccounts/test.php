<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    use Foxcode\Model\Account;

    require_once 'app/init.php';    

    $chris = new Account('Chris', 'Farrugia', 'fddcdoxcofeeyfvdenine', 'ayanami');
    Account::add($chris);
    
    echo '...testing testing 123'
    ?>
</body>
</html>