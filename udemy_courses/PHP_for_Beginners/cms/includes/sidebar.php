<div class="col-md-4">

    <!-- Blog Search Well -->
    <div class="well">
        <h4>Blog Search</h4>

        <form action="search.php" method="POST">
        <div class="input-group">
            <input name="search" type="text" class="form-control">
            <span class="input-group-btn">
                <button class="btn btn-default" type="submit">
                    <span class="glyphicon glyphicon-search"></span>
            </button>
            </span>
        </div>
        </form>  

    </div>

    <!-- Blog Categories Well -->
    <div class="well">
        <h4>Blog Categories</h4>
        <div class="row">
            <div class="col-lg-12">
                <ul class="list-unstyled">

                    <?php

                    $sql = "SELECT * FROM cms_categories LIMIT 10;";
                    $categories = $conn->query($sql);

                    if(isset($categories) && $categories->num_rows > 0) {

                        

                        while($row = mysqli_fetch_assoc($categories)) {
                            $cat_id = $row['cat_id'];
                            $cat_title = $row['cat_title'];

                            echo "<li><a href='category.php?c_id={$cat_id}'>{$cat_title}</a>";
                        }
                    }
                    ?>  
                </ul>
            </div>
            <!-- /.col-lg-6 -->
            <!-- <div class="col-lg-6">
                <ul class="list-unstyled">
                    <li><a href="#">Category Name</a>
                    </li>
                    <li><a href="#">Category Name</a>
                    </li>
                    <li><a href="#">Category Name</a>
                    </li>
                    <li><a href="#">Category Name</a>
                    </li>
                </ul>
            </div> -->
            <!-- /.col-lg-6 -->
        </div>
        <!-- /.row -->
    </div>
    <?php include 'widget.php' ?>
    <!-- Side Widget Well -->


</div>