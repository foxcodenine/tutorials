<?php admin_add_user();?>



<?php
$current_user_id = $_GET['u_id'];

$form_action = $_SERVER['PHP_SELF'] . "?source=edit_user&u_id={$current_user_id }"; 

$sql = "SELECT * FROM cms_users WHERE user_id = {$current_user_id}";

$result = $conn->query($sql);

if ($conn->error) {
    die('Error: ' . '<br>') . $conn->error;
}

while($row = $result->fetch_assoc()) {
    $user_firstname = $row['user_firstname'];
    $user_lastname = $row['user_lastname'];
    $user_role = $row['user_role'];
    $user_username = $row['user_username'];
    $user_email = $row['user_email'];
    $user_password = $row['user_password'];
    $user_date = $row['user_date'];
}


if (isset($_POST['edit_user'])) {

    $user_firstname =   $_POST['user_firstname'];
    $user_lastname =    $_POST['user_lastname'];
    $user_role =        $_POST['user_role'];
    $user_username =    $_POST['user_username'];
    $user_email =       $_POST['user_email'];
    // $user_password =    $_POST['user_password'];
    $user_date =        $_POST['user_date'];

    $sql = "UPDATE cms_users SET 
            user_firstname = '{$user_firstname}',
            user_lastname = '{$user_lastname}',
            user_role = '{$user_role}',
            user_username = '{$user_username}',
            user_email = '{$user_email}',
            # user_password = '{$user_password}',
            user_date = '{$user_date}'
            
            WHERE user_id = '{$current_user_id}'";

    $conn->query($sql);

    if ($conn->error) {
        die('Error: ' . '<br>' . $conn->error);
    } else {
        header('Location: '. $_SERVER['PHP_SELF']);
    }
}

?>

<h2>Edit User</h2>

<form action="<?php echo $form_action ?>" method="post" enctype="multipart/form-data">

    <div class="form-group">
        <label for="user_firstname">Firstname</label>
        <input type="text" class="form-control" name="user_firstname" value="<?php echo $user_firstname;?>">
    </div>

    <div class="form-group">
        <label for="user_lastname">Lastname</label>
        <input type="text" class="form-control" name="user_lastname" value="<?php echo $user_lastname;?>">
    </div>

    <div class="form-group">
        <label for="user_role">User Role</label>

        <select class="form-control" name="user_role" id="">

<!-- --------------------------------------------------------------- -->
        <?php
            // $sql = "SELECT * FROM cms_categories;";

            // $result = $conn->query($sql);
            
            // if($result != TRUE) {
            //     die('Error:' . '<br>' . $conn->error);
            // }

            // while ($row = $result->fetch_assoc()) {            
            //     echo "<option  value='{$row['cat_id']}'>{$row['cat_title']}</option>";
            // }
            $roles = ['Admin', 'Subscriber'];
            
            foreach ($roles as $role) {               

                if ($role == $user_role) {
                    echo "<option selected value='{$role}'>{$role}</option>";
                } else {
                    echo "<option  value='{$role}'>{$role}</option>";
                }
                
            }

        ?>
<!-- --------------------------------------------------------------- -->
    </select>
    </div>



    <div class="form-group">
        <label for="user_username">Username</label>
        <input type="text" class="form-control" name="user_username" value="<?php echo $user_username;?>">
    </div>

    <div class="form-group">
        <label for="user_email">Email</label>
        <input type="text" class="form-control" name="user_email" value="<?php echo $user_email;?>">
    </div>



    <!-- <div class="form-group">
        <label for="user_password">Password</label>
        <input type="password" class="form-control" name="user_password" value="<?php echo $user_password;?>">
    </div> -->

    <div class="form-group">
        <label for="user_date">Date</label>
        <input type="date" class="form-control" name="user_date" value="<?php echo $user_date;?>">
    </div>


    <div class="form-group">
        <input type="submit" class="btn btn-primary" name="edit_user" value="Update User">
    </div>

</form>