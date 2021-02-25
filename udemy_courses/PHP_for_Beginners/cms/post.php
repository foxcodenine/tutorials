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
<!-- --------------------------------------------------------------- -->
                <?php

                // $testDate =  new DateTime();
                // echo $testDate->format('Y\-m\-d\ h:i:s');

                $current_post_id = $_GET['p_id'];

               

                $sql = "SELECT * FROM cms_posts WHERE post_id = {$current_post_id}";
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

                <!-- Comments Form -->
                <div class="well">
                    <h4>Leave a Comment:</h4>
                    <form   method="post" action="post.php?p_id=<?php echo $current_post_id;?>"  >

                    
                        <div class="form-group">
                        <label for="comm_author">Author</label>
                            <input type="text" class="form-control" name="comm_author">
                        </div>
                    
                        <div class="form-group">
                        <label for="comm_email">Email</label>
                            <input type="email" class="form-control" name="comm_email">
                        </div>


                        <div class="form-group">
                        <label for="comm_content">Content</label>
                            <textarea name="comm_content" class="form-control" rows="3"></textarea>
                        </div>

                        <button name="create_comment" type="submit" class="btn btn-primary" >Submit</button>
                    </form>
                </div>

                <hr>

                <!-- Posted Comments -->

                <!-- Comment -->

<!-- --------------------------------------------------------------- -->

<?php

$sql = "SELECT * FROM cms_comments 
        WHERE comm_post_id = {$current_post_id} 
        AND 
        comm_status !=  'unapproved' 
        ORDER BY comm_id DESC;";

$result = $conn->query($sql);

if ($conn->error) {
    die('Error' . '<br>' . $conn->error);
}


while ($row = $result->fetch_assoc()) {

    $date = new DateTime($row['comm_date']);
    $date = $date->format('F d, o  g:i:s A');

    ?>
                <div class="media">
                    <a class="pull-left" href="#">
                        <img class="media-object" src="http://placehold.it/64x64" alt="">
                    </a>
                    <div class="media-body">
                        <h4 class="media-heading"><?php echo $row['comm_author'];?>
                            <small><?php echo $date;?></small>
                        </h4>
                        <?php echo $row['comm_content'];?>
                    </div>
                </div>

    <?php } ?>


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
