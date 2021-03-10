<!-- Top Menu Items -->
<ul class="nav navbar-right top-nav">
    <!-- --------------------------------------------------------------- -->
    <!-- <li><a href="#">Online Users <?php // echo users_online();?></a></li> --><!-- Updating users_online with JS get request insted (below) -->
    <li><a href="#">Online Users <span class="users-on-line"></span></a></li>

    <li><a href="../">Home Page</a></li>

    

    <!-- --------------------------------------------------------------- -->

    <!-- <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-envelope"></i> <b class="caret"></b></a>
        <ul class="dropdown-menu message-dropdown">
            <li class="message-preview">
                <a href="#">
                    <div class="media">
                        <span class="pull-left">
                            <img class="media-object" src="http://placehold.it/50x50" alt="">
                        </span>
                        <div class="media-body">
                            <h5 class="media-heading">
                                <strong>John Smith</strong>
                            </h5>
                            <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                            <p>Lorem ipsum dolor sit amet, consectetur...</p>
                        </div>
                    </div>
                </a>
            </li>
            <li class="message-preview">
                <a href="#">
                    <div class="media">
                        <span class="pull-left">
                            <img class="media-object" src="http://placehold.it/50x50" alt="">
                        </span>
                        <div class="media-body">
                            <h5 class="media-heading">
                                <strong>John Smith</strong>
                            </h5>
                            <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                            <p>Lorem ipsum dolor sit amet, consectetur...</p>
                        </div>
                    </div>
                </a>
            </li>

            <li class="message-footer">
                <a href="#">Read All New Messages</a>
            </li>
        </ul>
    </li> -->

    <!-- --------------------------------------------------------------- -->

    <!-- <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-bell"></i> <b class="caret"></b></a>
        <ul class="dropdown-menu alert-dropdown">
            <li>
                <a href="#">Alert Name <span class="label label-default">Alert Badge</span></a>
            </li>
            <li>
                <a href="#">Alert Name <span class="label label-primary">Alert Badge</span></a>
            </li>
            <li>
                <a href="#">Alert Name <span class="label label-success">Alert Badge</span></a>
            </li>
            <li>
                <a href="#">Alert Name <span class="label label-info">Alert Badge</span></a>
            </li>
            <li>
                <a href="#">Alert Name <span class="label label-warning">Alert Badge</span></a>
            </li>
            <li>
                <a href="#">Alert Name <span class="label label-danger">Alert Badge</span></a>
            </li>
            <li class="divider"></li>
            <li>
                <a href="#">View All</a>
            </li>
        </ul>
    </li> -->

    <!-- --------------------------------------------------------------- -->
    <?php $fullname = $_SESSION['firstname'] . ' ' . $_SESSION['lastname'];?>

    <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <i class="fa fa-user"></i> <?php echo $fullname; ?> <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">

            <li><a href="./profile.php"><i class="fa fa-fw fa-user"></i> Profile </a></li>

            <!-- <li><a href="#"><i class="fa fa-fw fa-envelope"></i> Inbox</a></li> -->
            <!-- <li><a href="#"><i class="fa fa-fw fa-gear"></i> Settings</a></li> -->
            <li class="divider"></li>
            <li><a href="../includes/logout.php"><i class="fa fa-fw fa-power-off"></i> Log Out</a></li>

        </ul>
    </li>

</ul>