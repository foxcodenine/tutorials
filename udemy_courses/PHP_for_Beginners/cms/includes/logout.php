<?php ob_start(); ?>
<?php session_start(); ?>

<?php 


echo '<h1>' .  $_SESSION['username'] . '</h1>';

$_SESSION['username'] = null;
$_SESSION['password'] = null;
$_SESSION['email'] = null;
$_SESSION['firstname'] =null;
$_SESSION['lastname'] = null;
$_SESSION['role'] = null;

header('Location: ../index.php');

?>