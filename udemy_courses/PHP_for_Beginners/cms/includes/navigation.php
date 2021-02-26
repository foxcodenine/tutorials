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
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">

            <li><a href="http://localhost/htdocs/cms/admin/">Admin</a></li>

            <?php            

            $query = "SELECT * FROM cms_categories;";

            $categories = mysqli_query($conn, $query);

            while ($row = mysqli_fetch_assoc($categories)) {
                echo "<li><a href='#'>{$row['cat_title']}</a></li>";
            } 
            
            echo "<li><a href='registration.php'>Registration</a></li>";
            
            ?>

            <?php 
                if (isset($_SESSION['role']) && $_SESSION['role'] === 'Admin' && isset($_GET['p_id'])) {
                    echo "<li><a href='./admin/post.php?source=edit_post&p_id={$_GET['p_id']}'>Edit</a></li>";
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