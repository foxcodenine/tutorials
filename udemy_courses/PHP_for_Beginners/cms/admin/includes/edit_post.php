<?php 

$form_action = $_SERVER['PHP_SELF'] .'?source=add_post';

$post_title = '';
$post_cat_id = '';
$post_author = '';
$post_statas = '';
$post_image= '';
$post_tags= '';
$post_content= '';

$sql = "SELECT * FROM cms_posts WHERE post_id={$_GET['p_id']};";

$result = $conn->query($sql);


if ($result != True) {
    die('Error: ' . '<br>' . $conn->error);

} elseif ($result->num_rows < 1) {
    die('No data');
} else {
    $row = $result->fetch_assoc();

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

<h2>Edit Post</h2>


<form action="<?php echo $form_action ?>" method="post" enctype="multipart/form-data">


<div class="form-group">
    <label for="post_title">Post post_title</label>
    <input <?php echo "value='{$post_title}'"; ?>  type="text" class="form-control" name="post_title">
</div>

<div class="form-group">
    <label for="post_category_id">Post Category Id</label>
    <input <?php echo "value='{$post_cat_id}'"; ?> type="text" class="form-control" name="post_category_id">
</div>

<div class="form-group">
    <label for="post_author">Post Author</label>
    <input <?php echo "value='{$post_author}'"; ?> type="text" class="form-control" name="post_author">
</div>

<div class="form-group">
    <label for="post_statas">Post Statas</label>
    <input <?php echo "value='{$post_statas}'"; ?> type="text" class="form-control" name="post_statas">
</div>

<div class="form-group">
    <label for="post_image">Post Image</label>
    <input type="file" name="post_image">
</div>


<div class="form-group">
    <label for="post_tags">Post Tags</label>
    <input <?php echo "value='{$post_tags}'"; ?> type="text" class="form-control" name="post_tags">
</div>

<div class="form-group">
    <label for="post_content">Post Content</label>
    <textarea  class="form-control" name="post_content" id="" cols="30" rows="10">
    <?php echo "$post_content"; ?>
    </textarea>
</div>



<div class="form-group">
    <input type="submit" class="btn btn-primary" name="update_post" value="Update Post">
</div>

</form>