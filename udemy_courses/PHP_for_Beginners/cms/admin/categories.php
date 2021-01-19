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
                        ?>
                        <?php 
                        // _____________________________________________
                        // ______ New Add Categories

                        if (isset($_POST['submit'])) {

                            $cat_name_title = $_POST['cat_title'];
                            
                            if (trim($cat_name_title) === '' || empty($cat_name_title)) {

                                echo '<h5 style="color: crimson;">This field should not be empty! </h5>';

                            } else {    

                                $sql = "INSERT INTO cms_categories (cat_title) VALUES ('{$cat_name_title}');";

                                if ($conn->query($sql) !== TRUE) {
                                    echo "Error: " . "<br>" . $conn->error;
                                } else {
                                    echo "<meta http-equiv='refresh' content='0'>";                                    
                                }
                            }
                        } 
                                                
                                                
                        // _____________________________________________                      
                        ?>
                        <?php
                        // _____________________________________________
                        // Deleteing Category
                        
                        if (isset($_GET['delete'])) {

                            $delete_cat_id = $_GET['delete'];

                            $sql = "DELETE FROM cms_categories WHERE cat_id = '{$delete_cat_id}'";

                            if ($conn->query($sql) !== TRUE) {
                                echo 'Error:' . '<br>' . $conn->error;
                            } else {
                                // echo "<meta http-equiv='refresh' content='0'>";  // <- to refresh
                                header("Location: categories.php");                 // <- to refresh
                            }
                        }
                        
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
                        // Update category
                        if (isset($_GET['edit'])) {

                            
                            $sql = "SELECT * FROM cms_categories WHERE cat_id = '{$_GET['edit']}' LIMIT 1;";

                            $edit_cat = $conn->query($sql);

                            if ($conn->error) {
                                die('Error: ' . '<br>' . $conn->error);
                            } else {
                                $edit_cat = mysqli_fetch_assoc($edit_cat);
                            }

                        }
                        
                        ?>

                        <form action="?" method="POST">
                            <div class="form-group">
                            <label for="cat-title">Add Categories</label>
                                <input class="form-control" type="text" name="cat_title"
                                    <?php
                                    if (isset($edit_cat)) {
                                        echo "value='{$edit_cat['cat_title']}'";
                                    }
                                    
                                    ?>                                
                                >
                            </div>
                            <div class="form-group">
                                <input class="btn btn-primary" type="submit" name="update" value="Update">
                            </div>
                        </form>


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

                                if (isset($categories) && $categories->num_rows > 0) {

                                    while($row = mysqli_fetch_assoc($categories)) {

                                        $cat_id = $row['cat_id'];
                                        $cat_title = $row['cat_title'];

                                                            echo "<tr>";
                                                            echo "<td>{$cat_id}</td>";
                                                            echo "<td>{$cat_title}</td>";
                                                            echo "<td><a href='categories.php?delete={$cat_id}'>Delete</a></td>";
                                                            echo "<td><a href='categories.php?edit={$cat_id}'>Edit</a></td>";
                                                            echo "</tr>";                                            
                                    }
                                }               
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
