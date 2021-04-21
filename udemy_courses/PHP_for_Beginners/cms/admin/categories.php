<!DOCTYPE html>
<html lang="en">

<?php include './includes/admin_header.php'?>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <?php include './includes/admin_nav.php'?>
<!-- --------------------------------------------------------------- -->

        <div id="page-wrapper">

            <div class="container-fluid">

                <!-- Page Heading -->
                
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                            Welcome To Admin
                            <small>Author Name</small>
                        </h1>

                        <div class="col-xs-6">

                        <?php 
                        // _____________________________________________
                        // ______ Fetch Categories from db

                        $sql = 'SELECT * FROM cms_categories;';
                        $categories = $conn->query($sql);  
                                      
                        // _____________________________________________

                        // ______ Add New Category to database
                        add_cat_to_db();

                        // ______ Deleteing Category
                        delete_cat_from_db();
                        
                        // _____________________________________________  
                        ?>

                        <form action="?" method="POST">
                            <div class="form-group">
                            <label for="cat-title">Add Categories</label>
                                <input class="form-control" type="text" name="cat_title">
                            </div>
                            <div class="form-group">
                                <input class="btn btn-primary" type="submit" name="submit" value="Add Category">
                            </div>
                        </form>

                        <?php 

                        // _____________________________________________
                        // ----- Select category to update/edit
                        // ----- Insert update inputs
                        // ----- Save update to database

                        if (isset($_GET['edit']) || isset($_POST['update'])) {
                            include './includes/edit_categories.php';
                        }
                        // _____________________________________________  

                        ?>

                        </div>

                        <div class="col-xs-6">
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Category Title</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>

                                <?php
                                // _____________________________________ 

                                // echo Categories
                                echo_categories();             
                                // _____________________________________ 
                                ?>

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                <!-- /.row -->

            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- /#page-wrapper -->
<!-- --------------------------------------------------------------- -->
    </div>
    <!-- /#wrapper -->

    <?php require 'includes/admin_scripts.php'; ?>

</body>

</html>
