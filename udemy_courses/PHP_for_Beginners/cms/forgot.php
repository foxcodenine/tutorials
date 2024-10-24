<?php  include "includes/db.php"; ?>
<?php  include "includes/header.php"; ?>
<?php  include "functions.php"; ?>
<?php  require_once "./email_function.php"; ?>


<?php 


if (!ifItIsMethod('get') && !isset($_GET['forgot'])) {
    redirect('index');
}


if (ifItIsMethod('post') && isset($_POST['email'])) {

    $email = $_POST['email'];

    $length = 50;

    $token = bin2hex(openssl_random_pseudo_bytes($length));


    if (email_exists($email)) {

        global $conn;

        if ($stmt = mysqli_prepare($conn, "UPDATE cms_users SET user_token = '{$token}' WHERE user_email = ?")) {

            mysqli_stmt_bind_param($stmt, 's', $email);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_close($stmt);

            $to = $email;
            $from = 'no_reply@php.com';
            $subject = 'Change Password';
            $body =     "<p>
                            Click here to reset your password: 
                            
                            <a href='http://localhost/htdocs/cms/reset.php?email={$email}&token={$token}'>
                                http://localhost/htdocs/cms/reset.php?email={$email}&token={$token}
                            </a>

                        </p>";

            if (send_this_mail($to, $from, $subject, $body)) {
                $message = '<h2>Please check you email!</h2>';
            }
            
            


        } else {

            echo 'Error :' .  '<br>' . $conn->error;
        }

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

                            <?php if (!isset($message)): ?>

                                        <h3><i class="fa fa-lock fa-4x"></i></h3>
                                        <h2 class="text-center">Forgot Password?</h2>
                                        <p>You can reset your password here.</p>
                                        <div class="panel-body">

                                            <form id="register-form" role="form" autocomplete="off" class="form" method="post">

                                                <div class="form-group">
                                                    <div class="input-group">
                                                        <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                                        <input id="email" name="email" placeholder="email address" class="form-control"  type="email">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <input name="recover-submit" class="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit">
                                                </div>

                                                <input type="hidden" class="hide" name="token" id="token" value="">
                                            </form>

                                        </div><!-- Body-->                                

                                        <?php echo bin2hex(openssl_random_pseudo_bytes(5));?>

                            <?php else: ?>

                                        <?php echo $message; ?>

                            <?php endif; ?>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <hr>

    <?php include "includes/footer.php";?>

</div> <!-- /.container -->

