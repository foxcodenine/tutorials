<?php require 'db.php'; ?>
<?php require 'db_functions.php'; ?>

<?php $result = create_users_record(); ?>

<?php $title = 'Create'; ?>

<!-- --------------------------------------------------------------- -->

<!DOCTYPE html>
<html lang="en">

<?php include 'include/header.php'?>

<body>

<div class="container">
    <br>

    <div class="col-sm-6">
        <h2>Login CRUD - Create</h2>
        <form action="?" method="post">

            <div class="form-group">
            <label for="username">Username</label>
                <input type="text" class="form-control" id="username" name="username">
            </div>
            
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" name="password">
            </div>

            <button type="submit" name="submit" value="create" class="btn btn-primary">CREATE</button>

        </form>
    </div>

</div>    

</body>
</html>