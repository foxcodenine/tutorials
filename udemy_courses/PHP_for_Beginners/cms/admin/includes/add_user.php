<?php admin_add_user();?>

<h2>Add User</h2>

<form action="<?php echo $_SERVER['PHP_SELF'] . '?source=add_user' ?>" method="post" enctype="multipart/form-data">

    <div class="form-group">
        <label for="user_firstname">Firstname</label>
        <input type="text" class="form-control" name="user_firstname">
    </div>

    <div class="form-group">
        <label for="user_lastname">Lastname</label>
        <input type="text" class="form-control" name="user_lastname">
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
                echo "<option  value='{$role}'>{$role}</option>";
            }





        ?>
<!-- --------------------------------------------------------------- -->
    </select>
    </div>



    <div class="form-group">
        <label for="user_username">Username</label>
        <input type="text" class="form-control" name="user_username">
    </div>

    <div class="form-group">
        <label for="user_email">Email</label>
        <input type="text" class="form-control" name="user_email">
    </div>

    <!-- <div class="form-group">
        <label for="post_image">Post Image</label>
        <input type="file" name="post_image">
    </div> -->

    <div class="form-group">
        <label for="user_password">Password</label>
        <input type="text" class="form-control" name="user_password">
    </div>

    <div class="form-group">
        <label for="user_date">Date</label>
        <input type="date" class="form-control" name="user_date">
    </div>

    <!-- <div class="form-group">
        <label for="post_tags">Post Tags</label>
        <input type="text" class="form-control" name="post_tags">
    </div>

    <div class="form-group">
        <label for="post_content">Post Content</label>
        <textarea class="form-control" name="post_content" id="" cols="30" rows="10"></textarea>
    </div> -->



    <div class="form-group">
        <input type="submit" class="btn btn-primary" name="create_user" value="Add user">
    </div>

</form>