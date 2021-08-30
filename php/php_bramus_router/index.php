<?php
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

