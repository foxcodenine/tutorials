<?php

    // ----- select category to edit/update
    $edit_cat = edit_select_cat();

    // ----- edit/update category 
    edit_update_cat();

?>

<form action="categories.php" method="POST">
    <div class="form-group">
    <label for="cat-title">Update Categories</label>

        <input class="form-control" type="text" name="new_cat_title"
            <?php if (isset($edit_cat)) {echo "value='{$edit_cat['cat_title']}'"; } ?>                                
        >

        <input class="form-control" type="hidden" name="new_cat_id" 
            <?php if (isset($edit_cat)) {echo "value='{$edit_cat['cat_id']}'"; } ?>                                
        >

    </div>
    <div class="form-group">
        <input class="btn btn-primary" type="submit" name="update" value="Update">
    </div>
</form>