<?php require_once './functions.php';?>
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.php">CMS Front</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div style='float: right;' class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">

            <li><a href="./admin/">Admin</a></li>

            <?php /*        
               

            $query = "SELECT * FROM cms_categories;";

            $categories = mysqli_query($conn, $query);

            while ($row = mysqli_fetch_assoc($categories)) {
                echo "<li><a href='#'>{$row['cat_title']}</a></li>";
            } 
             */

            $active_edit = '';
            $active_registration = '';
            $active_contact = '';

            $pagename = basename($_SERVER['PHP_SELF']);

            switch ($pagename) {
                case 'contact.php':
                    $active_contact = 'active';
                    break;
                case 'registration.php':
                    $active_registration = 'active';
                    break;
            }
            
            if (!isset($_SESSION['role'])) {
                echo "<li class='{$active_registration}'><a href='registration.php'>Registration</a></li>";
            }
            echo "<li class='{$active_contact}'><a href='contact.php' >Contact</a></li>";            


            
            ?>

            

            <?php 
            
            if (isset($_SESSION['role']) && $_SESSION['role'] === 'Admin' && isset($_GET['p_id'])) {
                $p_id = escape($_GET['p_id']);
                echo "<li><a href='./admin/post.php?source=edit_post&p_id={$p_id}'>Edit</a></li>";
            } 
            ?>
                
                <!-- <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li> -->
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div>
    <!-- /.container -->
</nav>