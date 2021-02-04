<!-- --------------------------------------------------------------- -->
<?php

// ---- Fetch all post from database and return

        $sql = "SELECT * FROM cms_users;";
        $result_users = $conn->query($sql);
?>
<!-- --------------------------------------------------------------- -->

<?php 
// ---- Delete post

        if (isset($_GET['delete']) && trim($_GET['delete']) !== '') {




            // _________________________________________________________
            
            // Deleting record from database 
            $sql = "DELETE FROM cms_users WHERE user_id = {$_GET['delete']}";

 
            if ($conn->query($sql) !== TRUE) {
                
                die("Error deleting record: " . $conn->error); 

            } else {

            // Deleting image file and refresh page
            // unlink($image_path);
            header('Location: '. $_SERVER['PHP_SELF']);
            
            }

        }

?>

<!-- --------------------------------------------------------------- -->

<?php
        if (isset($_GET['Admin']) || isset($_GET['Subscriber'])) {

            $role = "";

            if (isset($_GET['Admin'])) {
                $role = "Admin";
            } else {
                $role = "Subscriber";
            }

            $sql = "UPDATE cms_users SET user_role = '{$role}' WHERE user_id = {$_GET[$role]};";


            if ($conn->query($sql) != TRUE) {
                die('Errer: '. '<br>' . $conn->error);
            } else {
                header('Location: '. $_SERVER['PHP_SELF']);
            }

        }

?>

<!-- --------------------------------------------------------------- -->

<table class="table table-bordered table-hover">
    <thead >
        <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Fistname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Role</th>      
        </tr>
    </thead>
    <tbody>

    <?php
        while ($row = $result_users->fetch_assoc()) {        

            $user_id = $row['user_id'];
            $user_username = $row['user_username'];
            $user_password = $row['user_password'];
            $user_firstname = $row['user_firstname'];
            $user_lastname = $row['user_lastname'];
            $user_email = $row['user_email'];
            $user_image = $row['user_image'];
            $user_role = $row['user_role'];
            $user_date = $row['user_date'];
            $user_randsalt = $row['user_randsalt'];



            echo "<tr>";
            echo "<td>{$user_id}</td>";
            echo "<td>{$user_username}</td>";
            echo "<td>{$user_firstname}</td>";
            echo "<td>{$user_lastname}</td>";
            echo "<td>{$user_email}</td>";
            echo "<td>{$user_role}</td>";            
        

            echo "<td><a href='{$_SERVER['PHP_SELF']}?Admin={$user_id}'>Admin</a></td>";
            echo "<td><a href='{$_SERVER['PHP_SELF']}?Subscriber={$user_id}'>Subscriber</a></td>";
            echo "<td><a href='{$_SERVER['PHP_SELF']}?source=edit_user&u_id={$user_id}'>Edite</a></td>";
            echo "<td><a href='{$_SERVER['PHP_SELF']}?delete={$user_id}'>Delete</a></td>";

     
            echo "</tr>";
        }
    ?>

    </tbody>
    
</table>