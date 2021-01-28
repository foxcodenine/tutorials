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

            // ----- getting image path 

            $sql = "SELECT post_image FROM cms_posts WHERE post_id = {$_GET['delete']};";
            $image_object = $conn->query($sql);

            
            if(isset($image_object) && mysqli_num_rows($image_object) > 0) {

                // 1. converting to an url string
                $image_url = $image_object->fetch_assoc()['post_image'];

                // 2. splitting string to array
                $image_array = explode('/', $image_url);

                // 3. selecting image name from array
                echo $image_name = end($image_array);

                echo '<br>';

                // 4. retuning absolute path to image
                echo $image_path = dirname(dirname(__DIR__)) . "/images/{$image_name}";
                
                
            } else {

                die('Error! post_id not found in db');
            }

            // _________________________________________________________
            
            // Deleting record from database 
            $sql = "DELETE FROM cms_posts WHERE post_id = {$_GET['delete']}";

 
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
            echo "<td>{$comm_post_id}</td>";
            echo "<td>{$comm_date}</td>";
            echo "<td><a href='#'>Approve</a></td>";
            echo "<td><a href='#'>Unapprove</a></td>";
            echo "<td><a href='#'>Edite</a></td>";
            echo "<td><a href='#'>Delete</a></td>";



        }
    ?>

    </tbody>
    
</table>