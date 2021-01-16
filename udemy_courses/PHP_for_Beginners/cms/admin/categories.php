<!DOCTYPE html>
<html lang="en">

<?php include './includes/header.php'?>
<?php require_once '../includes/db.php'?>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <?php include './includes/nav_admin.php'?>
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
                        <form action="">
                            <div class="form-group">
                            <label for="cat-title">Add Categories</label>
                                <input class="form-control" type="text" name="cat_title">
                            </div>
                            <div class="form-group">
                                <input class="btn btn-primary" type="submit" name="submit" value="Add Category">
                            </div>
                        </form>
                        </div>

                        <div class="col-xs-6">
                            <table class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Category Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Baseball Category</td>
                                        <td>Basketball Category</td>
                                    </tr>
                                    <tr>
                                        <td>Baseball Category</td>
                                        <td>Basketball Category</td>
                                    </tr>
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

    <?php require 'includes/scripts.php'; ?>

</body>

</html>
