
<?php
    // require './Model/Account.php';
    // use \UserAccounts\Model\Account;
    // use Foxcode\Model\Account;

    use Foxcode\Model\Account;

    require_once './app/init.php';

    // echo get_current_user() . '<br><br>';
    // echo $_SERVER['SERVER_SIGNATURE'] . '<br>';
    // echo $_SERVER['SERVER_NAME'] . '<br>';

    // _________________________________________________________________

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
        
        $firstname = $_POST['inputFirstname'];
        $lastname = $_POST['inputLastname'];
        $username = $_POST['inputEmail'];
        $password = $_POST['inputPassword'];
        $pwConfirm = $_POST['inputPasswordConfirm'];
        
        // Username is avalibale
        if (!Account::isUserNameAvailable($username)) {
            $errorMessage .= <<<ERR
            There is already an account associated with that e-mail address.
            Try <a href="index.php" class="alert-link">logging in</a>
            ERR;

        }

        // password = password confirmation
        if ($password !== $pwConfirm) {
            $errorMessage .= <<< ERR
            The password and password confirmation do not match.
            ERR;
        }
        

        if ($errorMessage !== null) {return null;}

        $newAccount = new Account($firstname, $lastname, $username, $password);

        Account::add($newAccount);

        header('location: index.php?action=registered');
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

            <form class="form-register" method="POST" action="register.php?action=add">
                <h2 class="form-register-heading">Register</h2>
                
                <label for="inputFirstname" class="sr-only">Name</label>
                <input type="text" id="inputFirstname" name="inputFirstname" class="form-control" placeholder="Name" required autofocus>

                <label for="inputLastname" class="sr-only">Surname</label>
                <input type="text" id="inputLastname" name="inputLastname" class="form-control" placeholder="Surname" required>

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
