<?php

if (ifItIsMethod('post')) {

    if (isset($_POST['login'])) {
        if (isset($_POST['username']) && isset($_POST['password'])) {
            loggin_user($_POST['username'], $_POST['password']);
        } else {
            redirect('index');
        }
    }
}



?>


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

    <!-- Login -->
    <div class="well">

    <?php if(isset($_SESSION['role'])): ?>

    <h4>Login as <?php echo $_SESSION['username']; ?></h4>
    <a href="/htdocs/cms/includes/logout.php" class='btn btn-primary'><i class="fa fa-fw fa-power-off"></i> Logout</a>

    <?php else: ?>

        <h4>Login</h4>
        <form <?php /* echo action=" dirname($_SERVER['PHP_SELF']) . '/includes/login.php';" */ ?> method="POST">
        
        <div class="form-group">
            <input name="username" type="text" class="form-control" placeholder="Enter Username">
        </div>


        
        <div class="input-group">
            <input name="password" type="password" class="form-control" placeholder="Enter Password">

            <span class="input-group-btn">
            <button class="btn btn-primary" name="login" type="submit">Submit</button>
            </span>
        </div>

        <div class="form-group">
            <a href="/htdocs/cms/forgot/<?php echo uniqid(true); ?>">Forgot Password</a>
        </div>

        </form>  
        
    <?php endif; ?>




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

                    if ($conn->error) {
                        die('Error1212: ' . '<br>' . $conn->error);}

                    if(isset($categories) && $categories->num_rows > 0) {

                        

                        while($row = mysqli_fetch_assoc($categories)) {
                            $cat_id = $row['cat_id'];
                            $cat_title = $row['cat_title'];

                            echo "<li><a href='/htdocs/cms/category.php?c_id={$cat_id}'>{$cat_title}</a>";
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