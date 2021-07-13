<?php

$firstRun = true;
$showForm = true;

if (isset($_GET['username']) && isset($_GET['code'])) {
    $user = $_GET['username'];

    $user = $_GET['username'];
    $code = $_GET['code'];
    $firstRun = false;

} else {
    $user = '';
    $code = '';
}

if ($code == '123') {
    $showForm = false;
    echo "Welcome, {$user}!";
}

if ($showForm) {
?>



<form action="<?php echo $_SERVER['PHP_SELF']?>" method="GET">
    Enter Username:
    <input type="text" name="username" value="<?php echo $user ?>">
    <br>
    Enter Code:
    <input type="text" name="code" value="<?php echo $code ?>"
     style="<?php echo $firstRun ? '' : 'background-color:red;' ?>"
    >
    <br>
    <input type="submit" name="run">
</form>

<?php }; ?>