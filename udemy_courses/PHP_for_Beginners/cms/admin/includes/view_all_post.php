<?php
        $sql = "SELECT * FROM cms_posts;";
        $result_post = $conn->query($sql);
?>

<table class="table table-bordered table-hover">
    <thead >
        <tr>
            <th>Id</th>
            <th>Author</th>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Image</th>
            <th>Tags</th>
            <th>Comments</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>

    <?php
        while ($row = mysqli_fetch_assoc($result_post)) {        

            $post_id = $row['post_id'];
            $post_cat_id = $row['post_cat_id'];
            $post_title = $row['post_title'];
            $post_author = $row['post_author'];
            $post_date = $row['post_date'];
            $post_image = $row['post_image'];
            $post_content = $row['post_content'];
            $post_tags = $row['post_tags'];
            $post_count = $row['post_comments_count'];
            $post_statas = $row['post_statas'];

            echo "<tr>";
            echo "<td>{$post_id}</td>";
            echo "<td>{$post_author}</td>";
            echo "<td>{$post_title}</td>";
            echo "<td>{$post_cat_id}</td>";
            echo "<td>{$post_statas}</td>";
            echo "<td><img style='width: 200px;' src='.{$post_image}'></td>";
            echo "<td>{$post_tags}</td>";
            echo "<td>{$post_count}</td>";
            echo "<td>{$post_date}</td>";
            echo "</tr>";
        }
    ?>

    </tbody>
</table>