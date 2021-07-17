<?php
namespace src\Controller;

use Pusher\Pusher;
use src\Model\Mailer;
use src\Model\State;

// _____________________________________________________________________

class Controller {

    public static function start() {


        self::retriveBackgroundColor();
        State::setDefaultDate();


        if($_SERVER['REQUEST_METHOD'] === 'POST') {
            
            self::validateFields();
            self::stickyFields();
            self::updateBackgroundColor();
        
            if (self::allFieldsValid()){     

                self::pusherEventEmailSend ();
                $code = uniqid(); 
                Mailer::send($code); 
                self::saveCode($code);
                State::clear();
                State::setDefaultDate();               
            } 
        }
    }

    // _________________________________________________________________

    public static function reset() {
        unset($_POST['submitBtn']);
    }

    // _________________________________________________________________

    public static function allFieldsValid () {
        return (
            trim(State::$validateFirstname) === '' &&
            trim(State::$validateLastname) === '' &&
            trim(State::$validateEmail) === '' &&
            trim(State::$validateCheckIn) === '' &&
            trim(State::$validateCheckOut) === '' 
        );
    }

    // _________________________________________________________________

    public static function validateFields() {

 
        if(isset($_POST['submitBtn']) && ($_POST['submitBtn']) === 'submitted') {
            
            State::$validateFirstname = trim($_POST['firstname']) !== '' ? '' : 'firstname is required!';
            State::$validateLastname = trim($_POST['lastname']) !== '' ? '' : 'lastname is required!';            
            State::$validateEmail  = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ? '' : 'email is invalid!';
            State::$validateEmail = trim($_POST['email']) !== '' ? State::$validateEmail : 'email is required!';
            
            if ($_POST['checkIn'] !== '' && $_POST['checkOut'] !== '') {
                State::$validateCheckIn = State::$validateCheckOut = $_POST['checkIn'] < $_POST['checkOut'] ? '' : 'Invalid Dates!';
            }

            State::$validateCheckIn = $_POST['checkIn'] >= date('Y-m-d') ? State::$validateCheckIn : 'Invalid Date!';

            State::$validateCheckIn = $_POST['checkIn'] !== '' ? State::$validateCheckIn : 'select check in  date!';
            State::$validateCheckOut = $_POST['checkOut'] !== '' ? State::$validateCheckOut : 'select check out date!';             
        }
    }

    // _________________________________________________________________

    public static function stickyFields () {
        
        State::$firstname  = $_POST['firstname']; 
        State::$lastname   = $_POST['lastname']; 
        State::$email      = $_POST['email']; 
        State::$checkIn    = $_POST['checkIn']; 
        State::$checkOut   = $_POST['checkOut'];
        State::$adults     = $_POST['adults'];
        State::$children   = $_POST['children'];
        State::$rooms      = $_POST['rooms'];

        State::$backgroundColor     = $_POST['bgColor'];
    }

    // _________________________________________________________________

    public static function updateBackgroundColor() {
        State::$backgroundColor = $_POST['bgColor'];
        setcookie(
            'icemalta_php_lesson_11_background',
            $_POST['bgColor'],
            time() + (86400 * 30), 
            "/"
        );
    }

    // _________________________________________________________________

    public static function retriveBackgroundColor() {
        if(isset($_COOKIE['icemalta_php_lesson_11_background'])) {
            State::$backgroundColor = $_COOKIE['icemalta_php_lesson_11_background'];
        }
    }

    // _________________________________________________________________
    public static function saveCode($code) {
        
        setcookie(
            'icemalta_php_lesson_11_code',
            "{$code}",
            time() + 6000, 
            "/"
        );
    }

    // _________________________________________________________________

    public static function retriveCode() {
        if(isset($_COOKIE['icemalta_php_lesson_11_code'])) {
            return $_COOKIE['icemalta_php_lesson_11_code'];
        } else {
            return 'nothing to return';
        }
        return 'no cookie';
    }

    // _________________________________________________________________

    public static function pusherEventEmailSend () {

        $options = array(
            'cluster' => $_ENV['PUSHER_CLUSTER'],
            'useTLS' => true
        );
        $pusher = new Pusher(
            $_ENV['PUSHER_KEY'], $_ENV['PUSHER_SECRET'], 
            $_ENV['PUSHER_APP_ID'], $options
        );

        $email = State::$email;
        $channel = 'channelPhpLesson11Practical';
        $event = 'emailSent';
        
        $data['message'] = "An Email has been sent at {$email}, please check your inbox or span folder!";

        $pusher->trigger($channel, $event, $data);
        

    }
    
}
