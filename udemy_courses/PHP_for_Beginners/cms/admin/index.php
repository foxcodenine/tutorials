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
    // Count Posts, Comments, Users and Categories

    function myCount($table, $column=null, $status=null){

        global $conn;

        if  (!$column and !$status) {
            $sql = "SELECT * FROM {$table};";
        } else {
            $sql = "SELECT * FROM {$table} WHERE {$column}='{$status}';";
        }

        $result = $conn->query($sql);
        if ($conn->error) {die('Error Post: ' . '<br>' . $conn->error); }

        return $result->num_rows;
    }


    // __________________________________

    $post_count = myCount('cms_posts');
    $post_published_count = myCount('cms_posts', 'post_statas', 'published');
    $post_draft_count = $post_count - $post_published_count;
    
    // __________________________________

    $comments_count = myCount('cms_comments');
    $comments_approved_count = myCount('cms_comments', 'comm_status', 'unapproved');
    $comments_unapproved_count = $comments_count - $comments_approved_count;

    // __________________________________

    $users_count = myCount('cms_users');
    $users_admin_count = myCount('cms_users', 'user_role', 'Admin');
    $users_subscriber_count = $users_count - $users_admin_count;

    // __________________________________

    $categories_count = myCount('cms_categories');

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
                $elements_text = ['All Post','Active Post', 'Draft Post', 'All Comments', 'Approved Comments', 'Unapproved', 'Admin', 'Subscriber', 'Categories' ];
                $elements_count = [
                    $post_count, $post_published_count, $post_draft_count, 
                    $comments_count, $comments_approved_count, $comments_unapproved_count, 
                    $users_admin_count, $users_subscriber_count,
                    $categories_count
                ];

                for ($i = 0; $i < 9; $i++) {
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


<!-- --------------------------------------------------------------- -->
<link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script src="https://js.pusher.com/7.0/pusher.min.js"></script>

<script>

document.onreadystatechange = function () {                    // <- (A)
    if (document.readyState == "interactive") {                // <- (A)
        // Initialize your application or run some code.        

        // -------------------------------------------------------------

        const pusher = new Pusher(
            "<?php echo $_ENV['PUSHER_KEY'];?>",
            {
                cluster: "<?php echo $_ENV['PUSHER_CLUSTER'];?>",
                encrypted: true
            }
        );
        const channelNotify = pusher.subscribe('channel-notifications');

        channelNotify.bind('new_user', (notification)=>{

            let message = notification.message;

            toastr.info(message);
            console.log(message);
        });
        // -------------------------------------------------------------
        usersOnLineJS();
        myLoader();
        // -------------------------------------------------------------

                
    }
}

// (A)  Is non-jQuery equivalent of $(document).ready()
//      Ready() to make a function available after the document is loaded
// ------------------------------------------------------------- 
function usersOnLineJS() {
    
    const placeholder = document.querySelector('.users-on-line');

    if (placeholder) {    

        fetch('admin_functions.php?on_line_users=true')
        .then(response => response.text())
        .then(data => placeholder.innerText = data)
    }
}
// ------------------------------------------------------------- 
function myLoader() {
    const div_box = document.createElement('div');

    div_box.setAttribute("id", "load-screen");
    div_box.innerHTML = '<div id="loading"></div>';   
    document.body.prepend(div_box);

    setTimeout(()=>{
        div_box.classList.add('fade-loading-screen')
    }, 500);

    setTimeout(()=>{
        div_box.remove();
    }, 700);
};
// ------------------------------------------------------------- 


</script>


</body>

</html>
