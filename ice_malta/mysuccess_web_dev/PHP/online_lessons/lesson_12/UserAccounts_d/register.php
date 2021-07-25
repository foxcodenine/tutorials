<?php
    require './Model/Account.php';
    use \UserAccounts\Model\Account;

    $errorMessage = null;
    
    $action = null;
    if (isset($_GET['action'])) {
        $action = $_GET['action'];
    }
    
    switch($action) {
        case "add": registerUser(); break;
    }
    
    function registerUser() {   
        global $errorMessage;
        
        $firstName = $_POST['inputFirstName'];
        $lastName = $_POST['inputLastName'];
        $username = $_POST['inputEmail'];
        $password = $_POST['inputPassword'];
        $pwConfirm = $_POST['inputPasswordConfirm'];
        
        // TODO: Register the user here
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>User Accounts</title>
        <?php require 'Common/header.php'; ?> <!-- Bootstrap files -->
    </head>
    <body>
        <!-- Navigation bar -->
        <?php require 'Common/nav.php'; ?>
        <div class="container">

            <?php
                $inputFirstName = "";
                $inputLastName = "";
                $inputEmail = "";
                if ($errorMessage != null) {
                    echo "<div class=\"alert alert-danger\" role=\"alert\">";
                    echo $errorMessage;
                    echo "</div>";
                }
            ?>

            <form class="form-register">
                <h2 class="form-register-heading">Register</h2>
                <label for="inputName" class="sr-only">Name</label>
                <input type="text" id="inputName" name="inputName" class="form-control" placeholder="Name" required autofocus>
                <label for="inputName" class="sr-only">Surname</label>
                <input type="text" id="inputLastName" name="inputLastName" class="form-control" placeholder="Surname" required>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" name="inputEmail" class="form-control" placeholder="Email address" required>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" name="inputPassword" class="form-control" placeholder="Password" required>
                <label for="inputPasswordConfirm" class="sr-only">Confirm Password</label>
                <input type="password" id="inputPasswordConfirm" name="inputPasswordConfirm" class="form-control" placeholder="Password" required>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            </form>
        </div>
    </body>
</html>
