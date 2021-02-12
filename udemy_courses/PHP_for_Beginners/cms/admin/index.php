<!DOCTYPE html>
<html lang="en">

<?php include './includes/admin_header.php'?>


<body>

    <div id="wrapper">

        <!-- Navigation -->
        <?php include './includes/admin_nav.php'?>
<!-- --------------------------------------------------------------- -->

        <div id="page-wrapper">

            <div class="container-fluid">

                <!-- Page Heading -->
                
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">
                            Welcome To Admin
                            <small><?php echo  $_SESSION['firstname'] . ' ' . $_SESSION['lastname']; ?></small>

                            
                        </h1>

                        <!-- <ol class="breadcrumb">
                            <li>
                                <i class="fa fa-dashboard"></i>  <a href="index.html">Dashboard</a>
                            </li>
                            <li class="active">
                                <i class="fa fa-file"></i> Blank Page
                            </li>
                        </ol> -->


                    </div>
                </div>
                <!-- /.row -->
                                <!-- /.row -->
                
<div class="row">

    <?php 

    // __________________________________
    
    $sql = "SELECT * FROM cms_posts;";
    $result = $conn->query($sql);

    if ($conn->error) {die('Error Post: ' . '<br>' . $conn->error); }
    
    $post_count = $result->num_rows;
    

    
    $sql = "SELECT * FROM cms_posts WHERE post_statas='published';";
    $result = $conn->query($sql);

    if ($conn->error) {die('Error Post: ' . '<br>' . $conn->error); }    
    $post_published_count = $result->num_rows;

    $post_draft_count = $post_count - $post_published_count;

    // __________________________________

    $sql = "SELECT * FROM cms_comments;";
    $result = $conn->query($sql);

    if ($conn->error) {die('Error Post: ' . '<br>' . $conn->error); }
    
    $comments_count = $result->num_rows;


    $sql = "SELECT * FROM cms_comments WHERE NOT comm_status='unapproved';";
    $result = $conn->query($sql);

    if ($conn->error) {die('Error Post: ' . '<br>' . $conn->error); }
    
    $comments_approved_count = $result->num_rows;
    $comments_unapproved_count = $comments_count - $comments_approved_count;

    // __________________________________

    $sql = "SELECT * FROM cms_users;";
    $result = $conn->query($sql);

    if ($conn->error) {die('Error Post: ' . '<br>' . $conn->error); }
    
    $users_count = $result->num_rows;



    $sql = "SELECT * FROM cms_users WHERE user_role='Admin';";
    $result = $conn->query($sql);

    if ($conn->error) {die('Error Post: ' . '<br>' . $conn->error); }
    
    $users_admin_count = $result->num_rows;
    $users_subscriber_count = $users_count - $users_admin_count;


    // __________________________________

    $sql = "SELECT * FROM cms_categories;";
    $result = $conn->query($sql);

    if ($conn->error) {die('Error Post: ' . '<br>' . $conn->error); }
    
    $categories_count = $result->num_rows;

    // __________________________________
    ?>

    <div class="col-lg-3 col-md-6">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                        <i class="fa fa-file-text fa-5x"></i>
                    </div>
                    <div class="col-xs-9 text-right">
                  <div class='huge'><?php echo $post_count;?></div>
                        <div>Posts</div>
                    </div>
                </div>
            </div>
            <a href="./post.php">
                <div class="panel-footer">
                    <span class="pull-left">View Details</span>
                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                    <div class="clearfix"></div>
                </div>
            </a>
        </div>
    </div>

    <div class="col-lg-3 col-md-6">
        <div class="panel panel-green">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                        <i class="fa fa-comments fa-5x"></i>
                    </div>
                    <div class="col-xs-9 text-right">
                     <div class='huge'><?php echo $comments_count;?></div>
                      <div>Comments</div>
                    </div>
                </div>
            </div>
            <a href="comments.php">
                <div class="panel-footer">
                    <span class="pull-left">View Details</span>
                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                    <div class="clearfix"></div>
                </div>
            </a>
        </div>
    </div>

    <div class="col-lg-3 col-md-6">
        <div class="panel panel-yellow">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                        <i class="fa fa-user fa-5x"></i>
                    </div>
                    <div class="col-xs-9 text-right">
                    <div class='huge'><?php echo $users_count;?></div>
                        <div> Users</div>
                    </div>
                </div>
            </div>
            <a href="users.php">
                <div class="panel-footer">
                    <span class="pull-left">View Details</span>
                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                    <div class="clearfix"></div>
                </div>
            </a>
        </div>
    </div>

    <div class="col-lg-3 col-md-6">
        <div class="panel panel-red">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                        <i class="fa fa-list fa-5x"></i>
                    </div>
                    <div class="col-xs-9 text-right">
                        <div class='huge'><?php echo $categories_count;?></div>
                         <div>Categories</div>
                    </div>
                </div>
            </div>
            <a href="categories.php">
                <div class="panel-footer">
                    <span class="pull-left">View Details</span>
                    <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                    <div class="clearfix"></div>
                </div>
            </a>
        </div>
    </div>
</div>
<!-- --------------------------------------------------------------- -->

<div class="row">
<script type="text/javascript">
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Data', 'Count'],

                <?php 
                $elements_text = ['Active Post', 'Draft Post', 'Approved Comments', 'Unapproved Comments', 'Admin', 'Subscriber', 'Categories' ];
                $elements_count = [
                    $post_published_count, $post_draft_count, 
                    $comments_approved_count, $comments_unapproved_count, 
                    $users_admin_count, $users_subscriber_count,
                    $categories_count
                ];

                for ($i = 0; $i < 7; $i++) {
                    echo "['{$elements_text[$i]}', {$elements_count[$i]}],";
                }
                
                ?>

                // ['Posts', 1000]
            ]);

            var options = {
                chart: {
                    title: '',
                    subtitle: '',
                }
            };

            var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

            chart.draw(data, google.charts.Bar.convertOptions(options));
      }
</script>
<div id="columnchart_material" style="width: 'auto'; height: 500px;"></div>

</div>
<!-- --------------------------------------------------------------- -->
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- /#page-wrapper -->
        
<!-- --------------------------------------------------------------- -->
    </div>
    <!-- /#wrapper -->
    

    <?php require 'includes/admin_scripts.php'; ?>

</body>

</html>
