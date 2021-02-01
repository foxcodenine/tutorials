<!-- --------------------------------------------------------------- -->
<?php

// ---- Fetch all post from database and return

        $sql = "SELECT * FROM cms_comments;";
        $result_post = $conn->query($sql);
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
            <th>Author</th>
            <th>Comment</th>
            <th>Email</th>
            <th>Status</th>
            <th>in Response to</th>
            <th>Date</th>
            <th>Approve</th>
            <th>Unapprove</th>
            <th>Edit</th>
            <th>Delete</th>         
        </tr>
    </thead>
    <tbody>

    <?php
        while ($row = mysqli_fetch_assoc($result_post)) {        

            $comm_id = $row['comm_id'];
            $comm_author = $row['comm_author'];
            $comm_content = substr($row['comm_content'], 0, 20) . '...';
            $comm_email = $row['comm_email'];
            $comm_status = $row['comm_status'];
            $comm_post_id = $row['comm_post_id'];
            $comm_date = $row['comm_date'];




            echo "<tr>";
            echo "<td>{$comm_id}</td>";
            echo "<td>{$comm_author}</td>";
            echo "<td>{$comm_content}</td>";
            echo "<td>{$comm_email}</td>";
            echo "<td>{$comm_status}</td>";            

            // _________________________________________________________________

            // displaying post title

            

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

            echo "<td>{$comm_date}</td>";
            echo "<td><a href='{$_SERVER['PHP_SELF']}?approve={$comm_id}'>Approve</a></td>";
            echo "<td><a href='{$_SERVER['PHP_SELF']}?unapprove={$comm_id}'>Unapprove</a></td>";
            echo "<td><a href='#'>Edite</a></td>";
            echo "<td><a href='{$_SERVER['PHP_SELF']}?delete={$comm_id}'>Delete</a></td>";



        }
    ?>

    </tbody>
    
</table>