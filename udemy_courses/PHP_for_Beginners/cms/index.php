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

                <!-- <h1 class="page-header">
                    Page Heading
                    <small>Secondary Text</small>
                </h1> -->

                <!-- First Blog Post -->
                <?php

                // $testDate =  new DateTime();
                // echo $testDate->format('Y\-m\-d\ h:i:s');

                // _____________________________________________________
                // Pagination code
                $sql = "SELECT * FROM cms_posts WHERE post_statas = 'published'";

                if (isset($_SESSION['role']) && $_SESSION['role'] == 'Admin') {
                    $sql = "SELECT * FROM cms_posts";
                }

                $result = $conn->query($sql);
                $post_per_page = 5;
                $count_pages = ceil($result->num_rows / $post_per_page);

                $page_number = 1;

                if(isset($_GET['page'])) {
                    $page_number = escape($_GET['page']);
                } 

                $start_post = 0 + (($page_number - 1) * $post_per_page);
                // _____________________________________________________

                

                $sql = "SELECT * FROM cms_posts WHERE post_statas = 'published' LIMIT $start_post, $post_per_page";

                if (isset($_SESSION['role']) && $_SESSION['role'] == 'Admin') {
                    $sql = "SELECT * FROM cms_posts LIMIT $start_post, $post_per_page";
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
                        by <a href='author_post.php?author={$author}&p_id={$post_id}'>{$author}</a>
                    </p>
                    <p><span class='glyphicon glyphicon-time'></span> Posted on {$date}</p>
                    <hr>
                    <a href='./post.php?p_id={$post_id}'>
                        <img class='img-responsive' src='{$image}' alt=''>
                    </a>
                    <hr>
                    <p>{$content}</p>
                    <a class='btn btn-primary' href='./post.php?p_id={$post_id}'>Read More <span class='glyphicon glyphicon-chevron-right'></span></a>
    
                    <hr>
                    ";                

                    }
                } 
                if ($post->num_rows == 0) {
                    echo "<h2><a style='text-decoration:none !important'> Sorry there is no post avalible!</a></h2>";
                }
                
                ?>



                <!-- Pagination -->

                <ul class="pager">
                    
                <?php 
                    for ($i = 1; $i <= $count_pages; ++$i ) {
                        if ($page_number == $i) {
                            echo "<li><a class='active' href='{$_SERVER['PHP_SELF']}?page={$i}'>{$i}</a></li>";
                        } else {
                            echo "<li><a href='{$_SERVER['PHP_SELF']}?page={$i}'>{$i}</a></li>";
                        }
                    }
                ?>
                    
                </ul>

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
