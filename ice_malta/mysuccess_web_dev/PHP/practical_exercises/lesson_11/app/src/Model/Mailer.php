<?php
namespace src\Model;

use PHPMailer\PHPMailer\PHPMailer;

class Mailer {


    public static function send($code) {
        $mail = new PHPMailer(true);

        try {
        // Server settings
        $mail->isSMTP();                                            
        $mail->Host       = "sxb1plzcpnl453528.prod.sxb1.secureserver.net";                     
        $mail->SMTPAuth   = true;                                   
        $mail->Username   = "no_reply@foxcodes.co";           
        $mail->Password   = $_ENV['PUSHER_SECRET'];                              
        $mail->SMTPSecure = 'ssl';         
        $mail->Port       = 465;                                    

        //Recipients
        $mail->setFrom('no_reply@foxcodes.co', 'Chris Farrugia');
        $mail->addAddress($_POST['email'], 'Recipient Name'); 

        //Content
        $mail->isHTML(true);                                  
        $mail->CharSet = 'UTF-8';
        $mail->Subject = 'PHP-Icelandic Turf House';
        $mail->Body    =  self::body($code);
        $mail->AltBody =  self::body($code);


        $mail->send();

        } catch (\Exception $e) {
            throw "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }

    public static function body($code) {

        

        return <<< END
        Hi {$_POST['firstname']},<br>just click 
        <a href="http://foxcodes.co/ice_malta/php/lesson_11/index.php?complete={$code}">here</a> 
        and your be on your way to Iclandic Adventure!
        <br>
        <br>        
        ...or copy the following address to your browser:
        <br>
        <br>
        foxcodes.co/ice_malta/php/lesson_11/index.php?complete={$code}
        <br>
        <br>
        This link will expire in 1 hour!  
        END;
    }
}
?>

