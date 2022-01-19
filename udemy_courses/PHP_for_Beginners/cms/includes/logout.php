<?php ob_start(); ?>
<?php session_start(); ?>

<?php 


echo '<h1>' .  $_SESSION['username'] . '</h1>';

// $_SESSION['user_id'] = null;
// $_SESSION['username'] = null;
// $_SESSION['password'] = null;
// $_SESSION['email'] = null;
// $_SESSION['firstname'] =null;
// $_SESSION['lastname'] = null;
// $_SESSION['role'] = null;

$_SESSION = [];
session_unset();
session_destroy();
setcookie(session_name(),'', time() - 3600, '/');

header('Location: ../index.php');

?>