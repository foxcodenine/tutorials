<!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
<div class="collapse navbar-collapse navbar-ex1-collapse">
    <ul class="nav navbar-nav side-nav">
        
        <!-- <li><a><?php /*  if ($conn) {echo 'Yes we have db';} */ ?> </a></li> -->
        
        <li><a href="index.php"><i class="fa fa-fw fa-dashboard"></i> Dashboard</a></li>

        <!-- <li><a href="charts.html"><i class="fa fa-fw fa-bar-chart-o"></i> Charts</a></li> -->

        <!-- <li><a href="tables.html"><i class="fa fa-fw fa-table"></i> Tables</a></li> -->

        <!-- <li><a href="forms.html"><i class="fa fa-fw fa-edit"></i> Forms</a></li> -->

        <!-- <li><a href="bootstrap-elements.html"><i class="fa fa-fw fa-desktop"></i> Bootstrap Elements</a></li> -->
        <li>
            <a href="#" data-toggle="collapse" data-target="#post-drop-down">
                <i class="fa fa-fw fa-arrows-v"></i> Posts <i class="fa fa-fw fa-caret-down"></i>
            </a>
            <ul id="post-drop-down" class="collapse">
                <li><a href="post.php">View All Posts</a></li>
                <li><a href="post.php?source=add_post">Create Post</a></li>
            </ul>
        </li>
        
        <li><a href="categories.php"><i class="fa fa-fw fa-wrench"></i> Catagories</a></li>
        
        <li ><a href="comments.php"><i class="fa fa-fw fa-file"></i> Comments</a></li>

        <li>
            <a href="javascript:;" data-toggle="collapse" data-target="#users-drop-down"><i class="fa fa-fw fa-arrows-v"></i> Users <i class="fa fa-fw fa-caret-down"></i></a>
            <ul id="users-drop-down" class="collapse">
                <li><a href="#">Dropdown Item</a></li>
                <li><a href="#">Dropdown Item</a></li>
            </ul>
        </li>

        <li><a href="index-rtl.html"><i class="fa fa-fw fa-dashboard"></i> Profile </a></li>

    </ul>
</div>
<!-- /.navbar-collapse -->