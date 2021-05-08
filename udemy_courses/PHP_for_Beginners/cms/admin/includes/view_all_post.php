<!-- --------------------------------------------------------------- -->
<?php include 'delete_modal.php'?>
<?php

// ---- Fetch all post from database and return

        // $sql = "SELECT * FROM cms_posts ORDER BY post_id DESC;";
        // $result_post = $conn->query($sql);

        $sql = "
            SELECT  cms_posts.post_id, cms_posts.post_cat_id, cms_posts.post_title, 
                    cms_posts.post_author, cms_posts.post_date, cms_posts.post_image, 
                    cms_posts.post_content, cms_posts.post_tags, cms_posts.post_viewed,
                    cms_categories.cat_title,  
                    cms_posts.post_statas
            FROM cms_posts
            LEFT JOIN cms_categories ON cms_posts.post_cat_id = cms_categories.cat_id
            ORDER BY post_id DESC;
            ";

        $result_post = $conn->query($sql);
        if ($conn->error) {
            die('Error1' . '<br>' . $conn->error);
        }
        
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
                    
                    break;
                case 'reset views':
                    $sql = "UPDATE cms_posts SET post_viewed = 0 WHERE post_id = {$checkboxValue};";                    
  
                    break;
                case 'clone':
                    $sql = "SELECT * FROM cms_posts WHERE post_id = {$checkboxValue};";

                    $result = $conn->query($sql);

                    if($conn->error) {
                        die('Error:' . '<br>' . $conn->error);                    
                    }   
                    $post_array = [];

                    while ($row = $result->fetch_assoc()) {       

                        $post_array = [
                            $row['post_title'], $row['post_author'], 
                            $row['post_cat_id'], $row['post_statas'], 
                            $row['post_image'], $row['post_tags'], 
                            $row['post_content']
                        ];
                    }
                    
                    $sql = clone_project($post_array);
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

        if (isset($_POST['delete_post']) && trim($_POST['delete_post']) !== '') {

            $delete_id =$_POST['delete_post'];

            
            // _________________________________________________________            

            deleting_post_image($delete_id);
            // _________________________________________________________
            
            // Deleting record from database 
            $sql = "DELETE FROM cms_posts WHERE post_id = {$delete_id}";

 
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
            <select id="" class="form-control bulk-options" name="bulk_options">
                <option value="">Select Options</option>
                <option value="published">Publish</option>
                <option value="draft">Draft</option>
                <option value="delete">Delete</option>
                <option value="clone">Clone</option>
                <option value="reset views">Reset view count</option>
            </select>
        </div>
        <div class="col-xs-4">
            <input type="submit" name="submit" value="Apply" class="btn btn-success confirm-delete-all">
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
            <th>Views</th>
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
            $post_views = $row['post_viewed'];
            $cat_title = $row['cat_title'];

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

            // $sql = "SELECT * FROM cms_categories  WHERE cat_id = $post_cat_id";

            // $result = $conn->query($sql);
            // $category = $result->fetch_assoc();
            echo "<td>{$cat_title}</td>";

            

            echo "<td>{$post_statas}</td>";            
            echo "<td><img style='width: 200px;' src='{$post_image}'></td>";
            echo "<td>{$post_tags}</td>";
            echo "<td><a href='comments.php?p_id={$post_id}'>{$post_count}</a></td>";
            echo "<td>{$post_date}</td>";
            echo "<td>{$post_views}</td>";

            $selected_post = dirname(dirname($_SERVER['PHP_SELF'])) . "/post.php?p_id={$post_id}";
            echo "<td><a href='{$selected_post}'>View Post</a></td>"; 
            
            echo "<td><a href='{$_SERVER['PHP_SELF']}?source=edit_post&p_id={$post_id}'>Edit</a></td>";
            // echo "<td><a class='confirm-delete' href='{$_SERVER['PHP_SELF']}?delete={$post_id}'>Delete</a></td>";
            echo "<td><button class='btn confirm-delete-post' type='submit' name='delete_post' value='{$post_id}'>Delete</button></td>";
            echo "";
            echo "</tr>";
        }
    ?>
    
    
    </tbody>
</table>
</form>