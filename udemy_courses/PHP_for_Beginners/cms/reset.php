<?php  include "includes/db.php"; ?>
<?php  include "includes/header.php"; ?>
<?php  include "functions.php"; ?>

<!-- Navigation -->

<?php include "./includes/navigation.php"?>


<?php 
if (!isset($_GET['email']) || !isset($_GET['token'])) {
    redirect('index');
}

$token = $_GET['token'];
$sql = "
    SELECT user_username, user_email, user_token FROM cms_users WHERE user_token = ?;
";

if($stmt = mysqli_prepare($conn, $sql)) {

    mysqli_stmt_bind_param($stmt, 's', $token);

    mysqli_stmt_execute($stmt);

    mysqli_stmt_bind_result($stmt, $username, $email, $token);

    mysqli_stmt_fetch($stmt);

    mysqli_stmt_close($stmt);

    if ($_GET['email'] !== $email || $_GET['token'] !== $token) {
        redirect('index');
    } 
   

} else {
    if ($conn->error) {
        echo $conn->error;
    }
}



if (isset($_POST['password']) && isset($_POST['confirm_password'])) {
    
    if ($_POST['password'] == $_POST['confirm_password'] && !empty(trim($_POST['password']))) {

        $password = password_hash($_POST['password'], PASSWORD_BCRYPT);



        $sql = "
            UPDATE cms_users 
            SET user_password = '{$password}', user_token = '' 
            WHERE user_email = ?
        ";

       if ($stmt = mysqli_prepare($conn, $sql)) {

            mysqli_stmt_bind_param($stmt, 's', $email);
            mysqli_stmt_execute($stmt);
            

            if(mysqli_stmt_affected_rows($stmt) >= 1) {
                redirect('/htdocs/cms/login'); 
            }

            mysqli_stmt_close($stmt);

       } else {
            if ($conn->error) {
                die('Error: ' . '<br>' . $conn->error);
            }
       }
    } else if ($_POST['password'] !== $_POST['confirm_password']) {
        $message = "<p>Passwords does not match.</p>";
    } else if (empty(trim($_POST['password']))) {
        $message = "<p>Passwords can not be empty.</p>";
    }
}


?>

<!-- Page Content -->
<div class="container">

    <div class="form-gap"></div>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="text-center">
                              
                                <h3><i class="fa fa-lock fa-4x"></i></h3>
                                <h2 class="text-center">Reset Password</h2>

                                <?php if (isset($message)): ?>
                                    <?php echo $message; ?>
                                <?php else: ?>
                                    <p>You can reset your password here.</p>
                                <?php endif ?>

                                <div class="panel-body">

                                    <form id="register-form" role="form" autocomplete="off" class="form" method="post">

                                        <div class="form-group">
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="glyphicon glyphicon-user color-blue"></i></span>
                                                <input id="password" name="password" placeholder="password" class="form-control"  type="text">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="glyphicon glyphicon-ok color-blue"></i></span>
                                                <input id="confirm_password" name="confirm_password" placeholder="confirm password" class="form-control"  type="text">
                                            </div>
                                        </div>


                                        <div class="form-group">
                                            <input name="recover-submit" class="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit">
                                        </div>

                                        <input type="hidden" class="hide" name="token" id="token" value="">
                                    </form>

                                </div><!-- Body-->

                                <h2></h2>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <hr>

    <?php include "includes/footer.php";?>

</div> <!-- /.container -->

