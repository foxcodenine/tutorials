<!-- --------------------------------------------------------------- -->
<?php

// ---- Fetch all post from database and return

        $sql = "SELECT * FROM cms_posts;";
        $result_post = $conn->query($sql);
?>
<!-- --------------------------------------------------------------- -->
<?php

if (isset($_POST['checkBoxArray'])) {

    
    $bulk_options = $_POST['bulk_options'];
    foreach($_POST['checkBoxArray'] as $checkboxValue) {     
        
        if (!empty($bulk_options)) {

        
            $sql = '';
            switch ($bulk_options) {
                case 'published':
                    $sql = "UPDATE cms_posts SET post_statas = '{$bulk_options}' 
                            WHERE post_id = {$checkboxValue};";
                    break;
                case 'draft':
                    $sql = "UPDATE cms_posts SET post_statas = '{$bulk_options}' 
                            WHERE post_id = {$checkboxValue};";
                    break;
                case 'delete':
                    $sql = "DELETE FROM cms_posts WHERE post_id = {$checkboxValue};";
                    
                    deleting_post_image($checkboxValue);   
                    break;
            }
            $conn->query($sql);

            if ($conn->error) {
                die('Error: ' . '<br>' . $conn->error);
            }
        }
        header("Location: {$_SERVER['PHP_SELF']}");
    }
}




?>

<!-- --------------------------------------------------------------- -->
<?php 
        // ---- Delete post

        if (isset($_GET['delete']) && trim($_GET['delete']) !== '') {


            // _________________________________________________________

            

            deleting_post_image($_GET['delete']);

            // _________________________________________________________
            
            // Deleting record from database 
            $sql = "DELETE FROM cms_posts WHERE post_id = {$_GET['delete']}";

 
            if ($conn->query($sql) !== TRUE) {
                
                die("Error deleting record: " . $conn->error); 

            } else {

            // Refresh page
            unlink($image_path);
            header('Location: '. $_SERVER['PHP_SELF']);
            
            }

        }

?>

<!-- --------------------------------------------------------------- -->
<form action="?" method="POST">
<table class="table table-bordered table-hover">

        <div class="col-xs-4" id="bulkOptionContaiber">
            <select id="" class="form-control" name="bulk_options">
                <option value="">Select Options</option>
                <option value="published">Publish</option>
                <option value="draft">Draft</option>
                <option value="delete">Delete</option>
            </select>
        </div>
        <div class="col-xs-4">
            <input type="submit" name="submit" value="Apply" class="btn btn-success">
            <a href="post.php?source=add_post" class="btn btn-primary">Add New</a>
        </div>
    <thead >
        <tr>
            <th><input type="checkbox" id="selectAllBoxes"></th>
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

            // ---------------------------------------------------------
            $sql = "SELECT COUNT(*) AS 'count' FROM cms_comments WHERE comm_post_id = {$post_id}";
            $result = $conn->query($sql);

            if ($conn->error) {
                die('Error' . '<br>' . $conn->error);
            }

            $record = $result->fetch_assoc();            
            $post_count = $record['count'];

            // ---------------------------------------------------------
            
            $post_statas = $row['post_statas'];

            echo "<tr>";

            echo "<td><input type='checkbox' class='checkbox' name='checkBoxArray[]' value='{$post_id}'></td>";

            echo "<td>{$post_id}</td>";
            echo "<td>{$post_author}</td>";
            echo "<td><a href='../post.php?p_id={$post_id}'>{$post_title}</a></td>";

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

            $selected_post = dirname(dirname($_SERVER['PHP_SELF'])) . "/post.php?p_id={$post_id}";
            echo "<td><a href='{$selected_post}'>View Post</a></td>"; 
            
            echo "<td><a href='{$_SERVER['PHP_SELF']}?source=edit_post&p_id={$post_id}'>Edit</a></td>";
            echo "<td><a href='{$_SERVER['PHP_SELF']}?delete={$post_id}'>Delete</a></td>";
            echo "</tr>";
        }
    ?>
    
    </tbody>
</table>
</form>