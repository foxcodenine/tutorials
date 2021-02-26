
<?php  include "includes/db.php"; ?>

<?php 

$message = '<br>';

if (isset($_POST['submit_reg'])) {

    $email_reg    = htmlspecialchars($_POST['email_reg']);    
    $username_reg = htmlspecialchars($_POST['username_reg']);
    $password_reg = htmlspecialchars($_POST['password_reg']);

    $email_reg    = $conn->real_escape_string($email_reg);    
    $username_reg = $conn->real_escape_string($username_reg);
    $password_reg = $conn->real_escape_string($password_reg);    

    if (
        empty(trim($email_reg)) ||
        empty(trim($username_reg)) ||
        empty(trim($password_reg)) 
    ) {
        $message =  '<p class=\'bg-danger text-center\'>Field cannot be empty!</p>';
    } else {
        
        $password_reg = password_hash($password_reg, PASSWORD_BCRYPT);

        $sql = "INSERT INTO cms_users (
                user_username, user_password, user_email, user_role
                ) VALUES (
                    '{$username_reg}', '{$password_reg}', '{$email_reg}', 'Subscriber' 
                    
                );";

        if ($conn->query($sql) == false) {
            die('Error:' . '<br>' . $conn->error);
        } else {
            $message = '<p class=\'bg-success\'>Your Registation has been submitted!</p>';
        }
    }
}


?>

<!-- --------------------------------------------------------------- -->
<!DOCTYPE html>
<html lang="en">

<?php  include "includes/header.php"; ?>

<body>


<!-- Navigation -->

<?php  include "includes/navigation.php"; ?>


<!-- Page Content -->
<div class="container" style="margin-top:10vh">
    
<section id="login">
    <div class="container">
        <div class="row">
            <div class="col-xs-6 col-xs-offset-3">
                <div class="form-wrap">
                <h1>Register</h1>
                    <?php echo $message;?>
                    <form role="form" action="registration.php" method="post" id="login-form" autocomplete="off">
                        <div class="form-group">
                            <label for="username" class="sr-only">username</label>
                            <input type="text" name="username_reg" id="username" class="form-control" placeholder="Enter Desired Username">
                        </div>
                         <div class="form-group">
                            <label for="email" class="sr-only">Email</label>
                            <input type="email" name="email_reg" id="email" class="form-control" placeholder="somebody@example.com">
                        </div>
                         <div class="form-group">
                            <label for="password" class="sr-only">Password</label>
                            <input type="password" name="password_reg" id="key" class="form-control" placeholder="Password">
                        </div>
                
                        <input type="submit" name="submit_reg" id="btn-login" class="btn btn-custom btn-lg btn-block" value="Register">
                    </form>
                 
                </div>
            </div> <!-- /.col-xs-12 -->
        </div> <!-- /.row -->
    </div> <!-- /.container -->
</section>


<hr style="margin-top:40vh">



<?php include "includes/footer.php";?>

</body>
</html>