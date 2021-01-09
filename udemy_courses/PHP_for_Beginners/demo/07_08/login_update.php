<!-- //https://www.w3schools.com/php/php_includes.asp  -->
<!-- --------------------------------------------------------------- -->
<?php 

require "db_functions.php";
require "db.php";

if (isset($_POST['submit']) && $_POST['submit'] == "update") {

    update_users_data();
}

$title = 'Update';
?>

<!-- --------------------------------------------------------------- -->

<!DOCTYPE html>
<html lang="en">

<?php include 'include/header.php'?>

<body>

<div class="container">
    <br>

    <div class="col-sm-6">
        <h2>Login CRUD - Update</h2>

        <form action="?" method="post">

            <div class="form-group">
            <label for="username">Username</label>
                <input type="text" class="form-control" id="username" name="username">
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" name="password">
            </div>

            <div class="form-group">
                <select name="id" id="">  

                    <?php
                    $results = fetch_users_data();                    
                    create_select_option($results);                    
                    ?>

                </select>
            </div>

            <button type="submit" name="submit" value="update" class="btn btn-primary">UPDATE</button>

        </form>

    </div>

</div>    

</body>
</html>