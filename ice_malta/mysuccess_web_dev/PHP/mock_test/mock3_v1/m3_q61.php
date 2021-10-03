

<form action="" method="POST">
    <input type="checkbox" name="accept">
    <button type="submit">Submit</button>
</form>

<br>

<?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        
        var_export($_POST);

    } 
?>


