<?php require './includes/db.php'; ?>
<?php require_once './functions.php'; ?>
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

                <!-- First Blog Post -->
                <?php

                // $testDate =  new DateTime();
                // echo $testDate->format('Y\-m\-d\ h:i:s');

                $post_cat_id = escape($_GET['c_id']);


                
                if (is_admin($_SESSION['username'])) {                   

                    $stmt1 = mysqli_prepare($conn, 
                        "SELECT post_id, post_title, post_author, post_date, post_image, post_content 
                         FROM cms_posts WHERE post_cat_id = ?"                    
                    );

                } else {

                    $stmt2 = mysqli_prepare($conn, 
                    "SELECT post_id, post_title, post_author, post_date, post_image, post_content 
                     FROM cms_posts WHERE post_cat_id = ? AND post_statas = ?"   
                    );

                    $published = 'published';
                }



                if(isset($stmt1)) {

                    mysqli_stmt_bind_param($stmt1, "i", $post_cat_id);
                    mysqli_stmt_execute($stmt1);
                    mysqli_stmt_bind_result($stmt1, $post_id, $title, $author, $date, $image, $content);

                    $stmt = $stmt1;

                } else {

                    mysqli_stmt_bind_param($stmt2, "is", $post_cat_id, $published);
                    mysqli_stmt_execute($stmt2);
                    mysqli_stmt_bind_result($stmt2, $post_id, $title, $author, $date, $image, $content);

                    $stmt = $stmt2;
                }

                
                mysqli_stmt_store_result($stmt);

                if (mysqli_stmt_num_rows($stmt) !== 0 ) {
                    
                    while (mysqli_stmt_fetch($stmt)) {  
                    
                    // $post_id = $row['post_id'];
                    // $title = $row['post_title'];
                    // $author = $row['post_author'];
                        
                    $date = new DateTime($date);
                    $date = $date->format('F d, o  g:i:s A');

                    // $image = $row['post_image'];
                    $content = substr($content, 0, 150) . '...';

                    echo "
                    <h2>
                        <a href='post.php?p_id={$post_id}'>{$title}</a>
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
                    mysqli_stmt_close($stmt);
                } else {
                    echo "<h2><a style='text-decoration:none !important'> Sorry there is no post avalible!</a></h2>";
                    mysqli_stmt_close($stmt);
                }
                
                ?>


                <?php /* include "./includes/pager.php" */?>

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
