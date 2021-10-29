<?php
session_start();
require_once __DIR__ . '/vendor/autoload.php';
use Bramus\Router\Router;
use Dotenv\Dotenv;

// ----- Create Router instance ----------------------------------------
$router = new Router;
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();


// ----- Define routes -------------------------------------------------

$router->match('GET', '/', function() {
    $GLOBALS['endpoint']  = 'home'; 
    include './views/home.php';
    
    exit;

});

$router->match('GET', '/about', function() {
    $GLOBALS['endpoint']  = 'about'; 
    include './views/about.php';
    exit;

});

$router->match('GET', '/team', function() {
    $GLOBALS['endpoint']  = 'team'; 
    include './views/team.php';
    exit;

});


$router->match('GET|POST', '/contact', function() {
    $GLOBALS['endpoint']  = 'contact'; 

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        
        $_SESSION['name']       = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
        $_SESSION['email']      = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
        $_SESSION['subject']    = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
        $_SESSION['message']    = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

        if (
            $_SESSION['name'] && $_SESSION['email'] && $_SESSION['subject'] && $_SESSION['message']
        ) {$_SESSION['contentSent'] = TRUE;} else {
            $_SESSION['contentSent'] = FALSE;
        }

        header('location: ' . $_ENV['BASE_URL'] . '/contact');
    }
    $contentSent = $_SESSION['contentSent'] ?? FALSE;

    include './views/contact.php';
    exit;

});

$router->match('GET', '/member/{$id}', function($id) {
    $GLOBALS['endpoint'] = 'members';
    include './views/member.php';
    exit;
});


// ----- Run it! -------------------------------------------------------
$router->run();

header('location: ' . $_ENV['BASE_URL'])  . '/';

// ---------------------------------------------------------------------

