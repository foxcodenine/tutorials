<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./static/css/style.css">
    <link rel="stylesheet" href="/ice_malta/php/header/static/css/style.css">
    <!-- toastr -->
    <link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet" />
    
    <title>PHP Lesson 11</title>

    <?php
    require_once '../app/init.php';
    use src\Controller\Controller;
    use src\Model\State;

    Controller::start();
    ?>

</head>



<body style="background-color: <?= State::$backgroundColor; ?>">
    <div class="container" style="background-color: white; ">

        <?php include $_SERVER['DOCUMENT_ROOT'] . '/ice_malta/php/header/index.php'?>


        <h2>MySuccess Website Developer - PHP Lesson 11</h2>

        <?php include "./main.php"; ?>


        <?php        

        ?>
        
    </div>
    <script>
        const pusherKey     = "<?php echo $_ENV['PUSHER_KEY']?>"
        const pusherCluster = "<?php echo $_ENV['PUSHER_CLUSTER']?>";
    </script>
    <script src="./static/js/jquery.js"></script>
    <script src="./static/js/js.cookie.min.js"></script>
    <script src="./static/js/toastr.min.js"></script>
    <script src="./static/js/script.js"></script>
</body>
</html>