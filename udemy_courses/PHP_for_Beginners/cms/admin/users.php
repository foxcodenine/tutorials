<!DOCTYPE html>
<html lang="en">

<?php include './includes/admin_header.php';


if (!is_admin($_SESSION['username'])) {
    header('Location: index.php');
}

?>



<body>

    <div id="wrapper">

    <!-- Navigation -->
    <?php include './includes/admin_nav.php'?>
    <?php include './includes/delete_modal.php'?>
<!-- --------------------------------------------------------------- -->

    <div id="page-wrapper">

        <div class="container-fluid">

            <!-- Page Heading -->
            
            <div class="row">
                <div class="col-lg-12">

                <h1 class="page-header">
                    Welcome To Admin
                    <small>Users</small>
                </h1>

<!-- -------------------------------------- -->
                <?php 
                
                if (isset($_GET['source'])) {
                    $source = $_GET['source'];
                } else {
                    $source = '';
                }

                switch($source) {

                    case 'add_user';
                    include './includes/add_user.php';
                    break;

                    case 'edit_user';
                    include './includes/edit_user.php';
                    break;

                    default:
                    include './includes/view_all_users.php';
                } 
                
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
