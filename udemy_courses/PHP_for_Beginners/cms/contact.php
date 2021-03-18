
<!-- --------------------------------------------------------------- -->

<!DOCTYPE html>
<html lang="en">

<?php  include "includes/db.php"; ?>
<?php  include "./functions.php"; ?>
<?php  include "includes/header.php"; ?>
<?php $message = '<br>'; ?>

<body>
<?php  include "includes/navigation.php"; ?>


<!-- --------------------------------------------------------------- -->
<?php 


//______________________________________________________________________
// // the message
// $msg = "First line of text\nSecond line of text";

// // use wordwrap() if lines are longer than 70 characters
// $msg = wordwrap($msg,70);

// // send email
// mail("chris12aug@yahoo.com","My subject",$msg);
//______________________________________________________________________
require_once './email_function.php';

//______________________________________________________________________


if (isset($_POST['submit_contact'])) {


    $email_contact = escape($_POST['email_contact']);
    $subject_contact = escape($_POST['subject_contact']);
    $body_contact = escape($_POST['body_contact']);
    $to = "chris12aug@yahoo.com";

    send_this_mail('chris12aug@yahoo.com', $email_contact, $subject_contact, $body_contact);
}


?>

<!-- --------------------------------------------------------------- -->


<!-- Page Content -->
<div class="container" style="margin-top:10vh">
    
<section id="login">
    <div class="container">
        <div class="row">
            <div class="col-xs-6 col-xs-offset-3">
                <div class="form-wrap">
                <h1>Conteeeeeact</h1>
                    <?php echo $message;?>
                    <form role="form" action="contact.php" method="post" id="login-form" autocomplete="off">

                        <!-- <div class="form-group">
                            <label for="username" class="sr-only">username</label>
                            <input type="text" name="username_reg" id="username" class="form-control" placeholder="Enter Desired Username">
                        </div> -->
                        
                         <div class="form-group">
                            <label for="email_contact" class="sr-only">Email</label>
                            <input type="email" name="email_contact" id="email_contact" class="form-control" placeholder="Enter email address">
                        </div>

                        <div class="form-group">
                            <label for="subject_contact" class="sr-only">Subject</label>
                            <input type="text" name="subject_contact" id="subject_contact" class="form-control" placeholder="Enter email subject">
                        </div>

                        <div class="form-group">
                            <textarea name="body_contact" id="body_contact" class="form-control" cols="30" rows="10"></textarea>
                        </div>
                
                        <input type="submit" name="submit_contact" id="btn-login" class="btn btn-custom btn-lg btn-block" value="Submit">
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