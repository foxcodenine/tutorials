<?php require './includes/db.php'; ?>
<!DOCTYPE html>
<html lang="en">

<?php include "./includes/header.php"?>

<body>

    <!-- Navigation -->

    <?php include "./includes/navigation.php"?>

    <!-- Page Content -->
    <div class="container">

        <div class="row">

<!-- --------------------------------------------------------------- -->

            <!-- Blog Entries Column -->
            <div class="col-md-8">

                <h1 class="page-header">
                    Page Heading
                    <small>Secondary Text</small>
                </h1>

                <!-- First Blog Post -->
                <?php

                // $testDate =  new DateTime();
                // echo $testDate->format('Y\-m\-d\ h:i:s');

                $sql = "SELECT * FROM cms_posts";
                $post = mysqli_query($conn, $sql);

                if ($post) {
                    while ($row = mysqli_fetch_assoc($post)) {  
                        
                    $title = $row['post_title'];
                    $author = $row['post_author'];
                        
                    $date = new DateTime($row['post_date']);
                    $date = $date->format('F d, o  g:i:s A');

                    $image = $row['post_image'];
                    $content = $row['post_content'];

                    echo "
                    <h2>
                        <a href='#'>{$title}</a>
                    </h2>
                    <p class='lead'>
                        by <a href='index.php'>{$author}</a>
                    </p>
                    <p><span class='glyphicon glyphicon-time'></span> Posted on {$date}</p>
                    <hr>
                    <img class='img-responsive' src='{$image}' alt=''>
                    <hr>
                    <p>{$content}</p>
                    <a class='btn btn-primary' href='#'>Read More <span class='glyphicon glyphicon-chevron-right'></span></a>
    
                    <hr>
                    ";                

                    }
                }
                
                ?>

                <!-- <h2>
                    <a href="#">Blog Post Title</a>
                </h2>
                <p class="lead">
                    by <a href="index.php">Start Bootstrap</a>
                </p>
                <p><span class="glyphicon glyphicon-time"></span> Posted on August 28, 2013 at 10:00 PM</p>
                <hr>
                <img class="img-responsive" src="http://placehold.it/900x300" alt="">
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.</p>
                <a class="btn btn-primary" href="#">Read More <span class="glyphicon glyphicon-chevron-right"></span></a>

                <hr> -->

                <?php/* include "./includes/pager.php" */?>

            </div>
<!-- --------------------------------------------------------------- -->
            <!-- Blog Sidebar Widgets Column -->

            <?php include "./includes/sidebar.php"?>
        </div>
        <!-- /.row -->

        <hr>
        <!-- Footer -->
        <?php include "./includes/footer.php"?>

    </div>
    <!-- /.container -->    
    <?php include "./includes/scripts.php"?>

</body>

</html>
