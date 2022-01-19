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

                $sql = "SELECT * FROM cms_posts WHERE post_cat_id = {$post_cat_id} AND post_statas = 'published'";

                // if (isset($_SESSION['role']) && $_SESSION['role'] == 'Admin') {
                //     $sql = "SELECT * FROM cms_posts WHERE post_cat_id = {$post_cat_id} ";
                // }
                if (is_admin($_SESSION['username'])) {
                    $sql = "SELECT * FROM cms_posts WHERE post_cat_id = {$post_cat_id} ";
                }

                $post = mysqli_query($conn, $sql);

                if ($post) {
                    while ($row = mysqli_fetch_assoc($post)) {  
                    
                    $post_id = $row['post_id'];
                    $title = $row['post_title'];
                    $author = $row['post_author'];
                        
                    $date = new DateTime($row['post_date']);
                    $date = $date->format('F d, o  g:i:s A');

                    $image = $row['post_image'];
                    $content = substr($row['post_content'], 0, 150) . '...';

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
                }
                if ($post->num_rows == 0) {
                    echo "<h2><a style='text-decoration:none !important'> Sorry there is no post avalible!</a></h2>";
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
