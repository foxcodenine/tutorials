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
            $sql = "DELETE FROM cms_comments WHERE comm_id = {$_GET['delete']}";

 
            if ($conn->query($sql) !== TRUE) {
                
                die("Error deleting record: " . $conn->error); 

            } else {

            // Deleting image file and refresh page
            unlink($image_path);
            header('Location: '. $_SERVER['PHP_SELF']);
            
            }

        }

?>

<!-- --------------------------------------------------------------- -->

<?php
        if (isset($_GET['approve']) || isset($_GET['unapprove'])) {

            $action = "";

            if (isset($_GET['approve'])) {
                $action = "approve";
            } else {
                $action = "unapprove";
            }

            $sql = "UPDATE cms_comments SET comm_status = '{$action}d' WHERE comm_id = {$_GET[$action]};";


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

            // <th>Id</th>
            // <th>Username</th>
            // <th>Fistname</th>
            // <th>Lastname</th>
            // <th>Email</th>
            // <th>Role</th>
            // <th>Date</th>



            echo "<tr>";
            echo "<td>{$user_id}</td>";
            echo "<td>{$user_username}</td>";
            echo "<td>{$user_firstname}</td>";
            echo "<td>{$user_lastname}</td>";
            echo "<td>{$user_email}</td>";
            echo "<td>{$user_role}</td>";            
        

            // _________________________________________________________________

            // displaying post title

            /*

            $sql =  "SELECT * FROM cms_posts WHERE  post_id = $comm_post_id;";

            $result = $conn->query($sql);

            if ($conn->error) {
                die('Error: <br>' . $conn->error);
            } else {

                $record = $result->fetch_assoc();

                $post_id = $record['post_id'];
                $post_title = $record['post_title'];

                $path = dirname($_SERVER['PHP_SELF'], 2) . '/post.php?p_id=' . $post_id;

                echo "<td><a href='$path'>{$post_title}</a></td>";
            }

            // _________________________________________________________________            
            */
            echo "<td><a href='{$_SERVER['PHP_SELF']}?approve={#}'>Approve</a></td>";
            echo "<td><a href='{$_SERVER['PHP_SELF']}?unapprove={#}'>Unapprove</a></td>";
            echo "<td><a href='#'>Edite</a></td>";
            echo "<td><a href='{$_SERVER['PHP_SELF']}?delete={#}'>Delete</a></td>";

     
            echo "</tr>";
        }
    ?>

    </tbody>
    
</table>