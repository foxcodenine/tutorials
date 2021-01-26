<!-- --------------------------------------------------------------- -->
<?php

// ---- Fetch all post from database and return

        $sql = "SELECT * FROM cms_posts;";
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
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Image</th>
            <th>Tags</th>
            <th>Comments</th>
            <th>Date</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>

    <?php
        while ($row = mysqli_fetch_assoc($result_post)) {        

            $post_id = $row['post_id'];
            $post_cat_id = $row['post_cat_id'];
            $post_title = $row['post_title'];
            $post_author = $row['post_author'];
            $post_date = $row['post_date'];
            $post_image = $row['post_image'];
            $post_content = $row['post_content'];
            $post_tags = $row['post_tags'];
            $post_count = $row['post_comments_count'];
            $post_statas = $row['post_statas'];

            echo "<tr>";
            echo "<td>{$post_id}</td>";
            echo "<td>{$post_author}</td>";
            echo "<td>{$post_title}</td>";

            // Fetching category title from  $post_cat_id:

            $sql = "SELECT * FROM cms_categories  WHERE cat_id = $post_cat_id";

            $result = $conn->query($sql);
            $category = $result->fetch_assoc();
            echo "<td>{$category['cat_title']}</td>";

            echo "<td>{$post_statas}</td>";
            echo "<td><img style='width: 200px;' src='{$post_image}'></td>";
            echo "<td>{$post_tags}</td>";
            echo "<td>{$post_count}</td>";
            echo "<td>{$post_date}</td>";
            echo "<td><a href='{$_SERVER['PHP_SELF']}?source=edit_post&p_id={$post_id}'>Edit</a></td>";
            echo "<td><a href='{$_SERVER['PHP_SELF']}?delete={$post_id}'>Delete</a></td>";
            echo "</tr>";
        }
    ?>

    </tbody>
</table>