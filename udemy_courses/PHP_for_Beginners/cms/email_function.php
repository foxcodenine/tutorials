<?php require_once "./my_packages.php" ?>

<?php
// https://packagist.org/packages/phpmailer/phpmailer
// https://alexwebdevelop.com/phpmailer-tutorial/


// Message could not be sent.Error: SMTP connect() failed.
// https://github.com/PHPMailer/PHPMailer/issues/1674

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function



use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;



function send_this_mail($to, $from, $subject, $body) {
    

    //Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);
    try {
        // Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      
        $mail->isSMTP();                                            
        $mail->Host       = $_ENV['EMAIL_HOST'];                     
        $mail->SMTPAuth   = true;                                   
        $mail->Username   = $_ENV['EMAIL_ADDRESS'];                     
        $mail->Password   = $_ENV['EMAIL_PASSWORD'];                              
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         
        $mail->Port       = 587;                                    

        //Recipients
        $mail->setFrom($from, 'PHP CMS');
        $mail->addAddress($to, 'Recipient Name'); 
        // $mail->addAddress('ellen@example.com');               //Name is optional
        // $mail->addReplyTo('info@example.com', 'Information');
        // $mail->addCC('cc@example.com');
        // $mail->addBCC('bcc@example.com');

        // Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
        
        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body    = "<b>From: {$from}</b> <br><br> {$body}";
        $mail->AltBody = $from . ' - ' . $body;

        $mail->send();
        return  "<p class='bg-success'>Message has been sent </p>";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}


?>