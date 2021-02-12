<?php admin_add_post();?>

<h2>Add Post</h2>

<form action="<?php echo $_SERVER['PHP_SELF'] . '?source=add_post' ?>" method="post" enctype="multipart/form-data">


    <div class="form-group">
        <label for="post_title">Post Title</label>
        <input type="text" class="form-control" name="post_title">
    </div>

    <div class="form-group">
        <label for="post_category_id">Post Category Id</label>

        <select class="form-control" name="post_category_id" id="">

<!-- --------------------------------------------------------------- -->
        <?php
            $sql = "SELECT * FROM cms_categories;";

            $result = $conn->query($sql);
            
            if($result != TRUE) {
                die('Error:' . '<br>' . $conn->error);
            }

            while ($row = $result->fetch_assoc()) {            
                echo "<option  value='{$row['cat_id']}'>{$row['cat_title']}</option>";
            }
        ?>
<!-- --------------------------------------------------------------- -->
    </select>
    </div>



    <div class="form-group">
        <label for="post_author">Post Author</label>
        <input type="text" class="form-control" name="post_author">
    </div>

    <div class="form-group">
        <label for="post_statas">Post Statas</label>
        <!-- <input type="text" class="form-control" name="post_statas"> -->
        <select name="post_statas" class="form-control" >
            <option value="published">Publish</option>
            <option Selected value="draft">Draft</option>
        </select>

    </div>




    <div class="form-group">
        <label for="post_image">Post Image</label>
        <input type="file" name="post_image">
    </div>


    <div class="form-group">
        <label for="post_tags">Post Tags</label>
        <input type="text" class="form-control" name="post_tags">
    </div>

    <div class="form-group">
        <label for="post_content">Post Content</label>
        <textarea class="form-control" name="post_content" id="" cols="30" rows="10"></textarea>
    </div>



    <div class="form-group">
        <input type="submit" class="btn btn-primary" name="create_post" value="Publish Post">
    </div>

</form>