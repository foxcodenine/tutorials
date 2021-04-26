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
                    <small>Comments</small>
                </h1>

<!-- -------------------------------------- -->
                <?php

                include './includes/view_all_comments.php';
                
               
                ?>                      
<!-- -------------------------------------- -->
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
