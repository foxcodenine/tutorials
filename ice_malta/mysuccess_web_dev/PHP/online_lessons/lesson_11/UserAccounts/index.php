<?php
    require './Model/Account.php';
    
    session_start();
    
    use \UserAccounts\Model\Account;
    
    $showRegisterSuccess = false;
    $errorMessage = null;
    
    // TODO: Take user to admin if already logged in.
    
    $action = null;
    if (isset($_GET['action'])) {
        $action = $_GET['action'];
    }
    
    switch($action) {
        case "signIn": checkLogin(); break;
        case "registered": $showRegisterSuccess = true; break;
        case "signOut": logout(); break;
    }
    
    function checkLogin() {
        // TODO: Check account
    }
    
    function logout() {
        // TODO: Log the user out
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
                if ($errorMessage != null) {
                    echo "<div class=\"alert alert-danger\" role=\"alert\">";
                    echo $errorMessage;
                    echo "</div>";
                }
            ?>
            
            <?php if ($showRegisterSuccess) { ?>
            <div class="alert alert-success" role="alert">
                Your account has been successfully registered! Please sign in below.
            </div>
            <?php } ?>

            <form class="form-signin">
                <h2 class="form-signin-heading">Please sign in</h2>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" name="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" name="inputPassword" class="form-control" placeholder="Password" required>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" name="remember-me" value="remember-me"> Remember me
                    </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
            <form action="register.php" class="form-signin">
                <button class="btn btn-lg btn-block btn-secondary" type="submit">Register</button>
            </form>
        </div>
    </body>
</html>
