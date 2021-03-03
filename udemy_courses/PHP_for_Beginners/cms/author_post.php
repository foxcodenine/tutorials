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
                    <!-- Page Heading -->
                    All Post by <?php echo $_GET['author']; ?>
                    <small>Secondary Text</small>
                </h1>

                <!-- First Blog Post -->
<!-- --------------------------------------------------------------- -->
                <?php

                // $testDate =  new DateTime();
                // echo $testDate->format('Y\-m\-d\ h:i:s');

                $current_post_id = $_GET['p_id'];
                $current_author = $_GET['author'];

               

                $sql = "SELECT * FROM cms_posts WHERE post_author= '{$current_author}'";
                $post = mysqli_query($conn, $sql);

                if ($post) {
                    while ($row = mysqli_fetch_assoc($post)) {  
                        
                    $title = $row['post_title'];
                    $author = $row['post_author'];
                        
                    $date = new DateTime($row['post_date']);
                    $date = $date->format('F d, o  g:i:s A');

                    $image = $row['post_image'];
                    $content = $row['post_content'];

                    $post_id = $row['post_id'];

                    echo "
                    <h2>
                        <a href='post.php?p_id={$post_id}'>{$title}</a>
                    </h2>
                    <p class='lead'>
                        by <a href='#'>{$author}</a>
                    </p>
                    <p><span class='glyphicon glyphicon-time'></span> Posted on {$date}</p>
                    <hr>
                        <a href='post.php?p_id={$post_id}'><img class='img-responsive' src='{$image}' alt=''></a>
                    <hr>
                    <p>{$content}</p>
                    
    
                    <hr>
                    ";                

                    }
                }
                
                ?>
<!-- --------------------------------------------------------------- -->
                <?php
                
                if (isset($_POST['create_comment'])) {

                    $comm_author  = mysqli_escape_string($conn, $_POST['comm_author']);
                    $comm_email   = mysqli_escape_string($conn, $_POST['comm_email']);
                    $conn_content = mysqli_escape_string($conn, $_POST['comm_content']);

                    $conn_post_id = $current_post_id;

                    if (
                        !empty(trim($comm_author)) &&
                        !empty(trim($comm_email)) &&
                        !empty(trim($comm_content)) 
                    ) {                    
                        $sql = "INSERT INTO cms_comments (
                            comm_author, comm_email, comm_post_id, comm_content
                            ) VALUES(
                                '{$comm_author}', '{$comm_email}', {$conn_post_id}, '{$conn_content}'
                            )";

                        if ($conn->query($sql) != TRUE) {
                            die('Error: <br>' . $conn->error);
                        } 
                    } else {
                        echo "<script>alert('Fields cannot be empty!')</script>";
                    }
                }
                
                ?>
<!-- --------------------------------------------------------------- -->
                <?php/* include "./includes/pager.php" */?>

<!-- Start Comment Section ----------------------------------------- -->         

                <!-- Blog Comments -->


                <!-- Comment -->


<!-- --------------------------------------------------------------- -->



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
