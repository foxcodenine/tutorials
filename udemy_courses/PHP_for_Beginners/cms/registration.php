<!DOCTYPE html>
<html lang="en">

<?php  include "includes/header.php"; ?>

<?php 

include "includes/db.php"; 
include "./functions.php"; 


?>

<?php // pusher setup:

require_once "./my_packages.php";


$app_id = $_ENV['PUSHER_APP_ID'];
$app_key = $_ENV['PUSHER_KEY'];
$app_secret = $_ENV['PUSHER_SECRET'];
$app_cluster = $_ENV['PUSHER_CLUSTER'];

$options = array(
    'cluster' => $app_cluster,
    'useTLS' => true
  );
  $pusher = new Pusher\Pusher($app_key, $app_secret, $app_id, $options);

?>




<?php 

$message = '<br>';

if (isset($_POST['submit_reg'])) {



    $email_reg    = escape($_POST['email_reg']);    
    $username_reg = escape($_POST['username_reg']);
    $password_reg = escape($_POST['password_reg']);
    
    
    $errors = [
        'username' => '',
        'email' => '',
        'password' => ''
    ];


    if (user_exists($username_reg)) {
        $errors['username'] = 'Username has already been taken';
    }
    if (strlen($username_reg) < 4) {
        $errors['username'] = 'Usernames must be at least 4 characters long';
    }
    if (empty($username_reg)) {
        $errors['username'] = 'Username cannot be empty';
    }

    if (email_exists($email_reg)) {
        $errors['email'] = 'Email address already exists, <a href="index.php">Please login</a>';
    }
    if ($email_reg && !filter_var($email_reg, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Invalid email format';
    }
    if (empty($email_reg)) {
        $errors['email'] = 'Email cannot be empty';
    }


    if (empty($password_reg)) {
        $errors['password'] = 'Password cannot be empty';
    }   
    
    

    foreach ($errors as $key => $value) {
        if(empty($value)) {
            unset($errors[$key]);
        }
    }

    if(empty($errors)) {
        register_user($username_reg, $email_reg, $password_reg);  
        
        $data['message'] = "{$username_reg} has registered!";
        $pusher->trigger('channel-notifications', 'new_user', $data);

        loggin_user($username_reg, $password_reg);       
    }
}


?>

<!-- --------------------------------------------------------------- -->


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
                        <p class="text-danger"><?php echo isset($errors['username']) ? $errors['username'] : ''; ?></p>
                            <label for="username" class="sr-only">username</label>
                            <input type="text" name="username_reg" id="username" class="form-control" placeholder="Enter Desired Username"
                            autocomplete="on"
                            value="<?php echo isset($username_reg) ? $username_reg : '' ; ?>">
                        </div>
                        
                        
                        <div class="form-group">
                        <p class="text-danger"><?php echo isset($errors['email']) ? $errors['email'] : ''; ?></p>
                            <label for="email" class="sr-only">Email</label>
                            <input type="email" name="email_reg" id="email" class="form-control" placeholder="somebody@example.com"
                            autocomplete="on"
                            value="<?php echo isset($email_reg) ? $email_reg : '' ; ?>">
                        </div>

                        
                        <div class="form-group">
                        <p class="text-danger"><?php echo isset($errors['password']) ? $errors['password'] : ''; ?></p>
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