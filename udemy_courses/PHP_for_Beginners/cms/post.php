<!-- --------------------------------------------------------------- -->

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

                $sql = "SELECT * FROM cms_posts WHERE post_id = {$_GET['p_id']}";
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

                <?php/* include "./includes/pager.php" */?>

<!-- Start Comment Section ----------------------------------------- -->         

                <!-- Blog Comments -->

                <!-- Comments Form -->
                <div class="well">
                    <h4>Leave a Comment:</h4>
                    <form role="form">
                        <div class="form-group">
                            <textarea class="form-control" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>

                <hr>

                <!-- Posted Comments -->

                <!-- Comment -->
                <div class="media">
                    <a class="pull-left" href="#">
                        <img class="media-object" src="http://placehold.it/64x64" alt="">
                    </a>
                    <div class="media-body">
                        <h4 class="media-heading">Start Bootstrap
                            <small>August 25, 2014 at 9:30 PM</small>
                        </h4>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </div>

                <!-- Comment -->
                <div class="media">
                    <a class="pull-left" href="#">
                        <img class="media-object" src="http://placehold.it/64x64" alt="">
                    </a>
                    <div class="media-body">
                        <h4 class="media-heading">Start Bootstrap
                            <small>August 25, 2014 at 9:30 PM</small>
                        </h4>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        <!-- Nested Comment -->
                        <div class="media">
                            <a class="pull-left" href="#">
                                <img class="media-object" src="http://placehold.it/64x64" alt="">
                            </a>
                            <div class="media-body">
                                <h4 class="media-heading">Nested Start Bootstrap
                                    <small>August 25, 2014 at 9:30 PM</small>
                                </h4>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </div>
                        </div>
                        <!-- End Nested Comment -->
                    </div>
                </div>
                <!-- End Comment -->
<!-- End Comment Section ------------------------------------------- -->
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
