<?php
namespace src\Controller;

use Pusher\Pusher;
use src\Model\Database;
use src\Model\Mailer;
use src\Model\State;

// _____________________________________________________________________

class Controller {

    public static function start() {


        self::retriveBackgroundColor();
        State::setDefaultDate();
        
        if($_SERVER['REQUEST_METHOD'] === 'POST' ) {
            
            self::validateFields();
            self::stickyFields();
            self::updateBackgroundColor();
        
            if (self::allFieldsValid()){     
                
                self::setEmailMassage ();
                $code = uniqid(); 
                Mailer::send($code); 
                self::saveCode($code);
                self::saveData($code);
                State::clear();
                State::setDefaultDate();   
                
                header("location: http://{$_SERVER['SERVER_NAME']}/ice_malta/php/lesson_11/index.php");
                
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

    public static function dateArrange($string) {
        preg_match('/(^\d\d)\/(\d\d)\/(\d\d\d\d$)/', $string, $a);
        return "{$a[3]}-{$a[2]}-{$a[1]}";
    }
    // _________________________________________________________________

    public static function validateFields() {


        $checkIn = $_POST['checkIn'];
        $checkOut = $_POST['checkOut'];

        $checkIn = self::dateArrange($checkIn);
        $checkOut = self::dateArrange($checkOut);
        
        if(isset($_POST['submitBtn']) && ($_POST['submitBtn']) === 'submitted') {
            
            State::$validateFirstname = trim($_POST['firstname']) !== '' ? '' : 'firstname is required!';
            State::$validateLastname = trim($_POST['lastname']) !== '' ? '' : 'lastname is required!';            
            State::$validateEmail  = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ? '' : 'email is invalid!';
            State::$validateEmail = trim($_POST['email']) !== '' ? State::$validateEmail : 'email is required!';
            
            if ($checkIn !== '' && $checkOut !== '') {
                State::$validateCheckIn = State::$validateCheckOut = $checkIn < $checkOut ? '' : 'Invalid Dates!';
            }

            State::$validateCheckIn = $checkIn >= date('Y-m-d') ? State::$validateCheckIn : 'Invalid Date!';

            State::$validateCheckIn = $checkIn !== '' ? State::$validateCheckIn : 'select check in  date!';
            State::$validateCheckOut = $checkOut !== '' ? State::$validateCheckOut : 'select check out date!';             
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
        } 
        return null;
    }

    // _________________________________________________________________

    public static function setEmailMassage () {


        $email = State::$email;
        
        $message = "An Email has been sent at {$email}, please check your inbox or span folder!";

        setcookie(
            'icemalta_php_lesson_11_email',
            "{$message}",
            time() + 60, 
            "/"
        );

    }
    // _________________________________________________________________

    public static function saveData($code) {
            Database::insertRecord(
                $code, State::$firstname, State::$lastname, State::$email, 
                self::dateArrange(State::$checkIn), self::dateArrange(State::$checkOut), State::$adults, 
                State::$children, State::$rooms
            );
        }    
}
