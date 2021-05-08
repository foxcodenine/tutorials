<?php 

$form_action = $_SERVER['PHP_SELF'] . "?source=edit_post&p_id={$_GET['p_id']}"; 

?>

<!-- --------------------------------------------------------------- -->
<?php 
// Populating form with database data

$post_title = '';
$post_cat_id = '';
$post_author = '';
$post_statas = '';
$post_image= '';
$post_tags= '';
$post_content= '';

$sql = "SELECT * FROM cms_posts WHERE post_id={$_GET['p_id']};";

$result = $conn->query($sql);
$current_user;


if ($result != True) {
    die('Error: ' . '<br>' . $conn->error);

} elseif ($result->num_rows < 1) {
    die('No data');
} else {
    $row = $result->fetch_assoc();

    $current_user = $row;

    $post_title = $row["post_title"];
    $post_cat_id = $row["post_cat_id"];
    $post_author = $row["post_author"];
    $post_statas = $row["post_statas"];
    $post_image= $row["post_image"];
    $post_tags= $row["post_tags"];
    $post_content= $row["post_content"];
    
}
?>

<!-- --------------------------------------------------------------- -->

<?php
// Updating changes data

if (isset($_POST['update_post'])) {

    $post_title = escape($_POST['post_title']);    
    $post_author = escape($_POST['post_author']);
    $post_cat_id = escape($_POST['post_category_id']);
    $post_statas = escape($_POST['post_statas']);

    $post_image_new = escape($_FILES['post_image_new']['name']);
    $post_image_temp_new = escape($_FILES['post_image_new']['tmp_name']);

    $post_tags = escape($_POST['post_tags']);
    $post_content = escape($_POST['post_content']);   


    $sql  = "UPDATE cms_posts SET ";
    $sql .= "post_title     = '{$post_title}', ";
    
    if (!isset($post_author) || empty($post_author)) {
        $post_author = $current_user["post_author"];
        $sql .= "post_author     = '{$post_author}', ";
    } else {
        $sql .= "post_author     = '{$post_author}', ";
    }
    
    $sql .= "post_cat_id    = {$post_cat_id}, ";
    $sql .= "post_date      =  now() , ";
    $sql .= "post_statas    = '{$post_statas}', ";
    $sql .= "post_tags      = '{$post_tags}', ";    
    
    if (trim($post_image_new) !== '') { 

        move_uploaded_file($post_image_temp_new, "../images/{$post_image_new}");


        // deleteing current image from folder
        $current_image_name = explode('/', $post_image);
        $current_image_name = end($current_image_name);
        $current_image_path = dirname(dirname(__DIR__)) . "/images/{$current_image_name}" ;
        unlink($current_image_path);



        $sql .= "post_image = 'http://localhost/htdocs/cms/images/{$post_image_new}', ";    
    } 

    $sql .= "post_content   = '{$post_content}'";
    $sql .= "WHERE post_id = {$_GET['p_id']};";


    if ($result = $conn->query($sql) != TRUE) {
        die('Error: ' . '<br>' .  $conn-> error);
    } else {
        echo "
        <p class='bg-success'>Post updated! &nbsp 
            <a href='../post.php?p_id={$_GET['p_id']}'>View Post</a>
            or
            <a href='./post.php'>Edit More Post</a>
        </p>
        ";
        // header('Location: '. $_SERVER['PHP_SELF']);
    }
}

?>



<!-- --------------------------------------------------------------- -->

<h2>Edit Post</h2>


<form action="<?php echo $form_action ?>" method="post" enctype="multipart/form-data">


<div class="form-group">
    <label for="post_title">Post post_title</label>
    <input <?php echo "value='{$post_title}'"; ?>  type="text" class="form-control" name="post_title">
</div>

<div class="form-group">
    <label for="post_category_id">Post Category Id</label>
    <!-- <input  type="text" class="form-control" name="post_category_id"> -->

    <select class="form-control" name="post_category_id" id="">

<!-- --------------------------------------------------------------- -->
        <?php
            $sql = "SELECT * FROM cms_categories;";

            $result = $conn->query($sql);
            
            if($result != TRUE) {
                die('Error:' . '<br>' . $conn->error);
            }

            while ($row = $result->fetch_assoc()) {            

                if($post_cat_id === $row['cat_id']) {                    
                    echo "<option selected value='{$row['cat_id']}'>{$row['cat_title']}</option>";
                } else {
                    echo "<option  value='{$row['cat_id']}'>{$row['cat_title']}</option>";
                }
            }
        ?>
<!-- --------------------------------------------------------------- -->
    </select>
</div>

<div class="form-group">
    <label for="post_author">Post Author</label>
    <input <?php echo "placeholder='{$post_author}'"; ?> list=authors_users type="text" class="form-control" name="post_author">
    <datalist  id="authors_users">        
        <?php 
        $sql = "SELECT * FROM cms_users;";
        $result = $conn->query($sql);            
        if($conn->error) {
            die('Error:' . '<br>' . $conn->error);
        }
        while ($row = $result->fetch_assoc()) {            
            echo "<option>{$row['user_username']}</option>";
            
        }
        ?>
    </datalist>

</div>

<div class="form-group">
    <label for="post_statas">Post Statas</label>
    <select name="post_statas" class="form-control" >
    <?php 
        if($post_statas === 'draft') {
            echo '<option Selected value="draft">Draft</option>';
            echo '<option  value="published">Publish</option>';
        } else {
            echo '<option  value="draft">Draft</option>';
            echo '<option Selected value="published">Publish</option>';
        }
    ?>   
   
        
    </select>

</div>




<div class="form-group">
    <label for="post_image">Post Image</label><br>
    
    <img 
        width="100" alt="" name=post_image
        src="<?php echo $post_image;?>"             
    >

    <br><br>
    <input type="file" name="post_image_new">
    
</div>


<div class="form-group">
    <label for="post_tags">Post Tags</label>
    <input <?php echo "value='{$post_tags}'"; ?> type="text" class="form-control" name="post_tags">
</div>

<div class="form-group">
    <label for="post_content">Post Content</label>
    <textarea  class="form-control" name="post_content" 
        id="editor_body" cols="30" rows="10"><?php echo  str_replace('\\', '|', $post_content); ?></textarea>
</div>



<div class="form-group">
    <input type="submit" class="btn btn-primary" name="update_post" value="Update Post">
</div>

</form>